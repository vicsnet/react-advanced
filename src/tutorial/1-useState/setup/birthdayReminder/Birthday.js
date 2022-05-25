import React, { useState } from 'react';
import { data } from './data';
import "./birthday.css";

function Birthday() {
    const [details, setDetails] = React.useState(data);
    const [text, setText] = useState('10 birthdays today')
    //const hi = 'hello';
    
 
    const reset = () => {
        
        setDetails([]);
        if (text === '10 birthdays today') {
            setText('Birthday has been cleared')
        } 
        
        
    }
   
        
  
    return (
      <div className='container'>
            <h3 id="myheader">{ text }</h3>
          {
              details.map((person) => {
                  const { id,image, name, age } = person;
                  return (
                      <div key={id} className="details">
                          <img src={image} alt='' />
                          
                          <div className="details-name">
                          <h4>{name}</h4>
                          <p>{age}</p>
                          </div>
                            
                     </div>

                  )
              })
              
          }
          
          {/* <div>
              <img src="" alt="" />
              <h4>{ details.name }</h4>
              <h5>{details.age}</h5>
          </div> */}
            <button onClick={reset} >Clear All</button>
    </div>
  )
}

export default Birthday