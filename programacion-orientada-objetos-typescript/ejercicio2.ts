// index.ts
import { Guerrero } from './Guerrero';
import { Mago } from './Mago';

// Crear un objeto de la clase Guerrero
const guerrero = new Guerrero("Arthas", 100, 30);
guerrero.mostrarInfo();
guerrero.atacar();
guerrero.recibirDanio(20);
console.log("");

// Crear un objeto de la clase Mago
const mago = new Mago("Gandalf", 80, 50);
mago.mostrarInfo();
mago.lanzarHechizo();
mago.lanzarHechizo();
mago.recibirDanio(30);

//npx tsc ejercicio2.ts
//node ejercicio2.js