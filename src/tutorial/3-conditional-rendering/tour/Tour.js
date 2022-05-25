import React, { useState, useEffect } from 'react'
import {data} from './data'
//import data from './data.json'
const Tour = () => {
    const [details, setDetails] = React.useState('default');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log('call useEffect');
       fetch({data}) 
           .then((details) => {
               const { data } = details;
            setIsLoading(true);
            setDetails(data);
        });
        
        
        
}, [details]);
    
    if (isLoading) {
        return <h2>Loading... </h2>
    }
    if (details) {
        return (
            <div>
              
                {details.map((person) => {
                    const { id, name, age } = person;
                    return (
                        <div key={id} className="details">
                            <h2> {name}</h2>
                        </div>
                    )
                })
                }
              
              
            </div>
        );
    }
    
};
    

export default Tour