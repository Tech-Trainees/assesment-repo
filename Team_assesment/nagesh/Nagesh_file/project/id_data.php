<?php

//  database to php connect...........
  $connection=mysqli_connect("localhost","root","","login");
  if($connection){
  }else {
    die ("database was not connected");
  }
  $query="SELECT * from database_form ";
      $result=mysqli_query($connection,$query);
      if(!$result){
        echo ('query failed'.mysqli_error());
      }

?>
