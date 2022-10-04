<?php 
       $firstnameErr=$lastnameErr=$gmailErr=$passwordErr=$addressErr='';
    $firstname=$lastname=$gmail=$password=$address='';
 
       if($_SERVER['REQUEST_METHOD']=='POST'){
          if(empty($_POST['firstname'])){
            $firstnameErr='enter your firstname'; 
          }
          if(empty($_POST['lastname'])){
            $lastnameErr='enter your lastname'; 
          }
          if(empty($_POST['gmail'])){
            $gmailErr='enter your gmail'; 
          }
          if(empty($_POST['password'])){
            $passwordErr='enter your password'; 
          }
          if(empty($_POST['address'])){
            $address='enter your address'; 
          }

       }
        if ($_SERVER['REQUEST_METHOD']=='POST'){
            $firstname=$_POST['firstname'];
            $lastname=$_POST['lastname'];
            $gmail=$_POST['gmail'];
            $password=$_POST['password'];
            $address=$_POST['address'];
        }
        // if(isset($_POST['submit'])){
        //       $minimum=5;
        //       $maximum=10;
             
        //       if(strlen($lastname)<$minimum){
        //         echo 'enter lastname minimum five letters';
        //       }
        //       if(strlen($gmail)<$maximum){
        //         echo 'enter gmail maximum ten letters';
        //       }
        //       if(strlen($password)<$minimum){
        //         echo 'enter password minimum five letters';
        //       }
        //       if(strlen($address)<$minimum){
        //         echo 'enter address maximum ten letters';
        //       }
        
        // }
    ?>
    <?php ;
echo "<h1 style='color:blue'><u>your output </U>:</h1>";
  echo "<h1>".$firstname;
  echo $lastname;
  echo '<br>';
  echo $gmail;
  echo '<br>';
  echo $password;
  echo '<br>';
  echo $address;

?>