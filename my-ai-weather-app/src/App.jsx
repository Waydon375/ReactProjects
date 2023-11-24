import { useState } from 'react';
import OpenAI from 'openai';
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions';
import './App.css';

function App() { 
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_Open_AI_Key,
    dangerouslyAllowBrowser: true
  });

  const [option, setOption] = useState({});
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = {...option, prompt: input };

    try {
      const response = await openai.chat.completions.create(object);
      console.log(response.data.choices[0].text);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error('API rate limit exceeded. Please try again later');
        setTimeout(() => {
          doStuff();
        }, 5000);
      }
    }
  };

  return (
    <>
      <div className='App'>
        {Object.values(option).length === 0 ? (
          <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
        ) : (
          <Translation doStuff={doStuff} setInput={setInput}/>
        )}
      </div>
    </>
  );
}

export default App;

