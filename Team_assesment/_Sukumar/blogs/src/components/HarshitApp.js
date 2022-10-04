import React from "react";
import './HarshitApp.css'
import Header from "../Header";
import Footer from "../Footer";
function HarshitApp() {
  return (
    <>
      <Header />
      <header className="main_header">
        <div className="main_header__div d-flex align-items-start
        justify-content-center  flex-column shadow pl-5">
          <p> Prem Kumar</p>

          <h2 className="animateWord">
            <span>He is</span>
            <div>

              <ul className="flip4">
                <li> a Progammer </li>
                <li> a Youtuber</li>
                <li> a Freelancer</li>
                <li> Awesome </li>
              </ul>
            </div>
          </h2>
          <button className="text-uppercase">subscribe</button>
        </div>
      </header>

      <div class="col-12 card p-4 shadow blog_left__div">
        <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 ">
          <h1 class="text-uppercase">Best Laptop in 2020</h1>
          <p class="blog_title"> <span class="font-weight-bold"> Lenovo G500, </span> Aug 12, 2020 </p>
        </div>
        <figure class="right_side_img mb-5">
          <img src="https://images.pexels.com/photos/3815750/pexels-photo-3815750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" class="img-fluid shadow" width="300px" height="200px" />
        </figure>
        <p><span class="font-weight-bold"> Techouts</span> Welcomes, all of you to my world of blog. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        <p>
          Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <div class="d-flex justify-content-between left_div_btns">
          <div>
            <button class="left_div__like" id="like_btn"><i class="fa fa-thumbs-up"></i>Like</button>
          </div>
          <div>
            <button class="left_div__reply" onclick="reply('reply1')">Replies <badge class="bg-white text-dark p-2">1</badge></button>
          </div>
        </div>
        <div class="replies" id="reply1">
          <div class="d-flex justify-content-start flex-row align-items-center card reply_card py-3 ">
            <div class=" reply_img mx-2 align-self-center ">
              <img src="https://img.icons8.com/doodle/48/000000/user-male-skin-type-5.png" alt="" width="100px" />
            </div>
            <div class="reply_text__left">
              <p class="blog_title "> <span class="font-weight-bold"> Prem, </span> Aug 12, 2020, 7:20 PM </p>
              <p>Awesome, Bro I love your content.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )

}
export default HarshitApp;