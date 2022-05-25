import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('clean up effect')
      window.removeEventListner('resize', checkSize);
    };

  }, [])
  return (
    
   <>
    <h2>useEffect cleanup</h2>
    <h3>Window</h3>
    <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
