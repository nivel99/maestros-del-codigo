"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Guerrero_1 = require("./Guerrero");
var Mago_1 = require("./Mago");
// Crear un objeto de la clase Guerrero
var guerrero = new Guerrero_1.Guerrero("Arthas", 100, 30);
guerrero.mostrarInfo();
guerrero.atacar();
guerrero.recibirDanio(20);
console.log("");
// Crear un objeto de la clase Mago
var mago = new Mago_1.Mago("Gandalf", 80, 50);
mago.mostrarInfo();
mago.lanzarHechizo();
mago.lanzarHechizo();
mago.recibirDanio(30);
//npx tsc ejercicio2.ts
//node ejercicio2.js
