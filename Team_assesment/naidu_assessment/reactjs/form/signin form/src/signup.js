import e from 'cors';
import React, { Component, useEffect, useState } from 'react';
import App from './App';
import './App.css';
import Login from './login';
   function Signup(){
    const[signup,setsignup]=useState(true)
    const [logindata,setlogindata]=useState({})
    const [newuser,setnewuser]=useState({"name":"","email":"","mobile":"","password":""})
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[mobile,setmobile]=useState('')
    const[date,setdate]=useState('')
    const[password,setpassword]=useState('')
    const[confirm,setconfirm]=useState('')



    const nameinputchange=(e)=>{
     setname(e.target.value);
    }
    const emailinputchange=(e)=>{
        setemail(e.target.value);
      }
      const mobileinputchange=(e)=>{
        setmobile(e.target.value);
      }
      const dateinputchange=(e)=>{
        setdate(e.target.value);
      }
      const passwordinputchange=(e)=>{
        setpassword(e.target.value);
      }
      const confirminputchange=(e)=>{
        setconfirm(e.target.value)
      }
      const handleclear =(e)=>{
        setname("")
        setemail("")
        setmobile("")
        setdate("")
        setpassword("")
        setconfirm("")
      }
    // const[clear,setclear]=useState();
      
    // const update = () =>{
    //      setsignup(!signup)
    //      handlesubmit();
    //     alert("successfully registered")} 
    
        const handlesubmit=()=>{
            if(name===null||name===""){
                alert("name  must be filled.");
                return ;
            }
            else if(!/^[A-Za-z.\s]+$/.test(name)){
                alert("invalid sname");
        } 
        else if(email===null||email===""){
			alert("email invalid");
			return ;
		}
		else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
			alert("invalid email.");
			return ;
		}
        else if(mobile===null||mobile===""){
			alert("Phone Number is not mentioned.");
			return ;
		}
		else if(isNaN(mobile)||mobile.length!=10){
			alert("Phone Number must be in 10 digits only.");
			return ;
		}
        else if(password===null||password===""){
			alert("password invalid");
			return ;
		}
    else if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password))){
			alert("Min 8 char, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.");
			return ;
		}
    else if(confirm===null||confirm===""){
			alert("passowrd is empty");
			return ;
		}
    else if((confirm!==password)){
			alert("password is not matching");
			return ;
		}
        else{
          var storedNames = JSON.parse(localStorage.getItem("users"));
        storedNames.push({"name":name,"email":email,"mobile":mobile,"password":password})
        setnewuser({"name":"","email":"","mobile":"","password":""});
        localStorage.setItem("users", JSON.stringify(storedNames));

            setsignup(!signup)
       
      alert("successfully registered")
        }
       }
        
        
    if(signup)
        return(
          <div className='mydiv1'>
            <div className='div1'>
            <h1>Welcome to Gradious</h1>
            
            </div>
            <div className='div22'>
              <h2 className='h2'>Please fill in the details to signup</h2>
          <input type='text' className='input11' placeholder='name' value={name} onChange={nameinputchange} ></input><br/><br/>
          <input type='text' className='input11' placeholder='email'  value={email} onChange={emailinputchange}></input><br/><br/>
          <input type='mobile' className='input11' placeholder='mobile'  value={mobile} onChange={mobileinputchange}></input><br/><br/>
          <input type='date' className='input11' placeholder='date'  value={date} onChange={dateinputchange} ></input><br/><br/>
          <input type='password' className='input11' placeholder='password'  value={password} onChange={passwordinputchange} ></input><br/><br/>
          <input type='password' className='input11' placeholder='confirm password'  value={confirm} onChange={confirminputchange}></input><br/><br/>
          </div>
         <button  className='btn2' onClick={()=>{handlesubmit()}} >Register</button>
         <button className='btn2' onClick={()=>{handleclear()}}>clear</button>
         <div><p>Already have a account? <button className='btn2'  onClick={()=>{setsignup(!signup)}} >clickhere</button></p></div>
          </div>  
        )
        else if(!signup){
            return(
                <Login/>
            )
        }else{
           return(
           
            <Login/>
           )
        }
      }
     
    

export default Signup;

