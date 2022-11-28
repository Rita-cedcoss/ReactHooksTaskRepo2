import React, { memo, useCallback, useState } from 'react'
import Task2Component1 from './Task2Component1'
import Task2Component2 from './task2Component2'
import Task2Component3 from './Task2Component3'
const Task2useCallback = () => {
  const[inpval1,setInpval1]=useState();
  const[inpval2,setInpval2]=useState()
  const inputHandler=useCallback((e)=>{
     let val1=e.target.value;
     console.log(val1)
     setInpval1(val1)
  },[inpval1])
  const inputChanger=useCallback((e)=>{
    let val2=e.target.value;
    console.log(val2);
    setInpval2(val2);
  },[inpval2]);
  return (
    <div>
     <Task2Component1  inputHandler={inputHandler}/>
     <Task2Component2  inpval1={inpval1} inputChanger={inputChanger}/>
     <Task2Component3  inpval2={inpval2}/>
    </div>
  )
}

export default memo(Task2useCallback)