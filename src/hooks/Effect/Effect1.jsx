import React, { useEffect , useState } from 'react'

export default function Effect1() {
    const [users , setUsers] = useState ([])
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data)) // الداتا صارت داخل اليوزر
    },[]) 

    const updateUp = () => setUsers(users + 1)

  return (
    <div>
      Effect
      <>
       <h1> {users} </h1>  

       <button onClick={updateUp}>+</button>
       {/* <button onClick={updateDown}>-</button> */}

    </>
    </div>
  )
}

