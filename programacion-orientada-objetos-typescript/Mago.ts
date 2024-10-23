// Mago.ts
import { Personaje } from './Personaje';

export class Mago extends Personaje {
    private mana: number;

    constructor(nombre: string, salud: number, mana: number) {
        super(nombre, salud);
        this.mana = mana;
    }

    // Método específico de Mago
    public lanzarHechizo(): void {
        if (this.mana > 0) {
            console.log(`${this.nombre} lanza un hechizo.`);
            this.mana -= 10;
        } else {
            console.log(`${this.nombre} no tiene suficiente mana para lanzar un hechizo.`);
        }
    }
}