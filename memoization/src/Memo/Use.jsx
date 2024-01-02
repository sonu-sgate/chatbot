import React, { useState } from 'react'

export default function Use(props) {
    const [counter,setCounter]=useState(0)
    const handleinc=()=>{
        setCounter(counter+1)
    }
    const handledesc=()=>{
        setCounter(counter-1)
        console.warn("......")
    }
    const isEven=()=>{
      let i=0
      while(i<200000)i++
      console.time()
      return counter%2==0
 
    }
  return (
    <div>
      <button onClick={handleinc}>INC+</button>
      {counter}{isEven()?"Even":"Odd"}
      <button onClick={handledesc}>DESC-</button>
    </div>
  )
}
