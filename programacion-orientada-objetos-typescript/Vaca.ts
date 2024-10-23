import { Animal } from "./Animal";

// Clase Vaca que implementa la interfaz Animal
export class Vaca implements Animal {
    hacerSonido(): void {
        console.log("Muuu, muuu!");
    }
}