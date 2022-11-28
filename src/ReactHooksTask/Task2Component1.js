import React, { memo } from 'react'

const Task2Component1 = (props) => {
    console.log("component1");
    return (
    <div>
        <input type="number" onChange={props.inputHandler}></input>
    </div>
  )
}

export default memo(Task2Component1)