<?php



   //  class method{
   //    public static function hello(){
   //       echo "hello world @@@@@@@@@";
   //    }
   //  }

   // echo method:: hello();
   
   
   

//(((((((((((((((((((constant method in PHP_file)))))))))))))))))))
// class example{
//    const tittle='knkjnfknskfnsf';
// }
// echo example::tittle;
   // class example{
   //    const Tittle='PHP - Class Constants';
   //    public function hello(){
   //       echo self::Tittle;
   //    }
   // }
   // $deta=new example();
   // $deta->hello();



//(((((((((((((((((overridding method file_PHP)))))))))))))))))
//    class employee{
//     var $name;
//     var $password;
//     public function __construct($name,$password){
//         $this->name=$name;
//         $this->pass=$password;

//     }
//     function intro(){
//                  echo "employee name:{$this->name}<br> employee password:{$this->pass}";
//         }
//    }

//    class person extends employee{
//      var $mail;
//      public function __construct($name,$password,$mail){
//         $this->name=$name;
//         $this->pass=$password;
//         $this->mail=$mail;
//      }
//        public function intro(){
//         echo "<h1>employee name:{$this->name}<br> employee password:{$this->pass}<br>
//         employee mail :{$this->mail}</h1>";
//        }
        
// }
// $deta=new person('nagesh','nagesh@123','nagesh@gmail.com');
// $deta->intro();
//(((((((((((((((((inheritance method file _program)))))))))))))))))

//   class employee{
//     var $firstname;
//     var $password;
//          function __construct($firstname,$password){
//             $this->name=$firstname;
//             $this->pass=$password;
//         }
//         function secnamwe(){
//             echo "employee name:{$this->name}<br> employee password:{$this->pass}";
//         }

//   }
//   class deta extends employee{
//     public function message(){
//         echo "employee<br>";
//     }
//   }
//   $deta=new deta('kishor','kirsh@122');
//   $deta->message();
//   $deta->secnamwe();

//((((((((public_private_protected method file_program))))))))

//    class employee{
//     protected function perotected_file(){
//         echo 'employee name: naidu<br>';
//         echo 'employee mail: naidu.n@gmail.com<br>';
//         echo 'employee password: naidu@123<br>';
        
//     }
//     private function private_file(){
//         $this->  perotected_file();
//     }
//     public function public_file(){
//         $this-> private_file();
//     }
//    }
//    $person=new employee();
//     $person->public_file();


//(((((((((((__destruct method file_program)))))))))))
//    class employee{
//        function __construct($name,$password){
//         $this->name=$name;
//         $this->pass=$password;
//        }
//        function __destruct(){
//         echo "employee name:{$this->name} <br>employee password:{$this->pass}";
//        }
//    }
//    $person=new employee("nagesh","jula123");


//(((((((((((__construct method file_program)))))))))))
//    class employee{
//     var $name;
//     var $password;
//        function __construct($name,$password){
//         $this->name=$name;
//         $this->pass=$password;
//        }
//        function get_name(){
//         return $this->name;

//        }
//        function get_pass(){
//         return $this->pass;
//        }
//    }
//    $person=new employee('nagesh','julanagesh@123');
//    echo $person->get_name();
//    echo $person->get_pass();



//(((((((((((set method file_program)))))))))))
//   class person{
//     var $firstname;
//     var $password;
//     function set_name($firstname){
//           $this->name=$firstname;

//     }
//     function get_name(){
//         return $this->name;
//     }
//     function set_pass($password){
//         $this->pass=$password;

//   }
//   function get_pass(){
//      return $this->pass;
//   }
//   }
//   $employee=new person ();
//   $employee->set_name('nagesh');
//   $employee->set_pass('nagesh@123');
//   echo $employee->get_name();
//   echo "<br>"
// ;  echo $employee->get_pass();
?>