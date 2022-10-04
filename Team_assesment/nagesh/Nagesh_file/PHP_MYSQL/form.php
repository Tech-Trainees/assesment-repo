
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
            margin-top:10px;
  
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
        </style>
</head>
<body>
    <form action='db_php.php' class='form' method='post'>
        <input type='text' placeholder='firstname' name='firstname'><br><br>
        <input type='text' placeholder='lastname' name='lastname'><br><br>
        <input type='text' placeholder='gmail' name='gmail'><br><br>
        <input type='text' placeholder='password' name='password'><br><br>
      
        <input type='submit'class='submit' placeholder='submit' name='submit'>

</form>
</body>
</html>