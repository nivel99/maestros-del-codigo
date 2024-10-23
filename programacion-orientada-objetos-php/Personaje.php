<?php
class Personaje {
    // Propiedades comunes a todos los personajes
    protected $nombre;
    protected $salud;

    // Constructor para inicializar los atributos
    public function __construct($nombre, $salud) {
        $this->nombre = $nombre;
        $this->salud = $salud;
    }

    // Método común para mostrar información del personaje
    public function mostrarInfo() {
        echo "Nombre: " . $this->nombre . "\n";
        echo "Salud: " . $this->salud . "\n";
    }

    // Método para recibir daño
    public function recibirDanio($danio) {
        $this->salud -= $danio;
        echo $this->nombre . " ha recibido " . $danio . " de daño.\n";
        if ($this->salud <= 0) {
            echo $this->nombre . " ha sido derrotado.\n";
        }
    }
}
?>
