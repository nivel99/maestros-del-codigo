"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
// Clase Perro que implementa la interfaz Animal
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.hacerSonido = function () {
        console.log("Guau, guau!");
    };
    return Perro;
}());
exports.Perro = Perro;
