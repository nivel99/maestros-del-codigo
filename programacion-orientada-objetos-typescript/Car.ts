// Car.ts
export class Car {
    private make: string;
    private model: string;
    private year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getMake(): string {
        return this.make;
    }

    public setMake(make: string): void {
        this.make = make;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public displayInfo(): void {
        console.log(`Car: ${this.make} ${this.model} (${this.year})`);
    }
}
