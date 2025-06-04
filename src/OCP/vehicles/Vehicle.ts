export default class Vehicle {
  protected _model: string;
  protected _year: number;

  constructor(model: string, year: number) {
    this._model = model;
    this._year = year;
  }

  get model(): string {
    return this._model;
  }
  get year(): number {
    return this._year;
  }
  set model(value: string) {
    this._model = value;
  }
  set year(value: number) {
    this._year = value;
  }

  startVehicle(): Boolean {
    console.log(`Starting vehicle: ${this._model} (${this._year})`);
    return true;
  }
}
