<?php
if(isset($_POST['submit'])){
    $user=$_POST['user'];
    $password=$_POST['password'];
    // echo $user ."<br>";
    // echo $password;
    $connection= mysqli_connect('localhost','root','','loginapp');
if($connection){
    echo "we are connected to database";
}else{
    die("unable to connect database");
}
$query="INSERT INTO users(user,password) VALUES('$user','$password')";
$result=mysqli_query($connection,$query);
if(!$result){
    die ("query failed");
}

}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login.php" method="post">
    <input type="text" name="user" placeholder="user"><br><br>
    <input type="text" name="password" placeholder="password"><br><br>
    <button type="submit" name="submit" value="submit">submit</button><br><br>


</form>
</body>
</html