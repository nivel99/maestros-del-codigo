// Personaje.ts
export class Personaje {
    // Propiedades comunes a todos los personajes
    protected nombre: string;
    protected salud: number;

    // Constructor para inicializar los atributos
    constructor(nombre: string, salud: number) {
        this.nombre = nombre;
        this.salud = salud;
    }

    // Método común para mostrar información del personaje
    public mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Salud: ${this.salud}`);
    }

    // Método para recibir daño
    public recibirDanio(danio: number): void {
        this.salud -= danio;
        console.log(`${this.nombre} ha recibido ${danio} de daño.`);
        if (this.salud <= 0) {
            console.log(`${this.nombre} ha sido derrotado.`);
        }
    }
}