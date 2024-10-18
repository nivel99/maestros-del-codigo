// Clase CalculadoraBasica que implementa la interfaz ICalculadora
var CalculadoraBasica = /** @class */ (function () {
    function CalculadoraBasica() {
    }
    CalculadoraBasica.prototype.sumar = function (a, b) {
        return a + b;
    };
    CalculadoraBasica.prototype.restar = function (a, b) {
        return a - b;
    };
    CalculadoraBasica.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    CalculadoraBasica.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    };
    return CalculadoraBasica;
}());
// Clase OperacionesMatematicas que utiliza la interfaz ICalculadora
var OperacionesMatematicas = /** @class */ (function () {
    function OperacionesMatematicas(calculadora) {
        this.calculadora = calculadora;
    }
    OperacionesMatematicas.prototype.realizarSuma = function (a, b) {
        return this.calculadora.sumar(a, b);
    };
    return OperacionesMatematicas;
}());
// Uso
var calculadoraBasica = new CalculadoraBasica();
var operacionesMatematicas = new OperacionesMatematicas(calculadoraBasica);
var resultado = operacionesMatematicas.realizarSuma(5, 3);
console.log(resultado); // Imprimirá 8
//Para ejecutar primero es npx tsc ejemplo1.ts luego node ejemplo1.js
