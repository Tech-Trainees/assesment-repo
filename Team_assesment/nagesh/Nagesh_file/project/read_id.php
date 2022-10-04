   
   
<?php
include 'id_data.php'

?>
<?php
//include 'id_key.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .form{
         background-color:skyblue;
         height:420px;
         width:350px;
         text-align:center;
         margin-left:300px;
         margin-top:100px;
         border:1px solid green;
        }
        .inputname{
           margin-top:10px
        }
        input{
            border-radius:5px;
            height:50px;
  
        }
        .submit{
         width:100px;
        }
        .select{
            width:65px;
            height:40px;
            margin-left:-6px;
            background-color:lightgray;
        }
        table,th,td{
            border:1px solid black;
            width:20px;
            background-color:skyblue;
        }
      th{
        background-color:lightgray;
        font-size:20px
      }
      td:hover{
        background-color:lightgreen;
      }
      th:hover{
        background-color:white;
      }
      table{
        width:50%;
        height:50%;
        text-align:center;
      }
        </style>
</head>
<body>
     <table>
        <tr>
            <th>id</th>
            <th>fullname</th>
            <th>mobile</th>
           
            <th>gmail</th>
            <th>password</th>
         
          
</tr>
    <?php
      while ($row = mysqli_fetch_assoc($result)){
        echo "<tr><td>{$row['id']}</td>,<td>{$row['fullname']}</td>,<td>{$row['mobile']}</td>,,<td>{$row['gmail']}</td>,<td>{$row['password']}</td>";
      }
         
    ?>
    <pre>
    <?php

    ?>
    </pre>
</body>
</html>



