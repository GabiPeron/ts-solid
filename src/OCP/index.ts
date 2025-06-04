import TypeVehicle from './TypeVehicle';
import Car from './vehicles/Car';
import Motorcycle from './vehicles/Motorcycle';
import Vehicle from './vehicles/Vehicle';

const type: TypeVehicle = TypeVehicle.CAR; // or TypeVehicle.MOTORCYCLE
let vehicle: Vehicle;

switch (type) {
  case TypeVehicle.CAR:
    vehicle = new Car('Toyota Camry', 2020, 4);
    break;
  // @ts-ignore
  case TypeVehicle.MOTORCYCLE:
    vehicle = new Motorcycle('Harley Davidson', 2019, 'Cruiser');
    break;
  default:
    vehicle = new Vehicle('Generic Vehicle', 2021);
    break;
}

console.log(vehicle.startVehicle());
