<?php
require_once 'Personaje.php';

class Guerrero extends Personaje {
    private $fuerza;

    public function __construct($nombre, $salud, $fuerza) {
        parent::__construct($nombre, $salud);
        $this->fuerza = $fuerza;
    }

    // Método específico de Guerrero
    public function atacar() {
        echo $this->nombre . " ataca con una fuerza de " . $this->fuerza . ".\n";
    }
}
?>
