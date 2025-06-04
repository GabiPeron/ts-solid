import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private _type: string;

  constructor(model: string, year: number, type: string) {
    super(model, year);
    this._type = type;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  startVehicle(): Boolean {
    console.log(
      `Starting motorcycle: ${this.model} (${this.year}) of type ${this.type}`
    );

    return true;
  }
}
