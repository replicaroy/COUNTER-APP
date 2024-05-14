import React, { useState } from 'react'

function Counter() {
    const [counter, SetCounter] = useState(0);

    const Plus =()=>{
        SetCounter(counter+1)
    }

    const Reset =()=>{
        SetCounter(0)
    }

    const Reduce =()=>{
        if(counter>0){
        SetCounter(counter-1)
        }
        
    }


  return (
    <>
    <div className="container">
    <div className="counter-value">
        <h1>{counter}</h1>
    </div>
    <div className="control-buttons">
    <button className="plus"  onClick={Plus} ><i class="fa-solid fa-plus"></i></button>
    <button className="reset" onClick={Reset} ><i class="fa-solid fa-power-off"></i></button>
    <button className="reduce" onClick={Reduce} ><i class="fa-solid fa-minus"></i></button>
    </div>
    </div>
      
    </>
  )
}

export default Counter
