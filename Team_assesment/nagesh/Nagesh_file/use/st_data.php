<?php
//if(isset($_POST['submit'])){
$st_name=$_POST['st_name'];
$st_number=$_POST['st_number'];
//$address=$_POST['address'];
$st_password=$_POST['st_password'];
$st_marks=$_POST['st_marks'];
$st_result=$_POST['st_result'];
//$pincode=$_POST['pincode'];
//$address=$_POST['address'];
//$address=$_POST['address'];
echo $st_name;
echo $st_number;
echo $st_password;
echo $st_marks;
echo $st_result;
$connection=mysqli_connect('localhost','root','','example');
if($connection){
}else{
    echo 'not connected';
}
$query="INSERT into student(st_name,st_number,st_password)"; 
$query.="VALUES('$st_name','$st_number','$st_password')";
$result=mysqli_query($connection,$query);
if(!$result){
    die ('failed'.mysqli_error());
}else{
    $last_id = mysqli_insert_id($connection);
    $query1="INSERT into st_marks(id,st_marks,st_result)";
    $query1.="VALUES('$last_id','$st_marks','$st_result')";
    $result1=mysqli_query($connection,$query1);
  
}
//}
?>

