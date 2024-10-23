<?php
require_once 'Guerrero.php';
require_once 'Mago.php';

// Crear un objeto de la clase Guerrero
$guerrero = new Guerrero("Arthas", 100, 30);
$guerrero->mostrarInfo();
$guerrero->atacar();
$guerrero->recibirDanio(20);
echo "\n";

// Crear un objeto de la clase Mago
$mago = new Mago("Gandalf", 80, 50);
$mago->mostrarInfo();
$mago->lanzarHechizo();
$mago->lanzarHechizo();
$mago->recibirDanio(30);
?>