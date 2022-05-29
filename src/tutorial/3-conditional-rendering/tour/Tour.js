import React, { useState, useEffect } from 'react'
//import { data } from './data'

//import data from './data.json'
import axios from 'axios';

// const url = 'https://api.github.com/users/QuincyLarson'
//const url = 'https://jsonplaceholder.typicode.com/users';
//const url = 'https://api.randomuser.me/'
//const uml = 'https://jsonplaceholder.typicode.com/photos';
const Tour = () => {
    const [details, setDetails] = useState();
    //const [isLoading, setIsLoading] = useState(false)
    //const [isError, setIsError] = useState(false);

//     useEffect(() => {
//         // Axios.get(url)
//         //     .then(res => {
//         //     setDetails(res.details)
//         // })
//         setIsLoading(true)
//         console.log('call useEffect');
//         fetch(url)
//             .then((resp) =>
//                 resp.json())
//             .then((details) => {
//                 console.log(details)
//                 const { users } = details;
//                 setDetails(users)

               
//                 setIsLoading(false);
//            });
        
        
// }, []);
    useEffect(() => {
        console.log('call use Effect');

        axios.get('https://jsonplaceholder.typicode.com/todos ')
       
            .then((res) => {
               const responseTodos = res.data;
            setDetails(responseTodos)
                console.log(responseTodos);
         })
    }, [])
    
    if (details) {
        return (
            <>
                {details &&
                    details.map((detail) => {
                        
                    const { id, userId, title } = detail;
                    console.log(detail);
                    return (
                        <div key={id}>
                            <h5>{title}</h5>
                            <h6>Assigned to user: { userId }</h6>
                        </div>
                    )
                })}
                
        </>
        )
    }
        // return 
        //     (<h2> { details}</h2>)
        //     // <div>
        //     //     <h1>{details.map(Login =>
        //     //     {
                    
        //     //         return(
        //     //         <div >
        //     //             <h2>{ Login.login }</h2>
        //     //         </div>
        //     //         )
        //     //     })
        //     //     }</h1>
        //         {/* <h1>{details.id}</h1> 
        //         {console.log(details.id)} */}
                 
        //         {/* {details.map((person) => {
        //             const { id, login,  } = person;
        //             return (
        //                 <div key={id} className="details">
        //                     <h2> {login}</h2>
        //                     <h2> {url}</h2>
        //                 </div>
        //             )
        //         })
        //         } 
        //          */}
              
        //     // </div>
        
    // }
    
};
    

export default Tour