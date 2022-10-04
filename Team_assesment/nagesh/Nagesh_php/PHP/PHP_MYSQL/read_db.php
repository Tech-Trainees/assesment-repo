   
   
<?php
//  database to php connect...........
  $connection=mysqli_connect("localhost","root","","login");
  if($connection){
    echo 'database was connected';
  }else {
    die ("database was not connected");
  }
  $query="SELECT * from form";
      $result=mysqli_query($connection,$query);
      if(!$result){
        echo ('query failed'.mysqli_error());
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
 
    <?php
      while ($row = mysqli_fetch_assoc($result)){

         
    ?>
    <pre>
    <?php
 print_r($row);
}
    ?>
    </pre>
</body>
</html>



