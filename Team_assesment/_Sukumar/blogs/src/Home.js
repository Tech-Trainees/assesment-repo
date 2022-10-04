import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Avatar from '@mui/material/Avatar';
import tesla from './images/tesla.jpeg';
import tobi from './images/tobi.gif'
import prem from './images/prem.jpg'
//import Thor from './Thor.jpg'
// import krish from './krish_images/krish.jpg'

function Home() {
  return (
    <div>
        <Header/>
        <div className='topline'>In This Home page We can get the brief information on some random topics.</div>
        <div className='information'>

        <div className='person1'>
            <div className='avatarpic'>
            <a href='http://localhost:3000/krish'><Avatar alt="Remy Sharp" src='./krish_images/krish.jpg' sx={{ width: 130, height: 130 }} /></a>
        </div>
        <div className='paralines'>
        <p className='personname'><a href='http://localhost:3000/krish'>E.Kishore</a></p>
            <p><a href='http://localhost:3000/krish'>Show More ......!</a></p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"-57px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/yaswanth' id='anchor'><Avatar alt="Remy Sharp" src={tesla}  sx={{ width: 130, height: 130 }} /></a>
        </div>
        <div className='paralines'>
            <p className='personname'> <a href='http://localhost:3000/yaswanth' id='anchor'>CH.Yaswanth</a></p>
            <p><a href='http://localhost:3000/yaswanth' id='anchor'>Show More ......!</a></p>
            </div>
        </div>

        <div className='person1'  style={{marginLeft:"-60px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/sukumar'><Avatar alt="Remy Sharp" src={tobi} sx={{ width: 130, height: 130 }} /></a>
        </div>
        <div className='paralines'>
        <p className='personname'><a href='http://localhost:3000/sukumar'>Sukumar</a></p>
        <a href='http://localhost:3000/sukumar'>Show More ......!</a>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"-60px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/naidu'><Avatar alt="Remy Sharp" src='gif9.gif'  sx={{ width: 130, height: 130 }} /></a>
        </div>
        <div className='paralines'>
        <p className='personname'><a href='http://localhost:3000/naidu'> Naidu</a></p>
            <p><a href='http://localhost:3000/naidu'>Show More ......!</a></p>
            </div>
        </div>

        <div style={{marginLeft:"120px"}} className='person1'  >
            <div className='avatarpic'>
            <a href='http://localhost:3000/prem-blog'><Avatar alt="Remy Sharp" src={prem}  sx={{ width: 130, height: 130 }} /></a>
            </div>
            <div className='paralines'>
            <p className='personname'><a href='http://localhost:3000/prem-blog'>Premkumar</a></p>
            <p><a href='http://localhost:3000/prem-blog'>Show More ......!</a></p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"50px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/Nagesh'><Avatar alt="Remy Sharp" src='./krish_images/Thor.jpg'  sx={{ width: 130, height: 130 }} /></a>
            </div>
            <div className='paralines'>
            <p className='personname'><a href='http://localhost:3000/Nagesh'>Nagesh</a></p>
            <p><a href='http://localhost:3000/Nagesh'>Show More ......!</a></p>
            </div>
        </div>

        <div className='person1' style={{marginLeft:"50px"}}>
            <div className='avatarpic'>
            <a href='http://localhost:3000/harshit'>
        <Avatar alt="Remy Sharp" src={tesla}  sx={{ width: 130, height: 130 }} />
         </a>
        </div>
        <div className='paralines'>
        <p className='personname'><a href='http://localhost:3000/harshit'>Harshith</a></p>
            <p><a href='http://localhost:3000/harshit'>Show More ......!</a></p>
            </div>
        </div>
      
        </div>
        <Footer/>
    </div>
    );
}

export default Home;
