<?php 
    class employee{
        private function private_employee_name(){
        echo "Employee Name:jula nagesh";
        echo "<br>Employee gmail:julanagesh@gmail.com";
        echo "<br>Employee password:Nagesh@123";
        echo "<br>Employee address:Hyderabad";
        }
        protected function protected_employee_name(){
            $this->private_employee_name();
        }
        public function employee_name(){
            $this->protected_employee_name();
        }
    }
    $person=new employee;
    $person->employee_name();
?>