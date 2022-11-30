import React, { useMemo, useRef, useState } from "react";
let flag = 1;
const Task1useMemo = () => {
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const [result, setResult] = useState(0);
  const [toggleRes, setToggleRes] = useState("black");

  const multiplication = useMemo(() => {
    let value1 = 20;
    let value2 = 30;
    let multiply = value1 * value2;
    console.log(multiply);
    return multiply;
  }, []);

  const sum = () => {
    let num1 = ref1.current.value;
    let num2 = ref2.current.value;
    let sum = parseInt(num1) + parseInt(num2);
    setResult(sum);
  };
  const btnToggle = () => {
    if (flag === 1) {
      setToggleRes("white");
      flag = 0;
    } else {
      setToggleRes("black");
      flag = 1;
    }
  };
  return (
    <div>
      <p>multiplication of two numbers{multiplication}</p>
      {result === 0 ? <p></p> : <p>Sum Of Two Numbers : {result}</p>}
      <input ref={ref1} type="number" />
      <input ref={ref2} type="number" />
      <button onClick={sum}>Add</button>
      <button className={toggleRes} onClick={btnToggle}>
        Toggle
      </button>
    </div>
  );
};

export default Task1useMemo;
