<?php

// $query="SELECT * from registion   ";
// // $query.="values('$firstname','$gmail','$password')";
// $result=mysqli_query($connection,$query);
//   if(!$result){
//     echo ('failed'.mysqli_error());
//   }
include 'data.php';

?>
<?php
function showallData(){

global $connection;
$query="SELECT * from registion   ";
$result=mysqli_query($connection,$query);
    while ($row=mysqli_fetch_assoc($result)){

      $id=$row['id'];
        echo "<option  value='$id'id='id'>$id</option>";
     }
  }

?>
<?php
if(isset($_POST['submit'])){
  $firstname=$_POST['firstname'];
  $lastname=$_POST['lastname'];
  $gmail=$_POST['gmail'];
  $password=$_POST['password'];
  $id=$_POST['id'];
  $query="DELETE from registion ";
  // $query.="firstname='$firstname', ";
  // $query.="lastname='$lastname', ";
  // $query.="gmail='$gmail', ";
  // $query.="password='$password' ";
  $query.="WHERE id=$id";
  $result=mysqli_query($connection,$query);
    if(!$result){
     echo 'failed'.mysqli_error();
    }
  
  }
?>