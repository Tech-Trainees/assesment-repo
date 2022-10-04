<?php


$connection=mysqli_connect("localhost","root","","login");
if($connection){
}else {
  die ("database was not connected");
}
$query="SELECT * from database_foreignkey";
    $result=mysqli_query($connection,$query);
    if(!$result){
      echo ('query failed'.mysqli_error());
    }

    ?>