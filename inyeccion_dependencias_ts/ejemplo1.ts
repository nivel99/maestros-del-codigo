// Definición de la interfaz ICalculadora
interface ICalculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

// Clase CalculadoraBasica que implementa la interfaz ICalculadora
class CalculadoraBasica implements ICalculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }
}

// Clase OperacionesMatematicas que utiliza la interfaz ICalculadora
class OperacionesMatematicas {
    private calculadora: ICalculadora;

    constructor(calculadora: ICalculadora) {
        this.calculadora = calculadora;
    }

    realizarSuma(a: number, b: number): number {
        return this.calculadora.sumar(a, b);
    }

    // ... otros métodos para realizar operaciones matemáticas
}

// Uso
const calculadoraBasica = new CalculadoraBasica();
const operacionesMatematicas = new OperacionesMatematicas(calculadoraBasica);

const resultado = operacionesMatematicas.realizarSuma(5, 3);
console.log(resultado); // Imprimirá 8

//Para ejecutar primero es npx tsc ejemplo1.ts luego node ejemplo1.js