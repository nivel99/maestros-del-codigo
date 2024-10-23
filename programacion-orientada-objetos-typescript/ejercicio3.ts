import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Vaca } from "./Vaca";
import { Animal } from "./Animal";

// Función que acepta cualquier objeto que implemente la interfaz Animal
function hacerSonarAnimal(animal: Animal): void {
    animal.hacerSonido();
}

// Crear instancias de diferentes animales
const perro = new Perro();
const gato = new Gato();
const vaca = new Vaca();

// Llamar a la función con diferentes objetos
hacerSonarAnimal(perro); // Salida: Guau, guau!
hacerSonarAnimal(gato);  // Salida: Miau, miau!
hacerSonarAnimal(vaca);  // Salida: Muuu, muuu!

//npx tsc ejercicio3.ts
//node ejercicio3.js
