import React from 'react'
import './css/Body.css'
import './css/Animation.css'

import Templete from './Tamplete'
const Animation =()=>{
    return(
        <div>
        <div class="heart"></div>
        <div >
        
        <div className='background'></div>
        <div className='back_white'></div>
        <div className='back_gray'></div>
        <img src='man.webp' alt='' className='ani'></img>
        <img src='Brave.png' alt='' className='Brave'></img>
        </div>
        <div className='box'>
        <img src='person.jpg' alt='' style={{width:'400px',height:'300px'}}></img>
        <div className='ball'>
             <h1>B</h1>
        </div>
        </div>
        <div >
        <img src='dragen.gif' alt='' className='dragen'></img>
        <h1 className='black_coffee'>Dragon</h1></div>
        <p className='black_coffee_p'>A dragon is a reptile-like legendary creature that appears<br></br> f many cultures worldwide. Beliefs about dragons vary considerably through regions, but<br></br>Scholars believe huge extinct or migrating crocodiles bear the closest resemblance</p>
        <h1 className='btn'>King of the lizards
        </h1>
       
        <Templete/>
        
          
            
        </div>
    )
}
export default Animation