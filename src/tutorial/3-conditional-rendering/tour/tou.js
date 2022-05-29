import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Tou = () => {
    const [todos, setTodos] = useState()

    const removeItem = (id) => {
        let newPeople = todos.filter((person)=>person.id !== id)
        setTodos(newPeople)
      }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos ')
       
        .then((res) => {
           const responseTodos = res.data;
        setTodos(responseTodos)
            
     })
    }, [])
  return (
      <div>
          {todos &&
              todos.map((todo) => {
                        
                  const { id, userId, title } = todo;
                    
                  return (
                      <div key={id}>
                          <h5>{title}</h5>
                          <h6>Assigned to user: {userId}</h6>
                          <button onClick={() => removeItem(id)}>
                            remove
                        </button>
                      </div>
                  )
              }  )}
    </div>
  )
}

export default Tou