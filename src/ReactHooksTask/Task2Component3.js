import React, { memo } from 'react'

const Task2Component3 = (props) => {
     console.log("Component3");
    return (
    <div>{props.inpval2}</div>
  )
}

export default memo(Task2Component3)