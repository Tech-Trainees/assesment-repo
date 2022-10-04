<html>
  <head>
    <style>
.message{
  color:red;
}
      </style>
</head>
<body>
    <?php 
     $firstnameErr=$passwordErr='';
        $firstname=$password='';
       
        if($_SERVER['REQUEST_METHOD']=='POST'){
          if(empty($_POST['firstname'])){
                  $firstnameErr='firstname is required ?';
          }
          if(empty($_POST['password'])){
            $passwordErr="password is required ?";
      }
        }
        if($_SERVER['REQUEST_METHOD']=="POST"){
          $firstname=$_POST["firstname"];
        $password=$_POST['password'];
       }
       if(isset($_POST['submit'])){
        
           $minimum=5; 
           $maximum=10;
       }
       if (strlen($firstname)<$minimum){
        echo 'user name must be five letters';
       }
       if (strlen($password)<$maximum){
        echo 'user password must be ten numbers';
       }
   
    ?>
    <form class='form' action='<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?> ' method='post'>
    <input type='text' name='firstname' ><span>*<?php echo $firstnameErr ?></span><br><br>
    <input type='text' name='password' ><span>*<?php echo $passwordErr ?></span><br><br>
    <input type='submit' value='submit' name='submit'>
</form>
<?php
 echo $firstname;
 echo "<br>";
 echo $password;
?>
</body>
</html>
<?php
  $cookie_name='user';
  $cookie_value="Nagesh";
  $cookie_password="password";
  $cookie_id='Nagesh@12345';
  setcookie($cookie_name,$cookie_value,time ()+(86400*30),"/");
  setcookie($cookie_password,$cookie_id,time ()+(86400*30),"/")
?>
<html>
   <body>
      <?php
     if(!isset($_COOKIE[$cookie_name])){
            echo "cookie name".$cookie_name."is not set";
     }
       else{
   echo "cookie name".$cookie_name."is set";
        echo $_COOKIE[$cookie_name];
  }
  echo '<br>';
  if(!isset($_COOKIE[$cookie_password])){
    echo "cookie name".$cookie_password."is not set";
}
else{
echo "cookie name".$cookie_password."is set";
echo $_COOKIE[$cookie_password];
}

  ?>
  </body>
  </html>
  <?php 
     $password="Nagesh";
     $password=filter_var($password);
     
  ?>
  <html>
    <body>
      <?php
         if(!filter_var($password)===true){
            echo 'password is not valid !';
         }else{
          echo "password is valid !";
         }
        
         $name="<h1>hello world!!!</h1>";
         $newname=filter_var($name);
         echo "$newname";
         ?>