// Definir la interfaz IAnimal
interface IAnimal {
    comer(): void;
    moverse(): void;
    hacerSonido(): void;
}

// Clase Perro que implementa la interfaz IAnimal
class Perro implements IAnimal {
    comer(): void {
        console.log("El perro está comiendo.");
    }

    moverse(): void {
        console.log("El perro está corriendo.");
    }

    hacerSonido(): void {
        console.log("Guau!");
    }
}

// Clase Pajaro que implementa la interfaz IAnimal
class Pajaro implements IAnimal {
    comer(): void {
        console.log("El pájaro está picoteando.");
    }

    moverse(): void {
        console.log("El pájaro está volando.");
    }

    hacerSonido(): void {
        console.log("Pio, pio!");
    }
}

// Función para crear un zoológico
function crearZoologico(animales: IAnimal[]): void {
    for (let animal of animales) {
        animal.comer();
        animal.moverse();
        animal.hacerSonido();
        console.log("\n");
    }
}

// Crear un array de animales
const zoo: IAnimal[] = [
    new Perro(),
    new Pajaro(),
    new Perro(), // Podemos agregar más animales
];

// Llamar a la función para crear el zoológico
crearZoologico(zoo);

//Para ejecutar primero es npx tsc ejercicio1.ts luego node ejercicio1.js