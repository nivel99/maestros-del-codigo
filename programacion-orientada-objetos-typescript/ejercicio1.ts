// index.ts
import { Car } from './Car';

// Crear un objeto de la clase Car
const myCar = new Car("Toyota", "Corolla", 2022);

// Usar los métodos de la clase
console.log(myCar.getMake()); // Salida: Toyota

myCar.setModel("Camry");
console.log(myCar.getModel()); // Salida: Camry

myCar.displayInfo(); // Salida: Car: Toyota Camry (2022)

//npx tsc ejercicio1.ts
//node ejercicio1.js