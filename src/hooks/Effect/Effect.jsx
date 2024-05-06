import React, { useEffect , useState } from 'react'

export default function Effect() {
    const [counter , setCounter] = useState (0)
    //component lifeCycle  (Mount -> Update -> UnMount)
    //  useEffect (fun ,dep)  
     // تنفيد ال fuc بناء ع ال array []
    useEffect (()=>{
         console.log("Bayan") // mount 
      return ()=>{
        console.log("Bayan alriyati") //unmount
      }
    },[counter]) // update

    const updateUp = () => setCounter(counter + 1)

  return (
    <div>
      Effect
      <>
       <h1> {counter} </h1>  

       <button onClick={updateUp}>+</button>
       {/* <button onClick={updateDown}>-</button> */}

    </>
    </div>
  )
}

