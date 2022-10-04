<html>
    <head>
        <style>
            .error{
                color:red;
            }
            .form{
                background-color: aqua;
                width:640px;
                height:645px;
                margin-top: 100px;
            }
            .firstname{
                width:200px;
                height:30px;
                margin-left:60px;
                margin-top: 40px;
            }
            .lastname{
                width:200px;
                height:30px;
                margin-left:60px;
                margin-top: 20px;
            }
            .gmail{
                width:200px;
                height:30px;
                margin-left:65px;
                margin-top: 20px;
            }
             .address{
                width:200px;
                height:30px;
                margin-left: 68px;
                margin-top: 20px;
             }
             .number{
                width:200px;
                height:30px;
                margin-left:68px;
                margin-top: 20px;
             }
             .city{
                width:200px;
                height:30px;
                margin-left:68px;
                margin-top: 20px;
             }
             .div1{
                border: 2px solid black;
                height: 640px;
             }
.checkbox{
    margin-top: 20px;
    margin-left: 0px;
}
              .submit{
                margin-left:-70px;
                margin-top:30px;
                width:100px;
                height:30px;
              }
            </style>
</head>
<body>
    <?php 
     $firstnameErr=$lastnameErr=$gmailErr=$phonenumberErr=$addressErr=$cityErr='';
         $firstname=$lastname=$gmail=$phonenumber=$address=$city='';
         if($_SERVER['REQUEST_METHOD']=='POST'){
               if(empty($_POST['firstname'])){
                       $firstnameErr='firstname is required ?';
               }    
               if(empty($_POST['lastname'])){
                $lastnameErr='lastname is required ?';
        }
        if(empty($_POST['gmail'])){
            $gmailErr='gmail is required ?';
    }
    if(empty($_POST['phonenumber'])){
        $phonenumberErr='phonenumber is required ?';
}
if(empty($_POST['address'])){
    $addressErr='address is required ?';
}
if(empty($_POST['city'])){
    $cityErr='city is required ?';
}
         }

          if($_SERVER['REQUEST_METHOD']=="POST"){
              $firstname=$_POST["firstname"];
              $lastname=$_POST["lastname"];
              $gmail=$_POST["gmail"];
              $phonenumber=$_POST["phonenumber"];
              $address=$_POST["address"];
              $city=$_POST["city"];
            
          }
    ?>
    <div>
                <center>
                <form class="form " action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>' method='post'>
<h1><u>Registion Form</u></h1>
<label class="f_name">FirstName :</label>
<input type="text" name="firstname" class="firstname"  placeholder="FirstName"/><span class='error'>*<?php echo $firstnameErr ?></span><br/><br/>
<label class="l_name">LastName :</label>
<input type="text" class='lastName' name="lastname" placeholder="LastName"/><span class='error'>*<?php echo $lastnameErr ?></span><br/><br/>
<label class="g_mail">Gmail :</label>
<input type="text" class='Gmail'  name="gmail" placeholder="@mail"/><span class='error'>*<?php echo $gmailErr ?></span><br/><br/>
<label class="p_number">Phonenumber :</label>
                  <input type="phone"  name="phonenumber"  class="number"  placeholder="Enter your Number"/><span class='error'>*<?php echo $phonenumberErr ?></span> <br/><br/>
                  <label class="a_address">Address :</label>
                  <input type="text" class='Address' name="address" placeholder="Address"/><span class='error'>*<?php echo $addressErr ?></span><br/><br/>
                  <label class="c_city"> City :</label>
                  <input type="text" class="city" name="city"  placeholder="New York"><span class='error'>*<?php echo $cityErr ?></span><br/><br/>
                    <input type="checkbox" class='checkbox'checked="checked"  name="sameadr"> I have read and agree to the terms of the condtion</input>
                    <div>
                    <input type="submit"
name="submit" value="submit"
class='submit'>                  
                </div>
                </form>
                <?php
                    echo $firstname;
                    echo"<br>";
                    echo $lastname;
                    echo"<br>";
                    echo $gmail;
                    echo"<br>";
                    echo $phonenumber;
                    echo"<br>";
                    echo $address;
                    echo"<br>";
                    echo $city;
                ?>

            </center>
            </div>
    </html>