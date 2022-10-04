<?php
//if(isset($_POST['submit'])){
$fullname=$_POST['fullname'];
$mobile=$_POST['mobile'];
//$address=$_POST['address'];
$gmail=$_POST['gmail'];
$password=$_POST['password'];
$city=$_POST['city'];
$pincode=$_POST['pincode'];
$address=$_POST['address'];
//$address=$_POST['address'];

$connection=mysqli_connect('localhost','root','','login');
if($connection){
}else{
    echo 'not connected';
}
$query="INSERT into first_one(fullname,mobile,gmail,password)"; 
$query.="VALUES('$fullname','$mobile','$gmail','$password')";
$result=mysqli_query($connection,$query);
if(!$result){
    die ('failed'.mysqli_error());
}else{
    $last_id = mysqli_insert_id($connection);
    $query1="INSERT into sec_page(id,city,pincode,address)";
    $query1.="VALUES('$last_id','$city','$pincode','$address')";
    $result1=mysqli_query($connection,$query1);
      
}
//}
?>




