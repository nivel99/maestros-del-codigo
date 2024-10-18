<?php
require_once 'Vehicle.php';

class Bike implements Vehicle {
    public function drive() {
        echo "Conduciendo una moto\n";
    }
}
?>
