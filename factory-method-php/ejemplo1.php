<?php
require_once 'VehicleFactory.php'; // Asegúrate de que la ruta sea correcta

try {
    // Crear un coche
    $vehicle = VehicleFactory::create('car');
    $vehicle->drive(); // Salida: "Conduciendo un coche"
    echo "<br>";

    // Crear una bicicleta
    $vehicle = VehicleFactory::create('bike');
    $vehicle->drive(); // Salida: "Montando una bicicleta"
    echo "<br>";

    // Intentar crear un tipo no soportado
    $vehicle = VehicleFactory::create('plane'); // Esto lanzará una excepción
    $vehicle->drive();
    echo "<br>";
} catch (Exception $e) {
    echo $e->getMessage(); // Salida: "Tipo de vehículo no soportado"
}
?>
