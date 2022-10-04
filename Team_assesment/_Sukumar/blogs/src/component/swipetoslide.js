import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import webdesign from "../images/wdes.jpg";
import webdev from "../images/wdevlmnt.jpg"
import "../assets/blogPrem.css"
import devslide from "../images/wdev.jpg"
import wdevgif from "../images/devgif.gif";
import wdesgif from "../images/desgif.gif"

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
     
     
    return (
      <div>
        <Slider {...settings}>
        <div className="div1"><h1>Web Design means...?</h1>
            <p className="para1">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers; however, since the mid-2010s, design for mobile and tablet browsers has become ever-increasingly important.</p>

        </div>    

        <div className="slide2" >
          <h1 className="dsgnfcts">Buckle  Up  For  These  29  Mind-Blowing  Web  Design  Facts &nbsp;&nbsp;&nbsp;
          <a href='https://cubicleninjas.com/mind-blowing-web-design-facts/' target="_blank"
         ><button style={{width:"200px",height:"44px",padding:"5px,", borderStyle:"none",background:"teal",borderRadius:"8px"}}><b>click here<i class="cid-arrow-circle-right"></i></b></button></a></h1>
        </div>

        <div className="slide3">
          <div style={{display:"inline-flex",marginLeft:"30px"}} ><h1>WEB DEVELOPMENT</h1> <h1 style={{marginLeft:"950px"}}>WEB DESIGN</h1></div> <br/>
          <img src={wdevgif} style={{float:"left",opacity:"0.8",borderRadius:"5px",width:"550px"}}></img>
        <img src={wdesgif} style={{float:"right",opacity:"0.8",borderRadius:"5px"}} ></img>
        </div>

        <div className="slide4">
          <div style={{display:"inline-flex"}}> <p className="dev"><b>Web development</b> refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
           <img src={devslide} className="webdev" style={{width:"790px",height:"555px",opacity:"0.5" ,marginLeft:"200px",borderRadius:"30% 0 0 30%"}}></img></div>
        </div>
            
            
            
            
        </Slider></div>
        )}}