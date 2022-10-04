<?php
    include 'function.php';?>
<?php
   if(isset($_POST['update'])){
    $firstname=$_POST['firstname'];
    $gmail=$_POST['gmail'];
    $password=$_POST['password'];
    $id=$_POST['id'];
    $query="UPDATE form SET ";
    $query .="firstname='$firstname',";
    $query .="gmail='$gmail',";
    $query .="password='$password' ";
    $query .="WHERE id=$id";
    // $query="UPDATE form SET firstname='$firstname',gmail='$gmail',password='$password' WHERE id=$id ";
    $result=mysqli_query($connection,$query);
    if(!$result){
        die('failed'.mysqli_error());
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
<br><br><br>
<form action ="update_db.php" method="post">
        <input type='text' placeholder='firstname' name='firstname'><br><br>
        <input type='text' placeholder='gmail' name='gmail'><br><br><br>
        <input type='text' placeholder='password' name='password'><br><br><br>
        <select name='id' id=''>
        <?php
           showallData();
    ?>
    </select>
        <input type='submit' placeholder='update' name='update'>

</form>
</body>
</html>




