import axios from 'axios';
import React, { useState } from 'react'

const useFetch = () => {
	let data=''
	const [result,setResult]=useState([]);
 const extractDataFromApi=(url,payload,method)=>{
	 if(method==="GET")
	 {
       axios.get(url).then((response)=>{
		console.log(response.data.products);
        data=response.data.products
		setResult(data);
	   })
	 }else if(method==="POST")
	 {
		axios.post(url,payload)
		.then((response)=>{
			console.log(response.data);
			setResult([response.data])
		})
	 }
	 else if(method==="PUT")
	 {
		axios.put(url,payload)
		.then((response)=>{
			console.log(response.data);
			setResult([response.data]);
		})
	 }
	 else if(method==="DELETE"){
		axios.delete(url)
		.then((response)=>{
			console.log(response.data);
			setResult([response.data]);
		})
	 }
	}
  return {result,extractDataFromApi};
}
export default useFetch