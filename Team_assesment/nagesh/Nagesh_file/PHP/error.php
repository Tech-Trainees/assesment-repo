<?php
// if($test="sample.txt"){

// }
// if(file_exists("example_PH.php")){
//     echo readfile("example_PH.php");
// }else{
//    die("file not found");
// }
function myerror($err_no,$err_msg){
    echo "error:[$err_no]$err_msg";
    echo die("error");
}

set_error_handler("myerror");
$a=10;
 $b=5;
 echo ($a/$b);

?>
