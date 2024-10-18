<?php
require_once __DIR__ . '/Car.php';  // Asegúrate de incluir las rutas correctas
require_once __DIR__ . '/Bike.php'; // Asegúrate de incluir las rutas correctas

class VehicleFactory {
    public static function create($type) {
        switch ($type) {
            case 'car':
                return new Car();
            case 'bike':
                return new Bike();
            default:
                throw new Exception("Tipo de vehículo no soportado");
        }
    }
}
?>
