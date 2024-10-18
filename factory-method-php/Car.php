<?php
require_once 'Vehicle.php';

class Car implements Vehicle {
    public function drive() {
        echo "Conduciendo un coche\n";
    }
}
?>
