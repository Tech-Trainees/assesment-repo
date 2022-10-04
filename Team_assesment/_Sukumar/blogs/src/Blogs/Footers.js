import React from 'react'
import Button from '@mui/material/Button';
import fb from './images/fb.png';
import insta from './images/insta.png';
import linkdin from './images/linkdin.png';
import snap from './images/snap.png';
import twitter from './images/twitter.png';

function Footers() {
    return (
      <div>
          <div id='footers'>
              <div className='joins'>
                  <p>Join the Techouts family </p>
              </div>
              <div className='familyparas'>
                  <p>The Techouts Family is a software based organization dedicated to sharing the art and philosophy of corporate sector to inspire personal growth, positive energy, and global harmony.</p>
                  <p>Sign up with your email address to receive special news and updates from Techouts Family, the Techouts Company and Office.
                  </p>
              </div>
              <div className='allinputss'>
                  <input type={'text'} placeholder='First Name ***' className='nameinputs'/>
                  <input type={'text'} placeholder='Last Name ***' className='nameinputs'/>
                  <input type={'text'} placeholder='Enter your Email Id ***'  className='nameinputs'/>
                  <Button variant="contained" className='buttonsigns'>SIGN UP</Button>
              </div>
              <div className='socialmedias'>
                  <img src={fb} alt='' style={{width:'30px',height:'30px'}}/>
                  <img src={insta} alt='' style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                  <img src={linkdin} alt='' style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                  <img src={snap} alt='' style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
                  <img src={twitter} alt='' style={{width:'30px',height:'30px',marginLeft:'20px' }}/>
              </div>
          </div>
  
      </div>
      );
  }
  
  export default Footers;