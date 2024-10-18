// VehicleFactory.ts
import { Vehicle } from "./Vehicle";
import { Car } from "./Car";
import { Bike } from "./Bike";

export class VehicleFactory {
    public static create(type: string): Vehicle {
        switch (type) {
            case "car":
                return new Car();
            case "bike":
                return new Bike();
            default:
                throw new Error("Tipo de vehículo no soportado");
        }
    }
}
