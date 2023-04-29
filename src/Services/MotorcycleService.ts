import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motor: IMotorcycle | null): Motorcycle | null {
    if (motor) {
      return new Motorcycle(
        motor,
       
      );
    }
    return null;
  }

  public async create(motor: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    const newMotor = await motorODM.create(motor);
    return this.createMotorcycleDomain(newMotor);
  }

  public async getAll() {
    const motorODM = new MotorcycleODM();
    const cars = await motorODM.getAll();
    return cars.map((motor) => this.createMotorcycleDomain(motor));
  }

  public async getById(id: string) {
    const motorODM = new MotorcycleODM();
    const motorId = await motorODM.getById(id);
    return this.createMotorcycleDomain(motorId);
  }

  public async update(id: string, motor: IMotorcycle) {
    const motorODM = new MotorcycleODM();
    await motorODM.update(id, motor);
    const motorId = await motorODM.getById(id);
    return this.createMotorcycleDomain(motorId);
  }
}