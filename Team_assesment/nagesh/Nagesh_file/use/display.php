<?php

include 'data_display.php';
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
<table>
        <tr>
            
            <th>st_name</th>
            <th>st_number</th>
            <th>st_password</th>
            <th>st_marks</th>
            <th>st_result</th>
           
         
          

    <?php
      while ($row = mysqli_fetch_assoc($result)){
        echo "<tr><td>{$row['st_name']}</td><td>{$row['st_number']}</td><td>{$row['st_password']}</td><td>{$row['st_marks']}</td><td>{$row['st_result']}</td>";
      }
         
    ?></tr>
    </table>
</body>
</html>