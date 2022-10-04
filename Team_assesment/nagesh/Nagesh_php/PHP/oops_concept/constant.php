<?php

class example{
    const Tittle='@@@hello world!!!!!!!!!!!';
    public function hello(){
        echo self::Tittle;
    }
}
$deta=new example();
$deta->hello();
?>