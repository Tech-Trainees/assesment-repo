
<?php

$connection=mysqli_connect("localhost","root","","login");
  if($connection){
  }else {
    die ("database was not connected");
  }

$query="SELECT first_one.*, sec_page.* 
FROM first_one 
INNER JOIN sec_page ON first_one.id = sec_page.id 
WHERE first_one.id = sec_page.id ";
$result=mysqli_query($connection,$query);
if(!$result){
die("query failed".mysqli_error($connection));
    }    


// //  database to php connect...........
//   $connection=mysqli_connect("localhost","root","","login");
//   if($connection){
//   }else {
//     die ("database was not connected");
//   }
//   $query="SELECT * from first_one ";
//       $result=mysqli_query($connection,$query);
//       if(!$result){
//         echo ('query failed'.mysqli_error());
//       }

?>
<?php
//$id = isset($_GET['id']) ? $_GET['id'] : '';




// //  database to php connect...........
//   $connection=mysqli_connect("localhost","root","","login");
//   if($connection){
//   }else {
//     die ("database was not connected");
//   }
//   $query="SELECT * from sec_page ";
//       $result=mysqli_query($connection,$query);
//       if(!$result){
//         echo ('query failed'.mysqli_error());
//       }

?>