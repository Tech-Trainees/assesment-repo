import { useState } from 'react';
import Login from './login';
   function Success(){
    // localStorage.setItem("lockedin",false)
    const[flag,setflag]= useState(true)
   
    return(
      <div className='hdiv'>
        <div className='divd' >
         <h1>Welcome to dashboard</h1>
         </div>
         <div className='dive'><h1><a href="http://localhost:3000/" id="login" ><button className='btnn' onClick={()=>{setflag(localStorage.setItem("lockedin",true))}} >Logout</button></a></h1></div>
      </div>
    )

   }
   export default Success;