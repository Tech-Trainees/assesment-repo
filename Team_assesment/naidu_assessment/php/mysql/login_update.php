<?php include("dbcon.php");
?>
<?php include ("function.php");
// if(isset($_POST['submit'])){
//     $user=$_POST['user'];
//     $password=$_POST['password'];
//     // echo $user ."<br>";
//     // echo $password;
    
// $query="INSERT INTO users(user,password) VALUES('$user','$password')";

?>
<?php
if(isset($_POST['submit'])){
       updateTable();
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
    <form action="login_update.php" method="post">
    <input type="text" name="user" placeholder="user"><br><br>
    <input type="text" name="password" placeholder="password"><br><br>
    <select name="id" id="">
        <?php
       showAllData();
        ?>
       
    </select>
    <button type="submit" name="submit" value="update">update</button><br><br>


</form>
</body>
</html>

