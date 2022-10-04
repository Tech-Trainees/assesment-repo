<?php
 include "dbcon.php";

if(isset($_POST['submit'])){  
    $name=$_POST['name'];
    $mobilenumber=$_POST['mobile'];
    $email=$_POST['email'];
    $address=$_POST['address'];
    $pincode=$_POST['pincode']; 
$query="INSERT into empData1(name,mobilenumber,email) values ('$name','$mobilenumber','$email')";
$result=mysqli_query($connection,$query);

if(!$result){
    die("query failed".mysqli_error($connection));
        }    
        else{
            $last_id = mysqli_insert_id($connection);
            $query1="INSERT into empData2(id,Address,pincode) values ('$last_id','$address','$pincode')";
            mysqli_query($connection,$query1);

        }
    }
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    // $query3="SELECT * FROM empData1 NATURAL JOIN empData2 WHERE id = $id  ";
   $query4="SELECT empData1.*, empData2.* 
   FROM empData1 
   INNER JOIN empData2 ON empData1.id = empData2.id 
   WHERE empData1.id = empData2.id ";
    // $query4="SELECT* FROM empData1  JOIN empData2 ON empData2.id = empData2.id ";
$readResult=mysqli_query($connection,$query4);

if(!$readResult){
    die("query failed".mysqli_error($connection));
        }    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

        #add{
          /* border: 1px solid black; */
          margin-top: 80px;
          width: 270px;
          padding: 51px 11px 59px 69px ;
             display: none; 
          margin-left: 500px;
          border-radius: 15px;
          background-color: #9d9ad9;
          box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
            }
        .input{
          width: 200px;
          height: 30px;
          border-radius: 8px;
        }
        .btn{
          width: 100px;
          height: 30px;
          border-radius: 8px;
        }
        td,th{
          width:100px;
          height:40px;
        }
        table{
       cursor: pointer;
       box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
        }
        th{
          background-color: #6caca0;
          border-radius: 5px;
        }
        td{
          text-align: center;
          background-color: #9d9ad9;
          border-radius: 5px;
        }
        td:hover{
          background-color: #1f8ac0;
        }
        .btn1{
          margin-left: 420px;
          width: 70px;
          height: 30px;
          border-radius: 8px;
          background-color: #9d9ad9;
        }
    </style>
    <script type="text/JavaScript">
    
 function add(){
document.getElementById('table').style.display="block";
document.getElementById('add').style.display="none";
    }
    function table(){
document.getElementById('add').style.display="block";
document.getElementById('table').style.display="none";
    } 
    function cancel(){
document.getElementById('add').style.display="none";
document.getElementById('table').style.display="block";
    } 
</script>
</head>
<body>
  <div class="maindiv">
  
<div id="add">
    <form action="task.php" method="post" >
      <h2 id="h1" >Kindly fill  the details</h2>
    <input type="text"  class="input" name="name" placeholder="name"><br><br>
    <input type="phone" class="input" name="mobile" placeholder="mobile number"><br><br>
    <input type="email"  class="input" name="email" placeholder="email"><br><br>
    <input type="text"  class="input" name="address" placeholder="Address"><br><br>
    <input type="text" class="input" name="pincode" placeholder="pincode"><br><br>
    <?php
       echo "<button type='submit' class='btn' name='submit' id='tablesubmit' onClick='add()' >submit</button>";
       echo "<button type='submit' class='btn' name='cancel' id='tablecancel' onClick='cancel()' >cancel</button>";
       
    ?>
    
    </form>
</div>
</div>
<div id="table">
    <table >
  <thead>
    <b>EMPLOYEE DETAILS<b>
    <tr>
    
      <th>Name</th>
      <th>mobile</th>
      <th>email</th>
      <th>Address</th>
      <th>pincode</th>
    </tr>
    <?php
       echo "<button class='btn1' onClick='table()'>add</button>";
    ?>
  </thead>
    <?php
while($row=mysqli_fetch_assoc( $readResult)){
// echo "id:".$row["ID"]."-name:".$row["user"]."".$row["password"]."<br>";
echo "<tr><td>{$row['name']}</td><td>{$row['mobilenumber']}</td><td>{$row['email']}</td></td><td>{$row['Address']}</td></td><td>{$row['pincode']}</td></tr>\n";
}
?>
</div>

</body>
</html>