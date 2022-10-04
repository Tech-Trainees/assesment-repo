<html> 
  <head> 
    <style>
      .add{
        margin-top:60px;
        margin-left:-1135px;
      }
      .add:hover{
        background-color:lightblue
      }
      .back:hover{
        background-color:lightblue
      }
      </style>
    <!-- <script src=""></script>  -->
    <!-- <script> 
    $(function(){
      $("firstpage.php").load("firstpage.php"); 
    });
    function jsredir() {
  window.location.href = "firstpage.php";
}
    </script>  -->
  </head> 

  <body>
    <div id="display" style="width: 1000px;float: right;"></div>

<!-- <script>
  function load_anotherpage() {
    document.getElementById("display").innerHTML =
      '<embed type="php" src="firstpage.php" width="100%" height="800" >';
  }

  load_anotherpage();
</script> -->
<div>
    <center>
   <button class='add' style="width:100px;height:40px"> <a href="firstpage.php" style=" text-decoration:none" target="targetframe">ADD</a></button>
   <button class='back' style="width:100px;height:40px"> <a href="display.php" style=" text-decoration:none" target="targetframe">Back</a></button>
  </center>
  </div>
  <div>
    <iframe src="display.php" style="width:900px;height:800px;" name="targetframe" allowTransparency="true"  frameborder="0" >
    </iframe>
  </div>
</body>
</html>