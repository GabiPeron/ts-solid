import IVehicle from "./IVehicle";

export default interface ICar extends IVehicle {
  configureCar(year: number, engine: string, seats: number): boolean;
}