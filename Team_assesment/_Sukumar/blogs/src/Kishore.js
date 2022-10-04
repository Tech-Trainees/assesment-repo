import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import gif1 from './images/gif1.gif'; 
import './krish.css'
import Avatar from '@mui/material/Avatar'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import {useState} from 'react'
function Kishore() {
    
  return (
    <div>
        <Header/>
        
            {/* <header className="Header">
                <div className='avatar'>
                  <Stack>  <Avatar  alt="Invalid photo"
                    
                     sx={{ width: 80, height: 80 }}/></Stack>
                     
                </div>
                <div className='Title'>
                    <h1 style={{color:'#a495fa'}}>Welcome</h1>
                    <div className='Tabs'>
                     <Tab label="Home" sx={{fontSize:20}} />
                        <Tab label="About" sx={{fontSize:20}} />
                        <Tab label="Contact Us" sx={{fontSize:20}} />
                        <Button variant="outlined" size='small' >Login</Button>
                    </div>
                </div>
            </header> */}
            <div>
                <div>
                    <img src='./krish_images/ilstrn.png'  className='leftimg'/>
                    <h1 className='head'>What Is In your mind..</h1>
                    <h2 className='head1'>Share with us without doubting anything</h2>
                </div>
                <div className='rightimg'>
                <img src='./krish_images/img2.png'/>
                </div>
                <div>
                <h1 className='head2'>"You only live once, but if you do it right, once is enough."</h1>
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>
        
        <div className='footer1'><Footer/></div>
    </div>
    );
}

export default Kishore;
