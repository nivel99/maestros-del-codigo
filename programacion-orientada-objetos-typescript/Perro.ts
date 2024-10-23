import { Animal } from "./Animal";

// Clase Perro que implementa la interfaz Animal
export class Perro implements Animal {
    hacerSonido(): void {
        console.log("Guau, guau!");
    }
}
