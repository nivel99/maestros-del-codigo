<?php

namespace Geometry;

interface Figura {
    public function perimetro();
    public function area();
}

class Triangulo implements Figura {
    private $lado;

    public function __construct($lado) {
        $this->lado = $lado;
    }

    public function perimetro() {
        return $this->lado * 3;
    }

    public function area() {
        return ($this->lado * $this->lado * sqrt(3)) / 4;
    }
}

class Cuadrado implements Figura {
    private $lado;

    public function __construct($lado) {
        $this->lado = $lado;
    }

    public function perimetro() {
        return $this->lado * 4;
    }

    public function area() {
        return $this->lado * $this->lado;
    }
}

// Código principal:
$triangulo = new Triangulo(3);
$cuadrado = new Cuadrado(4);

echo "- Usamos las interfaces - <br>";
echo $cuadrado->perimetro();
echo "<br>";
echo $triangulo->perimetro();
echo "<br>";

echo $cuadrado->area();
echo "<br>";
echo $triangulo->area();