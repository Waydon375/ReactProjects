import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Parties from "./Pages/Parties";
import Result from "./Pages/Result";


const VotingApp = () =>{
  return <Router>
    <div>
      <Routes>
        <Route exact path="/" Component={Parties}/>
         <Route path="/result" Component={Result} /> 
      </Routes>
    </div>
  </Router>
}


render(<VotingApp/>, document.querySelector("#root"));