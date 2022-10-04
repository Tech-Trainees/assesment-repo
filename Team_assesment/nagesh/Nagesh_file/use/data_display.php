<?php

$connection=mysqli_connect("localhost","root","","example");
if($connection){
    
}else{
    echo 'not connected';
}
$query="SELECT student.*,st_marks .* from student inner join st_marks on student.id=st_marks.id where student.id=st_marks.id ";
$result=mysqli_query($connection,$query);
  if(!$result){
      echo 'failed'.mysqli_error();
  }






// $connection=mysqli_connect("localhost","root","","example");
// if($connection){
// }else {
//   die ("database was not connected");
// }
// $query="SELECT student.*,st_marks.* from student inner join st_marks on student.id=st_marks.id
//  where student.id =st_marks.id";
//  $result=mysqli_query($connection,$query);
//  if(!$result){
//      die ('failed'.mysqli_error($connection));
//  }
?>
<!-- $connection=mysqli_connect("localhost","root","","login");
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
    }     -->
