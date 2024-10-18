<?php 
interface ICalculadora {
    public function sumar(int $a, int $b): int;
    public function restar(int $a, int $b): int;
    public function multiplicar(int $a, int $b): int;
    public function dividir(int $a, int $b): float;
}

class CalculadoraBasica implements ICalculadora {
    public function sumar(int $a, int $b): int {
        return $a + $b;
    }

    public function restar(int $a, int $b): int {
        return $a - $b;
    }

    public function multiplicar(int $a, int $b): int {
        return $a * $b;
    }

    public function dividir(int $a, int $b): float {
        if ($b == 0) {
            throw new InvalidArgumentException("No se puede dividir por cero.");
        }
        return $a / $b;
    }
}

class OperacionesMatematicas {
    private ICalculadora $calculadora;

    public function __construct(ICalculadora $calculadora) {
        $this->calculadora = $calculadora;
    }

    public function realizarSuma(int $a, int $b): int {
        return $this->calculadora->sumar($a, $b);
    }

    // ... otros métodos para realizar operaciones matemáticas
}

// Uso:
$calculadoraBasica = new CalculadoraBasica();
$operacionesMatematicas = new OperacionesMatematicas($calculadoraBasica);

$resultado = $operacionesMatematicas->realizarSuma(5, 3);
echo $resultado; // Imprimirá 8

?>