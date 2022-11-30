import React, { useReducer, useState } from 'react'
import Modal from './Modal'
const initialState={
   arrData:[],
}
const reducer=(state,action)=>{
    switch(action.type){
        case "Submit Data":
        return{
           ...state,
           arrData:action.data
        }
        default:
         return{

         }
    }   
}
const Task4useReducer = () => {
     const[updatedState,dispatch]=useReducer(reducer,initialState);
     const [isOpen, setIsOpen] = useState(false);
     console.log(updatedState.arrData);
     const submitData=()=>{
     let title=document.getElementById("title").value;
     let description=document.getElementById("desp").value;
     let hdTime= document.getElementById("hdTime").value;
     let sku=document.getElementById("sku").value;
     let Barcode=document.querySelector('#Barcode:checked').value;;
     let category=document.getElementById("category").value;
    let imgSel=document.querySelector('input[name="abc"]:checked').value;
    let obj={
        title:title,Description:description,Time:hdTime,SKU:sku,Barcode:Barcode,Category:category,imgSel:imgSel
    }
    console.log(obj);
     dispatch({type:"Submit Data",data:obj})
     setIsOpen(true);
     document.getElementById("title").value="";
     document.getElementById("desp").value="";
     document.getElementById("hdTime").value="";
     document.getElementById("sku").value="";
     document.querySelector('#Barcode:checked').checked="";
     document.getElementById("category").value="";
     document.querySelector('input[name="abc"]:checked').checked="";
     }
    return (
    <div id="reducerOuter">
    <div className='labelBox'><lable>Title</lable> <input id="title" className='inpReducer' type="text"/></div>
    <div className='labelBox'><lable>Discription</lable> <input id="desp" className='inpReducer' type="text"/></div>
    <div className='labelBox'><lable>Handling Time</lable> <input id="hdTime" className='inpReducer' type="text"/></div>
    <div className='labelBox'><lable>Amazone Parent SKU</lable> <input id="sku" className='inpReducer' type="text"/></div>
    <div className='labelBox'><lable>Barcode</lable> <input id="Barcode" className='inpCheck' type="checkbox" value="Barcode/GTIN Exemption" />Barcode/GTIN Exemption</div>
    <div className='labelBox'><lable>Add Amazon Category</lable> <input id="category" className='inpReducer' type="text"/></div>
    <div className='labelBox'><lable>Image Selection</lable> <input className='inpCheck' id="imgselA" name="abc" value="Set product image" type="radio"/>Set product image <input id="imgselB" className='inpCheck' name="abc" value="Set Custom  Image" type="radio"/>Set Custom  Image</div>
    <div className='labelBox'><button onClick={submitData}>Submit Data</button></div>
    <main>
      {isOpen && <Modal setIsOpen={setIsOpen} updatedState={updatedState.arrData} />}
    </main>
    </div>
   

  )
}

export default Task4useReducer