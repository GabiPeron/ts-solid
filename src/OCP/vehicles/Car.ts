import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private _numberOfDoors: number;

  constructor(model: string, year: number, numberOfDoors: number) {
    super(model, year);
    this._numberOfDoors = numberOfDoors;
  }

  get numberOfDoors(): number {
    return this._numberOfDoors;
  }

  set numberOfDoors(value: number) {
    this._numberOfDoors = value;
  }

  startVehicle(): Boolean {
    console.log(
      `Starting car: ${this.model} (${this.year}) with ${this.numberOfDoors} doors`
    );
    return true;
  }
}
