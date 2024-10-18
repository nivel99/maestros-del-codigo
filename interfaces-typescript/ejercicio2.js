// Clase Triangulo que implementa la interfaz Figura
var Triangulo = /** @class */ (function () {
    function Triangulo(lado) {
        this.lado = lado;
    }
    Triangulo.prototype.perimetro = function () {
        return this.lado * 3;
    };
    Triangulo.prototype.area = function () {
        return (this.lado * this.lado * Math.sqrt(3)) / 4;
    };
    return Triangulo;
}());
// Clase Cuadrado que implementa la interfaz Figura
var Cuadrado = /** @class */ (function () {
    function Cuadrado(lado) {
        this.lado = lado;
    }
    Cuadrado.prototype.perimetro = function () {
        return this.lado * 4;
    };
    Cuadrado.prototype.area = function () {
        return this.lado * this.lado;
    };
    return Cuadrado;
}());
// Código principal
var triangulo = new Triangulo(3);
var cuadrado = new Cuadrado(4);
console.log("- Usamos las interfaces -");
console.log("Per\u00EDmetro del cuadrado: ".concat(cuadrado.perimetro()));
console.log("Per\u00EDmetro del tri\u00E1ngulo: ".concat(triangulo.perimetro()));
console.log("\u00C1rea del cuadrado: ".concat(cuadrado.area()));
console.log("\u00C1rea del tri\u00E1ngulo: ".concat(triangulo.area()));
//Para ejecutar primero es npx tsc ejercicio2.ts luego node ejercicio2.js
