<?php
class employee{
    var $firstname;
    var $password;
    function __construct($firstname,$password){
        $this->name=$firstname;
        $this->pass=$password;
    }
    function secnamwe(){
        echo "employee name:{$this->name}<br> employee password:{$this->pass}";
    }
}
  class child extends employee{
    public function message(){
        echo "employee";
    }
  }
  $child=new child('nagesh','nagesh@123');
  $child->message();
  $child->secnamwe();

?>
