// Bike.ts
import { Vehicle } from "./Vehicle";

export class Bike implements Vehicle {
    drive(): void {
        console.log("Montando una bicicleta");
    }
}
