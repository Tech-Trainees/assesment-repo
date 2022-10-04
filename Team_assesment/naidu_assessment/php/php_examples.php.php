<html>
    <head>
        <?php
        $text="hello world !!!";
        $value= 8688943490349023;
        echo $text;
        echo "<br/>";
        echo $value;
        ?>
        <br><br>
        <?php
         $x=32;
         $y=55;
         function hello(){
            global $x,$y;
            $y=$x+$y;
         }
         hello();
         echo $y;
        ?><br><br><br>
        <?php
         function txt(){
            static  $x=1;
            echo $x;
            $x++;
         }
         txt();
         txt();
         txt();
         txt();

        ?><br><br><br>
        <?php
           echo "<p>hello world !!!</P>";
           echo "<h1>2354236475</h1>";
           echo "<strong>ncsdjnfisdfijdgs</strong>";
        ?>
        <?php
          $text="kdkvnfi vurv ienej";
          print "<h1>hello world</h1>";
          print "<h1>".$text ."<h1>";
        ?>
        <?php
        $names=array("nagesh","naidu","kishor","prem");
        var_dump($names);
        ?><br><br>
        <?php
        $text="hello world rgfgffg ghggf fhgfhgfh ythth yhtyt gbfgb !!";
        echo strrev($text);
        ?><br><br>
        <?php
        echo str_replace("world","hello","Hello world");
        echo "<br>";
        echo strrev("hello world !!!");echo "<br>";
        $text="hello world";
        echo str_replace("world","Hello",$text);
        ?><br><br>
        <?php
        $x=46757;
      var_dump(is_int($x));
      $x=45.66;
      var_dump(is_int($x));
      ?><br><br>
      <?php
      $text=min(0,10,30,40,2,56,2,-200,-100);
      echo ($text);
      echo "<br>";
      echo (max(0,10,30,40,2,56,2,100 ));
      echo "<br>";
      echo (sqrt(64));
      ?>
       <html>
         <body>
            <?php
             echo require 'example_PHP.php';
            ?>

            <body>
         </html>
      <?php
        define("hello",["ggfhf",'fdfgfgh','efeegregreg','efeegg']);
        function myFunction(){
            echo hello[(3)-2];
        }
        myFunction();
      
        ?>
        <br><br><br>
        <?php
        echo "Today date is ".Date("y/m/d");
        echo "<br>";
        echo "Today date is ".Date("Y-M-D ");
        echo "Today date is ".Date("h:i:sa");
        echo "<br>";
        echo "Today date is ".Date("H:I:SA");
        ?>
       <?php 
            require "use.php" ;?>

            <?php echo readfile('first.php')
            ?>
   <?php
      $names='hello world !!!!!!!!';
      $numbers=89891809180932;
      ?>
<?php 
 $cookie_name="fullName:";
 $cookie_value="JulaNagesh";
 $cookie_password="Password:";
 $cookie_id="Nagesh@12345";
 setcookie($cookie_name,$cookie_value,time()+(86400*30),"/");
 setcookie($cookie_password,$cookie_id,time()+(86400*30),"/");
?>
<html>
   <body>
      <?php
        if(!isset($_COOKIE[$cookie_name])){
         echo $cookie_name;
        }else{
         echo ($cookie_name);
         echo $_COOKIE[$cookie_name];
        }
        echo "<br>";
        if(!isset($_COOKIE[$cookie_password])){
         echo $cookie_password;
        }else{
         echo ($cookie_password);
         echo $_COOKIE[$cookie_password];
        }
      ?>
      </body>
   </html>
   <br>
   <br>
  <!-- <?php 
   session_start();
  ?> -->
  <html>
   <body>
      <?php 
        $_SESSION['firstname']='Nagesh';
        $_SESSION['password']="Nagesh@1233445";
        echo "session is set<br>";
        echo $_SESSION['firstname']."<br>";
        echo $_SESSION['password'];
        print_r($_SESSION);
       # session_unset();
     #   session_destroy();
      ?>
      </body>
      </html>
    <br>
    <br>
    <html>
      <body>
         <?php
         $gmail="julanagesh6@gmail.com";
       
         $gmail=filter_var($gmail);
         if(!filter_var($gmail)===false){
            echo ("$gmail email vaild address");
         }else{
            echo ("$gmail email not valid address");
         }
           
         ?>
      </body>
      </html>
      <br>
      <br>
      <!DOCTYPE html>
<html>
<body>
<?php
$email = "john.doe@example.com";

// Remove all illegal characters from email
$email = filter_var($email);

// Validate e-mail
if (!filter_var($email) === true) {
  echo("$email is a valid email address");
} else {
  echo("$email is not a valid email address");
}

?>

</body>
</html>
<br>
<br>
<?php
    $names=array('nagesh','naidu','harshit','jdksfkfkd');
      echo json_encode($names);
      echo "<br>";
      $values='{"nnnn":323,"ffsdf":3242,"sfsdf":42423}';
      
      var_dump(json_decode($values));
  ?>
        
        <br>
        <br>
        <?php
           $names='{"nagesh":23,"value":25,"number":8688292321}';
            $obj=json_decode($names);
            echo $obj->nagesh."<br>";
            echo $obj->value."<br>";
            echo $obj->number."<br>";
            ?>
            
            <?php
            session_start();
            ?>
            <html>
            <body>
               <?php
                $_SESSION['name']='nagesh';
                $_SESSION['password']='nagesh@122343';

                echo $_SESSION['name'];
                echo "<br>";
                echo $_SESSION['password'];
               ?>
</body>
</html>
</br>
<br>
<?php
   //  if(file_exists("first.php")){
   //    echo readfile ("first.php");
      
   //  }else{
   //    echo die('file not found');
   //  }
   // function Error($number,$value){
   //    echo [$number],$value;
   //    echo ('error');
   // }
   // set_error_handler("Error");
   // $a=12;
   // $b=10;
   // echo ($a*$b);
?>
<?php
  function checknum($number){
   if($number>1){
      echo new exception("value must be 1 or below");
   }
   return true;
};
   try {
      checknum(2);
      echo 'if you check the value the number is must be 1 or below';
  }
  catch(Exception $e){
   echo 'message:'.$e->getMessage();
  }
  
?>
<?php
   session_start();
   ?>
   <html>
      <body>
         <?php
              $_SESSION['firstname']='nagesh';
              $_SESSION['lastname']='jula';
              $_SESSION['gmail']='julanagesh@gmail.com';
              $_SESSION['password']='Nagesh@123';
              echo $_SESSION['lastname'];
              echo $_SESSION['firstname'];
            
              echo "<br>";
              echo $_SESSION['gmail'];
              echo "<br>";
              echo $_SESSION['password'];
         ?>
         <?php
           $cookie_name='user';
           $cookie_value='nagesh';
           $cookie_password='password:';
           $cookie_id='Nagesh@123';
           setcookie($cookie_name,$cookie_value,time()+(86400*30),"/");
           setcookie($cookie_password,$cookie_id,time()+(86400*30),"/");
           ?>
           <html>
            <body>
               <?php
                  if(!isset($_COOKIE)===false){
                     echo $cookie_name;

                  }else($cookie_name);
                    echo $_COOKIE[$cookie_name];
                  echo "<br>";
                    if(!isset($_COOKIE)===false){
                     echo $cookie_password;

                  }else($cookie_password);
                    echo $_COOKIE[$cookie_password];
                         ?>
                         <br>
                         <br>
    <?php
  class values{
      var $first_name;
     var $password;
     
     function set_name($first_name){
        $this->name=$first_name;
    }
      function get_name(){
        return $this->name;
        }
        function set_pass($password){
           $this->pass=$password;
        }
          function get_pass(){
            return $this->pass;
          }
 }
 $person=new values();
 $person->set_name('julanagesh');
 $person->set_pass('Nagesh@12345');
 echo 'username :'.$person->get_name();
 echo '<br>';
 echo 'password :'.$person->get_pass();
                   ?>