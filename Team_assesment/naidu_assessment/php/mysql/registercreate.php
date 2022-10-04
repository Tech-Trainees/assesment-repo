<?php

if(isset($_POST['submit'])){
    include "dbcon.php";
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $gmail=$_POST['gmail'];
    $password=$_POST['password'];
    $mobilenumber=$_POST['mobilenumber'];
    $query="INSERT INTO registrationform(firstname,lastname,gmail,password,mobilenumber) VALUES ('$firstname','$lastname','$gmail','$password','$mobilenumber')";
    $result=mysqli_query($connection,$query);
    if(!$result){
        die("query failed".mysqli_error());
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
    <div >
        <form action="registercreate.php" method="post">
        <input type="text" placeholder="firstname" name="firstname"><br><br>
        <input type="text" placeholder="lastname" name="lastname"><br><br>
        <input type="text" placeholder="gmail" name="gmail"><br><br>
        <input type="password" placeholder="password" name="password"><br><br>
        <input type="tel" placeholder="mobilenumber" name="mobilenumber"><br><br>
       <button type="submit" name="submit">submit</button>
       
</form>
    </div>
</body>
</html>