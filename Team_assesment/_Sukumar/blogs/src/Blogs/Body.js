import React from 'react'
import './css/Body.css'
import Animation from './animation'
//import Header from '../Header'

const Body=()=>{
    return(
        <div>
     
        <img src='vector.jpg' alt='' className='img'></img>
        <div class="element" ></div>
        <img src='woman.png' alt='' className='img2'></img>
        <div>
              <b><marquee direction='down' scrollamount='15px'><h1 className='brand' style={{color:'green'}}>Brands<br></br>
              </h1></marquee>
               <h1 className='toc'>crafted to</h1> <br></br>
               <h1 className='means'>mean more OUR WORK </h1>
              </b>
            
              <Animation/>
              </div>
        </div>
    )
}
export default Body