<html>
    <head>
      <style>
        /* .div1{
          background-image: url("employee_img.jpg");
           opacity:0.5;
        } */
        /* .err{
          color:red;
        } */
        .f_name{
          margin-left:200px;
          margin-top:20px;
              width:750px;
              border:1px 1px solid block;
              height:40px;
              box-shadow: 5px 10px 8px 10px #888888;
        }
        .l_name{
          margin-left:200px;
          margin-top:20px;
              width:750px;
              border:1px 1px solid block;
              height:40px;
              box-shadow: 5px 10px 8px 10px #888888;
        }
        .g_name{
          margin-left:200px;
          margin-top:20px;
              width:750px;
              border:1px 1px solid block;
              height:40px;
              box-shadow: 5px 10px 8px 10px #888888;
        }
        .p_name{
          margin-left:200px;
          margin-top:20px;
              width:750px;
              border:1px 1px solid block;
              height:40px;
              box-shadow: 5px 10px 8px 10px #888888;
        }
        .a_name{
          margin-left:200px;
          margin-top:20px;
              width:750px;
              border:1px 1px solid block;
              height:40px;
              box-shadow: 5px 10px 8px 10px #888888;
        }
              .submit{
          margin-left:450px;
          margin-top:20px;
              width:200px;
              border:1px 1px solid block;
              height:40px;
              font-size:30px;
              color:white;
              background-color:#4DB1ff;
        }
        .submit:hover{
           background-color:lightblue;
           color:white;
        }
     .first_name{
      margin-left:200px;
      margin-top:100px;
      font-size:30px;
     }
    
     .last_name{
      margin-left:200px;
      margin-top:100px;
      font-size:30px;
     }
    
     .gmail{
      margin-left:200px;
      margin-top:100px;
      font-size:30px;
     }
    
     .password{
      margin-left:200px;
      margin-top:100px;
      font-size:30px;
     }
    
     .address{
      margin-left:200px;
      margin-top:100px;
      font-size:30px;
     }
     .form_output{
       border:1px 2px solid block;
       background-color:block;
       margin-top:500px;
       margin-left:200px;
       width:100px;
       height:400px;
     }
     .img_ss{
      margin-top:50px;
      margin-left:690px;
      width:180px;
      height:200px;
      border-radius: 100px;

     }
     .registration{
      font-size:30px;
      margin-top:17px;
      margin-left:200px;
      background-color:blue;
      color:white;
      width:750px;
      height:41px;
      text-shadow: 1px 1px;
     }
        </style>
</head>
<body >
  <!-- <div class='div1'>
  </div> -->
    <h1 class='registration'><center>Registration Form</center></h1>
    <a href='./use.html'><img src='employee.png'class='img_ss'></a>
    <form class='form' action='example_PHP_result.php' method='post'>

    <lable class='first_name'>First Name :</lable><br>
        <input type='text' placeholder='firstname' class='f_name' name='firstname'><br><br>
        <lable class='last_name'>Last Name :</lable><br>
        <input type='text' placeholder='lastname' class='l_name' name='lastname'><br><br>
        <lable class='gmail'>Gmail:</lable><br>
        <input type='text' placeholder='gmail' class='g_name' name='gmail'><br><br>
        <lable class='password'>Password :</lable><br>
        <input type='text' placeholder='password' class='p_name' name='password'><br><br>
        <lable class='address'>Address :</lable><br>
        <input type='text' placeholder='address' class='a_name' name='address'><br><br>
        <input type='submit' class= 'submit ' name='submit' value='submit'>

</form>

</body>
</html>