import React from 'react';
import '../App.css';
import Header from '../Header';
import './Yashblog.css';
import img1 from './Yashimages/img1.png';
import img2 from './Yashimages/img2.png';
import img3 from './Yashimages/img3.png';
import img4 from './Yashimages/img4.png';
import img5 from './Yashimages/img5.png';
import img6 from './Yashimages/img6.png';
import dev from './Yashimages/dev.png';
import tec from './Yashimages/tec.png';
import admin from './Yashimages/admin.png';
import YashFooter from './Yashfootert';

function Yaswanth() {
  return (
    <div>
        <Header/>
        <div>
          <div>
            <div className='Start'><span className='startspan'>Start today</span></div>
          </div>

          <div className='getstart'>
          <span className='getstartspan'><marquee direction="left" >Welcome techouts subscribers! Get started for FREE today or use code dribbble at checkout for 25% off your first year of Issuu.</marquee></span>
          </div>

          <div className='thirddiv'>
            <div className='solfor'>
            Your complete solution for digital content
            </div>

            <div className='joinof'>
            Join millions of content creators and transform your PDFs into SEO-friendly embeddable flipbooks, social stories, email graphics and more. From one to many - create once, share everywhere.
            </div>
            <div className='getstart2'>
            <span className='getstart2span'>Get started</span>
            </div>
            <div className='imgsdiv'>
              <img src={img1} className='imgages1'/>
              <img src={img2} className='imgages1'/>
              <img src={img3} className='imgages1'/>
              <img src={img4} className='imgages1'/>
              <img src={img5} className='imgages1'/>
              <img src={img6} className='imgages1'/>
            </div>
          </div>
        </div>
          <div className='lastdiv'>
            <div className='lastimg1'>
              <img src={dev}/>
            <div className='lineimage'>
            <span className='lineimagespan'> Do you want to be a Devoloper</span>
            </div>
            </div>
            <div className='lastimg1'>
              <img src={tec}/>
            <div className='lineimage2'>
            <span className='lineimagespan'> Do you want to be a Technician</span>
            </div>
            </div>
            <div className='lastimg1'>
              <img src={admin}/>
            <div className='lineimage2'>
            <span className='lineimagespan'>  Do you want to be a Admin</span>
            </div>
            </div>
          </div>
        <YashFooter/>
    </div>
    );
}

export default Yaswanth;
