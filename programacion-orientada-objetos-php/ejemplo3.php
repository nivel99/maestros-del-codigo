<?php
// Incluimos las definiciones anteriores
require_once 'Animal.php';
require_once 'Perro.php';
require_once 'Gato.php';
require_once 'Vaca.php';

// Función que acepta cualquier objeto que implemente la interfaz Animal
function hacerSonarAnimal(Animal $animal) {
    $animal->hacerSonido();
}

// Crear instancias de diferentes animales
$perro = new Perro();
$gato = new Gato();
$vaca = new Vaca();

// Llamar a la función con diferentes objetos
hacerSonarAnimal($perro); // Salida: Guau, guau!
hacerSonarAnimal($gato);  // Salida: Miau, miau!
hacerSonarAnimal($vaca);  // Salida: Muuu, muuu!
?>