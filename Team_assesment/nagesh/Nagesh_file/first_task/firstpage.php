<?php
//include 'display.php' ;
//echo "display:'none';";

?>

<html>
    <head>
        <style>
            body{
                background-color:white;
            }
            .form{
                background-color: aqua;
                width:500px;
                height:645px;
                margin-top: 100px;
              margin-left:0px;
            }
           
            .firstname{
                width:200px;
                height:40px;
                margin-left:60px;
            }
            .number{
                width:200px;
                height:33px;
                margin-left:33px;
            }
            .Gmail{
                width:200px;
                height:40px;
                margin-left:83px;
            }
            .password{
                width:200px;
                height:40px;
                margin-left:65px;
            }
            .Address{
                width:200px;
                height:100px;
                margin-left:75px;
            }
            .city{
                width:200px;
                height:40px;
                margin-left:100px;
            }
            .pincode{
                width:200px;
                height:40px;
                margin-left:78px;
            }
           .sign_in{
            margin-top: 25px ;
            margin-left: -30px;
            width: 118px;
            height: 36px;
            cursor: pointer;
            background-color: cadetblue;
            color: azure;
            text-decoration: none;
           }
           .sign_in:hover{
            background-color: rgb(33, 190, 237);
           }
         
         
.checkbox{
    margin-top: 20px;
    margin-left: 0px;
}
        </style>
        
    </head>
        <body>
            <div>
                <center>
                <form class="form " action='data_page.php' method='post'>
<h1><u>Registration  Form</u></h1> 
<label class="f_name">Fullname :</label>
<input type="text" name="fullname" class="firstname" required placeholder="fullname"/><br/><br/>
<label class="p_number">Phonenumber :</label>
<input type="phone"  name="mobile"  class="number" required placeholder="Enter your Number"/> <br/><br/>
<label class="a_address">Address :</label>
<input type="text" class='Address' name="address" required placeholder="Address"/><br/><br/>
<label class="g_mail">Gmail :</label>
<input type="text" class='Gmail'  name="gmail" required placeholder="@mail"/><br/><br/>
<label class="g_mail">password :</label>
<input type="text" class='password'  name="password" required placeholder="password"/><br/><br/>
<label class="c_city"> City :</label>
<input type="text" class="city" name="city" required placeholder="New York"><br/><br/>
<label class="pincode_p"> pincode :</label>
<input type="text" class="pincode" name="pincode" required placeholder="pincode"><br/><br/>
<input type="checkbox" class='checkbox'checked="checked" required name="sameadr"> I have read and agree to the terms of the condtion</input>
<div>
<button class="sign_in"  onclick="window.alert('database was connected ')"><a herf='display.php'>submit</a></button>
                   
                </div>
                </form>

            </center>
            </div>
        </body>
   
    </html>