import React, { memo } from "react";

const Task2Component2 = (props) => {
  console.log("component2");
  return (
    <div>
      <br />
      <input type="text" onChange={props.inputChanger} />
      <br></br>
      {props.inpval1}
    </div>
  );
};

export default memo(Task2Component2);
