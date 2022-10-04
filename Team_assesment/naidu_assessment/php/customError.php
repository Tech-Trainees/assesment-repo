<?php
function customerError($err_no,$err_str){
    echo "Error: [$err_no] $err_str ";
    echo "\n Now Script will end";
    die();
} set_error_handler("customerError");
 
$a = 10;
$b = 0;
// This will generate error
echo($a / $b);;
?>