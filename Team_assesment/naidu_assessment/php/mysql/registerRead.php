<?php
 include "dbcon.php";
// if(isset($_POST['submit'])){
//    
//     $firstname=$_POST['firstname'];
//     $lastname=$_POST['lastname'];
//     $gmail=$_POST['gmail'];
//     $password=$_POST['password'];
//     $mobilenumber=$_POST['mobilenumber'];
//     $query="INSERT INTO registrationform(firstname,lastname,gmail,password,mobilenumber) VALUES ('$firstname','$lastname','$gmail','$password','$mobilenumber')";
//     $result=mysqli_query($connection,$query);
//     if(!$result){
//         die("query failed".mysqli_error());
//     }
// }

$query="SELECT * FROM registrationform";
    $result=mysqli_query($connection,$query);
     if(!$result){
         die("query failed".mysqli_error());
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
<table border="1">
  <thead>
    <tr>
    <th>ID</th>
      
      <th>firstname</th>
      <th>lastname</th>
      <th>gmail</th>
      <th>password</th>
      <th>mobilenumber</th>
    </tr>
  </thead>
  <?php
  while($row=mysqli_fetch_assoc($result)){
    echo "<tr><td>{$row['ID']}</td> <td>{$row['firstname']}</td><td>{$row['lastname']}</td><td>{$row['gmail']}</td><td>{$row['password']}</td><td>{$row['mobilenumber']}</td></tr>";
  }
  ?>
    </div>
</body>
</html>