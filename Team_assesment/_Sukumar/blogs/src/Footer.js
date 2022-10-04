import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import fb from './images/fb.png';
import insta from './images/insta.png';
import linkdin from './images/linkdin.png';
import snap from './images/snap.png';
import twitter from './images/twitter.png';

function Footer() {
  return (
    <div>
        <div id='footer'>
            <div className='join'>
                <p className='line'>Join the Techouts family </p>
            </div>
            <div className='familypara'>
                <p className='line'>The Techouts Family is a software based organization dedicated to sharing the art and philosophy of corporate sector to inspire personal growth, positive energy, and global harmony.</p>
                <p className='line'>Sign up with your email address to receive special news and updates from Techouts Family, the Techouts Company and Office.
                </p>
            </div>
            <div className='allinputs'>
                <input type={'text'} placeholder='First Name ***' className='nameinput'/>
                <input type={'text'} placeholder='Last Name ***' className='nameinput'/>
                <input type={'text'} placeholder='Enter your Email Id ***'  className='nameinput'/>
                <Button variant="contained" className='buttonsign'>SIGN UP</Button>
            </div>
            <div className='socialmedia'>
                <img src={fb} style={{width:'30px',height:'30px'}}/>
                <img src={insta} style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                <img src={linkdin} style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                <img src={snap} style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                <img src={twitter} style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
            </div>
        </div>

    </div>
    );
}

export default Footer;
