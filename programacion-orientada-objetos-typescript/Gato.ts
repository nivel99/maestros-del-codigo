import { Animal } from "./Animal";

// Clase Gato que implementa la interfaz Animal
export class Gato implements Animal {
    hacerSonido(): void {
        console.log("Miau, miau!");
    }
}