// index.ts
import { VehicleFactory } from "./VehicleFactory";

try {
    let vehicle = VehicleFactory.create("car");
    vehicle.drive(); // Salida: "Conduciendo un coche"

    vehicle = VehicleFactory.create("bike");
    vehicle.drive(); // Salida: "Montando una bicicleta"

    vehicle = VehicleFactory.create("plane"); // Lanzará un error
} catch (error) {
    console.error((error as Error).message); // Salida: "Tipo de vehículo no soportado"
}

//Para ejecutar primero es npx tsc index.ts luego node index.js