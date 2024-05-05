import { useState } from "react"

export default function State() {
    // value (المقدار الثابت الذي يجب اظهاره ع الشاشة)
    //  setValue(هو func يسندها ال المقدار الثابت)(تغير ع الvalue)
   const [counter , setCounter] = useState (0)  //Initial value القيمة الابتدائية
   //تغير القيمة الاساسية 
    //   function update (){
    //    setCounter(counter + 1) 
    //   }
   const updateUp = () => setCounter(counter + 1)
   const updateDown = () => setCounter(counter - 1)



  return (
    <>
       <h1> {counter} </h1>  

       <button onClick={updateUp}>+</button>
       <button onClick={updateDown}>-</button>

    </>
  )
}

