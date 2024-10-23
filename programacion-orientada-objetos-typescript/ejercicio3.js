"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Perro_1 = require("./Perro");
var Gato_1 = require("./Gato");
var Vaca_1 = require("./Vaca");
// Función que acepta cualquier objeto que implemente la interfaz Animal
function hacerSonarAnimal(animal) {
    animal.hacerSonido();
}
// Crear instancias de diferentes animales
var perro = new Perro_1.Perro();
var gato = new Gato_1.Gato();
var vaca = new Vaca_1.Vaca();
// Llamar a la función con diferentes objetos
hacerSonarAnimal(perro); // Salida: Guau, guau!
hacerSonarAnimal(gato); // Salida: Miau, miau!
hacerSonarAnimal(vaca); // Salida: Muuu, muuu!
//npx tsc ejercicio3.ts
//node ejercicio3.js
