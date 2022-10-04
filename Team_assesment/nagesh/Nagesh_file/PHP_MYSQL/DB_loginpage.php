  <?php
   //include 'db_php.php';
  ?>
 <?php
//    $firstname=$_POST['firstname'];
//          $lastname=$_POST['lastname'];
//          $gmail=$_POST['gmail'];
//          $password=$_POST['password'];
// $connection=mysqli_connect('localhost','root','','login');
// if($connection){
//   echo 'database was connected';
// }
// $query="INSERT into registion(firstname,lastname,gmail,password)";
// $query.="values('$firstname','$lastname','$gmail','$password')";
//   $result=mysqli_query($connection,$query);

$connection=mysqli_connect('localhost','root','','login');

    $query="SELECT * from registion";
    $result=mysqli_query($connection,$query);
     if(!$result){
      echo 'failed'.mysqli_error();
     }
    

// function showallData(){
//   global $connection;
//   $query="SELECT * from registion";
//   $result=mysqli_query($connection,$query);
//    if(!$result){
//     echo 'failed'.mysqli_error();
//    }
//    while ($row=mysqli_fetch_assoc($result)){
//     $id=$row['id'];
//     echo "<option class='select' vlaue='$id'>$id</option>";
//   }
//   }
 ?>
 <?php

//    if(isset($_POST['submit'])){
//     $firstname=$_POST['firstname'];
//       $lastname=$_POST['lastname'];
//       $gmail=$_POST['gmail'];
//       $password=$_POST['password'];
//      $id=$_POST['id'];
//       $query="DELETE from registion ";
//       // $query.="firstname='$firstname', ";
//       // $query.="lastname='$lastname', ";
//       // $query.="gmail='$gmail', ";
//       // $query.="password='$password' ";
//       $query.="WHERE id='$id' ";
//       $result=mysqli_query($connection,$query);
//  if(!$result){
//   echo 'failed'.mysqli_error();
//  }
//    }

// $connection=mysqli_connect('localhost','root','','login');
// if($connection){
//   echo 'database was connected';
// }else{
//   echo 'not connected ';
// }




// if(isset($_POST['submit'])){
//   $firstname=$_POST['firstname'];
//   $lastname=$_POST['lastname'];
//   $gmail=$_POST['gmail'];
//   $password=$_POST['password'];
//   $connection=mysqli_connect('localhost','root','','login');
//   if($connection){
//     echo 'database was connected!!!';
//   }
//   $query="INSERT into registion (firstname,lastname,gmail,password)";
//   $query.="VALUES('$firstname','$lastname','$gmail','$password')";
//      $result=mysqli_query($connection,$query);
//         if(!$result){
//           echo 'failed'.mysqli_error();
//         }
// }


// if(isset($_POST['submit'])){
// $firstname=$_POST['firstname'];
// $gmail=$_POST['gmail'];
// $password=$_POST['password'];
// $connection=mysqli_connect('localhost','root','','login');
// if($connection){
//   echo 'database was connected';
// }else{
//   die('database was not connected ?');
// }
// $query="INSERT INTO form(firstname,gmail,password)";
//    $query.="values('$firstname','$gmail','$password')";
//      $result=mysqli_query($connection,$query);
//        if(!$result){
//          echo('faild'.mysqli_error());
//        }
//       }
      ?>