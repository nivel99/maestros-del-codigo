// Car.ts
import { Vehicle } from "./Vehicle";

export class Car implements Vehicle {
    drive(): void {
        console.log("Conduciendo un coche");
    }
}
