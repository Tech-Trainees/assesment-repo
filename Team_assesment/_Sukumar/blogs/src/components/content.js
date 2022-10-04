import React from 'react';

import Totoro from '../images/totoro.gif';
import $ from 'jquery'

export const Content = () => {
const candlechat = $("#candlechat");
const speechBubble = $("#SpeechBubble");
    candlechat.hover(
        function() {
          speechBubble.css({
            "animation-name": "expand-bounce",
            "animation-duration": "0.25s"
          });
        },
        function() {
          speechBubble.css({
            "animation-name": "shrink",
            "animation-duration": "0.1s"
          });
        }
      );
      
  return (
    <>
    <div className="sec-div">
          <img src={Totoro}  alt='cute' />
            <div class="content">
                <p class="text_shadows">Hey! How's my hooping skills? </p>
            </div>
        </div>
        
        <div className='div-travel'>
           
        <div class="wrapper">
            <div class="candles" id='candlechat'>

            <div id="SpeechBubbles"><h4>You idiot Dont blow out my light</h4></div>
                
                <div class="light__wave"></div>
                <div class="candle1">
                <div class="candle1__body">
                    <div class="candle1__eyes">
                    <span class="candle1__eyes-one"></span>
                    <span class="candle1__eyes-two"></span>
                    </div>
                    <div class="candle1__mouth"></div>
                </div>
                <div class="candle1__stick"></div>
                </div>
                
                <div class="candle2">
                <div class="candle2__body">
                    <div class="candle2__eyes">
                    <div class="candle2__eyes-one"></div>
                    <div class="candle2__eyes-two"></div>
                    </div>
                </div>
                <div class="candle2__stick"></div>
                </div>
                <div class="candle2__fire"></div>
                <div class="sparkles-one"></div>
                <div class="sparkles-two"></div>
                <div class="candle__smoke-one">

                </div>
                <div class="candle__smoke-two">

                </div>
                
            </div>
            <div class="floor">
            </div>
    </div>
        </div>
        <div className='div-cont'>
        
        <div class="container">
        <h2>john doe</h2>
        <div class="avatarblog">
          
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png" alt="Skytsunami" />
        
        </div>
       
</div>

        </div>

 </>
  )
}
