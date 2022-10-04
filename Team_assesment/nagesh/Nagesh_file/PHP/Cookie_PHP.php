<?php
  $cookie_name='user:';
  $cookie_value="Nagesh" ;
  $cookie_password="password";
  $cookie_ID='Nagesh@123';
  setcookie($cookie_name,$cookie_value,time()+ (3600*30),"/");
  setcookie($cookie_password,$cookie_ID,time()+ (3600*30),"/");
?>
<html>
    <body>
      <?php
        if(isset($_COOKIE[$cookie_name])){
            echo $cookie_name;

        }else{
             echo $cookie_name;
             echo $_COOKIE[$cookie_name];
        }
        echo "<br>";
        if(!isset($_COOKIE[$cookie_password])){
            echo "cookie password'".$cookie_password."'is not set";
        }else{
            echo "cookie password'".$cookie_password."' is set <br>";
            echo "value is".$_COOKIE[$cookie_password];
        }
      ?>
</body>
    </html>