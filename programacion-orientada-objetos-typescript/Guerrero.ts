// Guerrero.ts
import { Personaje } from './Personaje';

export class Guerrero extends Personaje {
    private fuerza: number;

    constructor(nombre: string, salud: number, fuerza: number) {
        super(nombre, salud);
        this.fuerza = fuerza;
    }

    // Método específico de Guerrero
    public atacar(): void {
        console.log(`${this.nombre} ataca con una fuerza de ${this.fuerza}.`);
    }
}