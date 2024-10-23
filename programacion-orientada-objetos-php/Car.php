<?php
class Car {
    // Propiedades
    private $make;
    private $model;
    private $year;

    // Constructor
    public function __construct($make, $model, $year) {
        $this->make = $make;
        $this->model = $model;
        $this->year = $year;
    }

    // Método para obtener la marca
    public function getMake() {
        return $this->make;
    }

    // Método para establecer la marca
    public function setMake($make) {
        $this->make = $make;
    }

    // Método para obtener el modelo
    public function getModel() {
        return $this->model;
    }

    // Método para establecer el modelo
    public function setModel($model) {
        $this->model = $model;
    }

    // Método para obtener el año
    public function getYear() {
        return $this->year;
    }

    // Método para establecer el año
    public function setYear($year) {
        $this->year = $year;
    }

    // Método para mostrar información del coche
    public function displayInfo() {
        echo "Car: " . $this->make . " " . $this->model . " (" . $this->year . ")";
    }
}
?>
