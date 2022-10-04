import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './signup';
import Success from './success';
   function Login(){
      const[dash,setdash] =useState(false);
      const[login,setlogin]=useState(true)
      const[name,setname]=useState('');
      const[password,setpassword]=useState('');
      const[users,setusers]=useState('');
      const nameinputchange =(e)=>{
        setname(e.target.value);
      }
      const passwordinputchange =(e)=>{
        setpassword(e.target.value);
      }
   const handlesubmit =(e)=>{
    if(name===null||name===""){
      alert("name is empty.");
      return ;
    }
    else{
    // e.preventdefault();
    var userdata=JSON.parse(localStorage.getItem("users"))
    for(var i=0;i<userdata.length;i++){
        if(userdata[i].email===name  && userdata[i].password===password){
          setdash(true)
         
          return alert("Success")
          
        }
    }
  }
   
      alert("invalid credentials")
 
   }
      
      if(login){
        return(
          <div className='mydiv'>
            <div className='div1'>
            <h1>Welcome to Gradious</h1>
            </div>
            <div className='div2'>
              <h2 className='h2'>Please fill in the details</h2>
          <input type='text' className='input1' placeholder='username' value={name} onChange={nameinputchange} ></input><br/><br/>
          <input type='password' className='input1' value ={password} placeholder='password' onChange={passwordinputchange}  ></input><br/>
          </div>
          <div className='div3'>
            
            {dash ? <a href="http://localhost:3000/dashboard" id="dashboard" ><button  className='btn1' onClick={()=>{handlesubmit()}}>login</button></a> : <button  className='btn1' onClick={()=>{handlesubmit()}}>login</button>}
           
            <button  className='btn1'  onClick={()=>{setlogin(!login)}}>signup</button>
          </div>
          </div>
        )
      }
      if(!login){
       return <Signup/>
      }
      
      }

export default Login;