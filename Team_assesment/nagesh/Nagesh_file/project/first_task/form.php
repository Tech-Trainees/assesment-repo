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
        .button{
         width:100px;
         height:50px;
         background-color:lightgray;
        }
        .button:hover{
        background-color:lightgreen;
      }
        .add{
            width:100px;
            height:50px;
            margin-left:-6px;
            background-color:lightgray;
        }
      .add:hover{
        background-color:lightgreen;
      }
        </style>
</head>
<body>
<form  class='form' method='post'>
        <input type='text' placeholder='firstname' name='firstname'><br><br>
        <input type='text' placeholder='mobilenumber' name='mobile'><br><br>
        <input type='text' placeholder='gmail' name='gmail'><br><br>
        <input type='text' placeholder='password' name='password'><br><br>
        <button type='submit'class='button' placeholder='submit' name='submit'>submit<button>
       <button class='add'> <a href='./firstpage.php'style="text-decoration: none;">ADD</a></button>

</form>
</body>
</html>