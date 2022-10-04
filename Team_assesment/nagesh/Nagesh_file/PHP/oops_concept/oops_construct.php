<?php
    class employee{
        function __construct($firstname,$lastname,$gmail,$password){
            $this->name=$firstname;
            $this->lastname=$lastname;
            $this->mail=$gmail;
            $this->pass=$password;
            
        }
        function get_name(){
           return $this->name;
        }
        function get_lastname(){
            return $this->lastname;
         }
         function get_mail(){
            return $this->mail;
         }
         function get_pass(){
            return $this->pass;
         }
    }
    $person =new employee('kishor','kirsh','kishor.v@gmail.com','kirsh@123');
    echo '<br>'.$person->get_name();
    echo '<br>'.$person->get_lastname();
    echo '<br>'.$person->get_mail();
    echo '<br>'.$person->get_pass();

?>