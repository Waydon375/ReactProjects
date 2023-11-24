import React from 'react';


const OptionSelection = ({ arrayItems, selectOption }) => {
  return (
    <div className='heading'>
      <h1>ChatGPT Clone</h1>
      <div className='grid-main'>
        {arrayItems.map((item) => (
          <div className='grid-child' onClick={() => selectOption(item.option)}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OptionSelection;
