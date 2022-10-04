  <?php
    include 'DB_loginpage.php';
    // include 'db_php.php';
  ?>
<html>
    <head>
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
  <!-- <form class='form' action='DB_loginpage.php' method='post'>  -->
    <table class='table'>
         <tr >
            <th>id</th>
            <th>firstname</th>
            <th>lastname</th>
            <th>gmail</th>
            <th>password</th>
    </tr>
        <!-- <input class='inputname'type='text' placeholder='firstname' name='firstname'><br><br>
        <input type='text' placeholder='lastname' name='lastname'><br><br>
        <input type='text' placeholder='gmail' name='gmail'><br><br>
        <input type='text' placeholder='password' name='password'><br><br> -->
        <!-- <select name='id' class='select'value='id' > -->
         <?php
              while ($row=mysqli_fetch_assoc($result)){
                  echo "<tr><td>{$row['id']}</td>,<td>{$row['firstname']}</td>,<td>{$row['lastname']}</td>,<td>{$row['gmail']}</td>,<td>{$row['password']}</td>";
              }
                ?>
                
            
    <!-- </select><br><br> -->
        <!-- <input type='submit' value='submit' class='submit' name='submit'>  -->
       
</table>
 </form>
</body>

</html>