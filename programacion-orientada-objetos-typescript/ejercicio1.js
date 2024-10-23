"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var Car_1 = require("./Car");
// Crear un objeto de la clase Car
var myCar = new Car_1.Car("Toyota", "Corolla", 2022);
// Usar los métodos de la clase
console.log(myCar.getMake()); // Salida: Toyota
myCar.setModel("Camry");
console.log(myCar.getModel()); // Salida: Camry
myCar.displayInfo(); // Salida: Car: Toyota Camry (2022)
