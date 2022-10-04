<?php //include 'function.php';?>
<?php //include 'data.php';
?>
<?php
include 'data.php';
include 'function.php';
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
    <form action='all.php'method='post'>
    <input type='text' placeholder='firstname' name='firstname'><br><br>
    <input type='text' placeholder='gmail' name='gmail'><br><br>
    <input type='text' placeholder='password' name='password'><br><br>
    <select name='id' value='id'>
    <?php
showallData()
     
 ?>
</select>
    <input type='submit' name='update'vlaue='delete'>
</form>


    <pre>
    <?php
//     print_r($row);
    
//    }
?>
</pre>
</body>
</html>