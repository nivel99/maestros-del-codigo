"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
// Personaje.ts
var Personaje = /** @class */ (function () {
    // Constructor para inicializar los atributos
    function Personaje(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
    }
    // Método común para mostrar información del personaje
    Personaje.prototype.mostrarInfo = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Salud: ".concat(this.salud));
    };
    // Método para recibir daño
    Personaje.prototype.recibirDanio = function (danio) {
        this.salud -= danio;
        console.log("".concat(this.nombre, " ha recibido ").concat(danio, " de da\u00F1o."));
        if (this.salud <= 0) {
            console.log("".concat(this.nombre, " ha sido derrotado."));
        }
    };
    return Personaje;
}());
exports.Personaje = Personaje;
