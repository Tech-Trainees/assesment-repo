
import "../assets/blogPrem.css"
import Footer from "../Footer"
import Header from "../Header"
import SimpleSlider from "./swipetoslide"
export default function BlogPrem (){

    return(
        <>
        <Header/>
        <div className="frst" >
          <div className="div" style={{ display: "flex"}}><div className="one"></div> 
           <div style={{display:"block"}}><p className="h1head" style={{marginLeft:"140px"}}>Want To LAUNCH <br/> UR Own  </p>
           {/* <span className="message">WEB DESIGN</span> */}
           <svg viewBox="0 0 860 300">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">WEB DESIGN. </text>
  
    
  </symbol>

  <g class = "g-ants">
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
    <use xlinkHref="#s-text" class="text-copy"></use>
  </g>
</svg><br/>
           <a href="https://tutorial.techaltum.com/webdesigning.html" target="_blank" >
            <button style={{width:"200px",height:"44px",padding:"5px,", borderStyle:"none",background:"#acf350",marginLeft:"100px",borderRadius:"8px"}}>Learn More </button></a>
           </div>
           
           </div>
          
         <SimpleSlider/>
       
        
        </div>
        <Footer/>
        </>
    )
}

          {/* <img src={gif} ></img>   */}
