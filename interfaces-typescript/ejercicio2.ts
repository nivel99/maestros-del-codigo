// Definición de la interfaz Figura
interface Figura {
    perimetro(): number;
    area(): number;
}

// Clase Triangulo que implementa la interfaz Figura
class Triangulo implements Figura {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    perimetro(): number {
        return this.lado * 3;
    }

    area(): number {
        return (this.lado * this.lado * Math.sqrt(3)) / 4;
    }
}

// Clase Cuadrado que implementa la interfaz Figura
class Cuadrado implements Figura {
    private lado: number;

    constructor(lado: number) {
        this.lado = lado;
    }

    perimetro(): number {
        return this.lado * 4;
    }

    area(): number {
        return this.lado * this.lado;
    }
}

// Código principal
const triangulo = new Triangulo(3);
const cuadrado = new Cuadrado(4);

console.log("- Usamos las interfaces -");
console.log(`Perímetro del cuadrado: ${cuadrado.perimetro()}`);
console.log(`Perímetro del triángulo: ${triangulo.perimetro()}`);
console.log(`Área del cuadrado: ${cuadrado.area()}`);
console.log(`Área del triángulo: ${triangulo.area()}`);

//Para ejecutar primero es npx tsc ejercicio2.ts luego node ejercicio2.js