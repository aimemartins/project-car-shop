import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        car,
       
      );
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const carIdExist = await carODM.getById(id);
    return this.createCarDomain(carIdExist);
  }

  public async update(id: string, car: ICar) {
    const carODM = new CarODM();
    await carODM.update(id, car);
    const carIdExist2 = await carODM.getById(id);
    return this.createCarDomain(carIdExist2);
  }
}