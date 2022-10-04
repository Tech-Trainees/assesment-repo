<?php
include "dbcon.php";
function showAllData(){
    global $connection;
$query="SELECT * FROM users";
$result=mysqli_query($connection,$query);
if(!$result){
    die ("query failed");
}

 while($row=mysqli_fetch_assoc($result)){
    $id=$row['ID'];
    echo " <option value='$id'>$id</option>";
  }
}


    function updateTable(){
        global $connection;
       $user=$_POST['user'];
         $password=$_POST['password'];
         $id=$_POST['id'];
         $query="UPDATE users SET user='$user',password='$password' WHERE ID=$id";
         $result=mysqli_query($connection,$query);
         if(!$result){
            die("query failed".mysqli_error($connection));
                }    }



  function deleteTable(){
global $connection;
 $user=$_POST['user'];
 $password=$_POST['password'];
  $id=$_POST['id'];
    $query="DELETE FROM USERS WHERE ID=$id";
         $result=mysqli_query($connection,$query);
   if(!$result){
  die("query failed".mysqli_error($connection));
                            }    }           
?>
