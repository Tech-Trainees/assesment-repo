<?php
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$gmail=$_POST['gmail'];
$password=$_POST['password'];
$connection=mysqli_connect('localhost','root','','login');
if($connection){
    echo 'database was connected';

}else{
    echo 'not connected';
}
$query="INSERT into registion(firstname,lastname,gmail,password)";
$query.="VALUES('$firstname','$lastname','$gmail','$password')";
$result=mysqli_query($connection,$query);
  

?>
<?php

// function showallData(){
//   global $connection;
//   $query="SELECT * from registion";
//   $result=mysqli_query($connection,$query);
//    if(!$result){
//     echo 'failed'.mysqli_error();
//    }
//    while ($row=mysqli_fetch_assoc($result)){
//     $id=$row['id'];
//     echo "<option class='select' vlaue='$id'>$id</option>";
//   }
//   }
?>