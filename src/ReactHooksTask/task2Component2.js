import React, { memo } from "react";

const Task2Component2 = (props) => {
  console.log("component2");
  return (
    <div>
      <br />
      {props.inpval1}<br/>
      <input type="text" onChange={props.inputChanger} />
      <br></br>
      
    </div>
  );
};

export default memo(Task2Component2);
