<?php
   class person{
       function __construct($name,$password){
        $this->name=$name;
        $this->pass=$password;
       }
       function __destruct(){
        echo "employe name :{$this->name}<br> employee password: {$this->pass}";
       }
   }
   $employee=new person('prem','prem@12345');

?>