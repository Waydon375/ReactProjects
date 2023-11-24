import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from '../firebase';
import Chart, { PolarAreaController } from "chart.js/auto"
import '../index.css';

 const Result = () =>{
  const [result, setResult] = useState([]);
  const [totalVotesA, setTotalVotesA] = useState(0)
  const [totalVotesB, setTotalVotesB] = useState(0)
  const [totalVotesC, setTotalVotesC] = useState(0)
  const chartRef = useRef(null)

  useEffect(() => {
      const fectchData = async () => {
        try{
          const query = await getDocs(collection(db, 'votes'))
          const data = query.docs.map((doc) => doc.data())
          setResult(data)
          console.log('Data fetched successfully:', data);

          const totalA = data
          .reduce((prev, curr) => prev + (curr.partyA || 0), 0)
          setTotalVotesA(totalA)

          const totalB = data
          .reduce((prev, curr) => prev + (curr.partyB || 0), 0)
          setTotalVotesB(totalB)

          const totalC = data
          .reduce((prev, curr) => prev + (curr.partyC || 0), 0)
          setTotalVotesC(totalC)

        } catch (error) { 
          console.error('Error fetching data', error)
        }
      }
      fectchData()
  }, []);

  useEffect(() =>{
    if(chartRef.current){
      chartRef.current.destroy();
    }
    const ctx = document.getElementById('voteChart').getContext('2d');
    chartRef.current = new Chart(ctx, {
      type : 'polarArea',
      data: chartData,
      options: chartOptions
    })
  },[totalVotesA, totalVotesB, totalVotesC]);
    
  const chartData = {
    labels: ['ANC', 'DA', 'EFF'],
    datasets: [{
      label: 'Total Votes',
      data: [totalVotesA, totalVotesB, totalVotesC],
      backgroundColor: [
        'rgb(41, 151, 9)',
        'rgb(10, 70, 178)',
        'rgb(244, 21, 21)'
        ,]
    }
  ]
};

  const chartOptions = {
    responsive : true,
    maintainAspectRatio : false
  };


  return(
    <>
      <canvas id='voteChart' width={600} height={600}/>
    </>
  )
   
 }

  export default Result;