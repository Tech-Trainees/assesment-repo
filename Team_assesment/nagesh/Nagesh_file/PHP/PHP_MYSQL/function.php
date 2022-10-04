 <?php
 include 'db_php.php';
 ?>
<?php

function showallData(){
global $connection;

 $query="SELECT * from form";
 $result=mysqli_query($connection,$query);
   if(!$result){
     echo ('failed'.mysqli_error());
   }
   while ($row=mysqli_fetch_assoc($result)){
    $id=$row['id'];
    echo "<option value='$id' >$id</option>";
}
}
?>