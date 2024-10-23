"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaca = void 0;
// Clase Vaca que implementa la interfaz Animal
var Vaca = /** @class */ (function () {
    function Vaca() {
    }
    Vaca.prototype.hacerSonido = function () {
        console.log("Muuu, muuu!");
    };
    return Vaca;
}());
exports.Vaca = Vaca;
