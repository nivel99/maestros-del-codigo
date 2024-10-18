<?php 
interface IAnimal {
    public function comer();
    public function moverse();
    public function hacerSonido();
}

class Perro implements IAnimal {
    public function comer() {
        echo "El perro está comiendo.";
    }

    public function moverse() {
        echo "El perro está corriendo.";
    }

    public function hacerSonido() {
        echo "Guau!";
    }
}

class Pajaro implements IAnimal {
    public function comer() {
        echo "El pájaro está picoteando.";
    }

    public function moverse() {
        echo "El pájaro está volando.";
    }

    public function hacerSonido() {
        echo "Pio, pio!";
    }
}

// Función para crear un zoológico
function crearZoologico(array $animales) {
    foreach ($animales as $animal) {
        $animal->comer();
        $animal->moverse();
        $animal->hacerSonido();
        echo "\n";
    }
}

// Crear un array de animales
$zoo = [
    new Perro(),
    new Pajaro(),
    new Perro(), // Podemos agregar más animales
];

// Llamar a la función para crear el zoológico
crearZoologico($zoo);

?>