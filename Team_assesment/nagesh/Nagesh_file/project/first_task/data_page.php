<?php
$fullname=$_POST['fullname'];
$mobile=$_POST['mobile'];
//$address=$_POST['address'];
$gmail=$_POST['gmail'];
$password=$_POST['password'];
$connection=mysqli_connect('localhost','root','','login');
if($connection){
}else{
    echo 'not connected';
}
$query="INSERT into first_one(fullname,mobile,gmail,password)"; 
$query.="VALUES('$fullname','$mobile','$gmail','$password')";
$result=mysqli_query($connection,$query);
?>

<?php
$city=$_POST['city'];
$pincode=$_POST['pincode'];
//$address=$_POST['address'];
$address=$_POST['address'];
$connection=mysqli_connect('localhost','root','','login');
if($connection){
}else{
    echo 'not connected';
}
$query="INSERT into sec_page(city,pincode,address)";
$query.="VALUES('$city','$pincode','$address')";
$result=mysqli_query($connection,$query);
?>