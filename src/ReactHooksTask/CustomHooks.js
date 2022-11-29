import React, { useRef } from 'react'
import useFetch from './useFetch';
const CustomHooks = () => {
 const {result,extractDataFromApi}=useFetch() ;
 
 const refInp=useRef();
 const getData=()=>{
  let url=refInp.current.value;
  let selData=document.getElementById("selOption").value;
  let payloadValue1=document.getElementById("payVal1").value;
  let payloadValue12=document.getElementById("payVal2").value;
  let obj={title:payloadValue1,description:payloadValue12}
  console.log(url,selData,obj)
  extractDataFromApi(url,obj,selData);
 }
  return (
    <div>
        <div>Get  Data</div>
       <label> Enter url </label><input type="text" ref={refInp} /><br/>
       <label>Select Method</label><select id="selOption">
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
        <br/>
        <lable>Payload</lable><input placeholder='Enter Title' id="payVal1" type="text"/>
        <input placeholder='Enter Description' id="payVal2" type="text"/><br/>
        <button id="btnFetch" onClick={getData}>Fetch Data</button>
        <center>
        <table >
         <tr><th>ID</th><th>Title</th><th>Description</th></tr>
        {result.map((item)=>{
          return(
            <>
            <tr><td>{item.id}</td><td>{item.title}</td><td>{item.description}</td>
            </tr></>
          )
        })}
         </table>
         </center>
    </div>
  )
}

export default CustomHooks