import IMotorcycle from "./interfaces/IMotorcycle";

export default class Motorcycle implements IMotorcycle {
  private year: number;
  private engine: string;

  constructor() {
    this.year = 0;
    this.engine = '';
  }

  start(): boolean {
    console.log(`Motorcycle started with engine: ${this.engine}`);
    return true;
  }

  configureMotorcycle(year: number, engine: string): boolean {
    this.year = year;
    this.engine = engine;
    console.log(`Motorcycle configured: ${year} ${engine}`);
    return true;
  }
}