<?php 
   class person{
    var $first_name;
    var $gmail;
    var $password;
     function set_name($firstname){
        $this->name=$firstname;

     }
     function get_name(){
        return $this->name;
     }
     function set_mail($gmail){
        $this->mail=$gmail;

     }
     function get_mail(){
        return $this->mail;
     }
     function set_pass($password){
        $this->pass=$password;

     }
     function get_pass(){
        return $this->pass;
     }
   }
   $employee=new person();
   $employee->set_name('Naidu');
   $employee->set_mail('naidu.n@gmail.com');
   $employee->set_pass('naidu@123');
     echo $employee->get_name();
     echo "<br>".$employee->get_mail();
     echo "<br>".$employee->get_pass();
?>
