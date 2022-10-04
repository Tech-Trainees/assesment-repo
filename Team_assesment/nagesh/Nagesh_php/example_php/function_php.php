<?php

// include 'data.php';
?>
<?php
//   function showallData(){
//       global $connection;
      //if(isset($_POST['submit'])){
        // $firstname=$_POST['firstname'];
        // $lastname=$_POST['lastname'];
        // $gmail=$_POST['gmail'];
        // $password=$_POST['password'];
        function showallData(){

        global $connection;
        $connection=mysqli_connect('localhost','root','','login');
        if($connection){
            echo 'database was connected';

        }else{
            echo 'not connected ';
        }
        $query="SELECT *from registion";
        $result=mysqli_query($connection,$query);
          if(!$result){
            echo 'failed'.mysqli_error();
          }
        
          while($row=mysqli_fetch_assoc($result)){
                $id=$row['id'];
                echo "<option value='$id' id='id'>$id</option>";
               }
               
            }
      
  //}
?>