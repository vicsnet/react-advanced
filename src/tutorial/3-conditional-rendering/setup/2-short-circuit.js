import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState('');

  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return(
  <>
  
    <h2>short circuit</h2>
    {/* <h3>{firstValue}</h3>
      <h3>Value:{secondValue}</h3> */}
      <h1>{text || 'john doe'}</h1>
      <button className='btn' onClick={()=> setIsError(!isError)}>toggle error</button>
      {!isError || <h3>Error</h3>}
      
      {/* tenary operator */}
      {isError ? (<p>there is an error</p>) :
      
        ( 
          <div>
            <h2>there is no error</h2>
          </div>
        )}
  
    </>
    );
};

export default ShortCircuit;
