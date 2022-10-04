<?php

    // echo $user ."<br>";
    // echo $password;
    $connection= mysqli_connect('localhost','root','','loginapp');
if($connection){
    echo "we are connected to database";
}else{
    die("unable to connect database");
}
$query="SELECT ID,user,password FROM users";
$result=mysqli_query($connection,$query);
if(!$result){
    die ("query failed");
}


?>


<!DOCTYPE html>
<html lang="en">
<table border="2">“13th day obsequies”“13th day obsequies”
  <thead>
    <tr>
    <th>ID</th>
      <th>Name</th>
      <th>password</th>
    </tr>
  </thead>
<?php
while($row=mysqli_fetch_assoc($result)){
// echo "id:".$row["ID"]."-name:".$row["user"]."".$row["password"]."<br>";
echo "<tr><td>{$row['ID']}</td><td>{$row['user']}</td><td>{$row['password']}</td></tr>\n";
}
    ?>
   
</body>
</html>

