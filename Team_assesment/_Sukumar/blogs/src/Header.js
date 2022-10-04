
import React from 'react';
import './App.css';
import techoutslogo from './images/techoutslogo.png';




function Header() {
    
  return (
    <div>
    <div id='header' >
        <div className='techoutslogodiv'>
           <img src={techoutslogo} style={{height:'80px'}} />
        </div>
        <div className='homepathdiv'>
        <p className='homepath homepath2' ><a  href='http://localhost:3000/'>Home</a></p>
        </div>
        <div className='about'><p className='aboutline' id='about-clr'><a href='#footer'>About</a></p></div>
        <div className='about'><p className='aboutline'>Contacts</p></div>

        <div className='about'>
            <p className='aboutline'>Blogs</p>
            
            <div className='listnames'>
                <a href='http://localhost:3000/krish'>Kishor</a>
                <a  href='http://localhost:3000/yaswanth'>Yaswanth</a>
                <a href='http://localhost:3000/sukumar'>Sukumar</a>
                <a href='http://localhost:3000/naidu'>Naidu</a>
                <a href='http://localhost:3000/prem-blog'>Premkumar</a>
                <a href='http://localhost:3000/Nagesh'>Nagesh</a>
                <a href='http://localhost:3000/harshit'>Harshith</a>
            </div>
        </div>
        
    </div>
    <hr/>
    </div>
    );
}

export default Header;
