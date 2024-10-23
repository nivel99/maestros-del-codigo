<?php
require_once 'Personaje.php';

class Mago extends Personaje {
    private $mana;

    public function __construct($nombre, $salud, $mana) {
        parent::__construct($nombre, $salud);
        $this->mana = $mana;
    }

    // Método específico de Mago
    public function lanzarHechizo() {
        if ($this->mana > 0) {
            echo $this->nombre . " lanza un hechizo.\n";
            $this->mana -= 10;
        } else {
            echo $this->nombre . " no tiene suficiente mana para lanzar un hechizo.\n";
        }
    }
}
?>