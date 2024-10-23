"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
// Mago.ts
var Personaje_1 = require("./Personaje");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, salud, mana) {
        var _this = _super.call(this, nombre, salud) || this;
        _this.mana = mana;
        return _this;
    }
    // Método específico de Mago
    Mago.prototype.lanzarHechizo = function () {
        if (this.mana > 0) {
            console.log("".concat(this.nombre, " lanza un hechizo."));
            this.mana -= 10;
        }
        else {
            console.log("".concat(this.nombre, " no tiene suficiente mana para lanzar un hechizo."));
        }
    };
    return Mago;
}(Personaje_1.Personaje));
exports.Mago = Mago;
