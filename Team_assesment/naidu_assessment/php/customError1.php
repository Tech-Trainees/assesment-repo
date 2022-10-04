<?php
// function myerror($error_no,$error_str){
//     echo "Error: [$error_no] $error_str";
//     die();
// }
// set_error_handler("myerror");
    $file=readfile("custom.txt");
    echo $file;

?>