<?php
   trait example1{
    public function hello1(){
        echo "good morning";
    }
   }
   trait example2{
    public function hello2(){
        echo "good afternoon";
    }
   }
   trait example3{
    public function hello3(){
        echo "good evening";
    }
   }
   class deta1{
    use example1;
   }
   class deta2{
    use example2;
   }
   class deta3{
    use example3;
   }

   $obj=new deta1();
   $obj->hello1();
   echo "<br>";

   $obj2=new deta2();
   $obj2->hello2();
   echo "<br>";

   $obj3=new deta3();
   $obj3->hello3();
?>