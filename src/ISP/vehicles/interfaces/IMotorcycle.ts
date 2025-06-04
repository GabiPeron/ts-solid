import IVehicle from "./IVehicle";

export default interface IMotorcycle extends IVehicle {
  configureMotorcycle(year: number, engine: string): boolean;
}