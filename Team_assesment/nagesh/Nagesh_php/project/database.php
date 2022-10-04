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
$query="INSERT into database_form(fullname,mobile,gmail,password)";
$query.="VALUES('$fullname','$mobile','$gmail','$password')";
$result=mysqli_query($connection,$query);
?>

<?php
$address=$_POST['address'];
$city=$_POST['city'];
//$address=$_POST['address'];
$pincode=$_POST['pincode'];
$connection=mysqli_connect('localhost','root','','login');
if($connection){


}else{
    echo 'not connected';
}
$query="INSERT into datbase_foreignkey(address,city,pincode)";
$query.="VALUES('$address','$city','$pincode')";
$result=mysqli_query($connection,$query);
  

?>