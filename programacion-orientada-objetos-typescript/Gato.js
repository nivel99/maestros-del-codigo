"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
// Clase Gato que implementa la interfaz Animal
var Gato = /** @class */ (function () {
    function Gato() {
    }
    Gato.prototype.hacerSonido = function () {
        console.log("Miau, miau!");
    };
    return Gato;
}());
exports.Gato = Gato;
