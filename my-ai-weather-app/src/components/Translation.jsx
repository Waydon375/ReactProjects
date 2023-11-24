import React from 'react';

const Translation = ({ doStuff, setInput }) => {
  return (
    <div>
      <textarea className='text-area' cols={50} rows={10} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button className='action-btn' onClick={doStuff}>DO YOUR STUFF!</button>
      </div>
    </div>
  );
}

export default Translation;
