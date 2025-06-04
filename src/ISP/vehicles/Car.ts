import ICar from "./interfaces/ICar";

export default class Car implements ICar {
  private year: number;
  private engine: string;
  private seats: number;

  constructor() {
    this.year = 0;
    this.engine = '';
    this.seats = 0;
  }

  start(): boolean {
    console.log(`Car started with engine: ${this.engine}`);
    return true;
  }

  configureCar(year: number, engine: string, seats: number): boolean {
    this.year = year;
    this.engine = engine;
    this.seats = seats;
    console.log(`Car configured: ${year} ${engine} with ${seats} seats`);
    return true;
  }
}