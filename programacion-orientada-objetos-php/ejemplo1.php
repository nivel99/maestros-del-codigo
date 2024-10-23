<?php
require_once 'Car.php';

// Crear un objeto de la clase Car
$myCar = new Car("Toyota", "Corolla", 2022);

// Usar los métodos de la clase
echo $myCar->getMake(); // Salida: Toyota
echo "\n";

$myCar->setModel("Camry");
echo $myCar->getModel(); // Salida: Camry
echo "\n";

$myCar->displayInfo(); // Salida: Car: Toyota Camry (2022)
?>