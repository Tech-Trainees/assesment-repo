import React, { Component } from "react"
import Footer from "../Footer";
import Header from "../Header";
// import img1 from "./images/img1.png"
// import './App.css';
import './body.css'
function Body(){
    return(
     <div>
      <Header/>
        <div>
        <div>
            <h1 style={{textAlign:"center",color:"burlywood"}}>It's Story Time</h1>
            
            {/* <span></span> */}
        </div>
        <div className="d4"><div className="in1"><div>Are u ready for the</div><br/>
        <div class="bouncing-text">
  <div class="b">S</div>
  <div class="o">t</div>
  <div class="u">o</div>
  <div class="n">r</div>
  <div class="c">y</div>
  <div class="e">?</div>
  <div class="shadow"></div>
  <div class="shadow-two"></div>
</div>
        </div>
        
           <div> <img className="src2" src="gif4.gif"/></div></div>
        <div><h1 className="h1">
            {/* <marquee direction='left' scrollamount='10%'> */}
             Once upon a time
There lived a <span style={{color:"red"}}>Ghost</span>
{/* </marquee>  */}
</h1>
 <div className="d2"><img className="src1" src="ghost.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img className="src1" src="ghost-rider.gif"/></div>
     </div></div>
     <div className="third">
     <h1 className="h1" style={{}}>
     He was known to be a <span style={{color:"red"}}>killer  </span>
  And feared the most
</h1>
<div className="d2"><img className="src1" src="killer.jpg"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img className="src1" src="gif6.gif"/></div>

     </div>
     <div className="third">
     <h1 className="h1">
     The eagle is comin'
You better start runnin'
</h1>
<div className="d2"><img className="src1" src="gif7.gif"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img className="src1" src="gif8.gif"/></div>

     </div>
     <Footer/>
     </div>
    )
}
export default Body;