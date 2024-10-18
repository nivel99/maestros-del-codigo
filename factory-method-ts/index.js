"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var VehicleFactory_1 = require("./VehicleFactory");
try {
    var vehicle = VehicleFactory_1.VehicleFactory.create("car");
    vehicle.drive(); // Salida: "Conduciendo un coche"
    vehicle = VehicleFactory_1.VehicleFactory.create("bike");
    vehicle.drive(); // Salida: "Montando una bicicleta"
    vehicle = VehicleFactory_1.VehicleFactory.create("plane"); // Lanzará un error
}
catch (error) {
    console.error(error.message); // Salida: "Tipo de vehículo no soportado"
}
//Para ejecutar primero es npx tsc index.ts luego node index.js
