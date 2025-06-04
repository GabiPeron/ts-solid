import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const car = new Car();
car.configureCar(2023, "V8", 5);
car.start();

const motorcycle = new Motorcycle();
motorcycle.configureMotorcycle(2023, "600cc");
motorcycle.start();
