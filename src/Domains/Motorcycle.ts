import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  // -------------------------------- Category
  public setCategory(category: 'Street' | 'Custom' | 'Trail') {
    this.category = category;
  }

  public getCategory() {
    return this.category; 
  }

  // -------------------------------- Engine 
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getEngineCapacity() {
    return this.engineCapacity; 
  }
}

export default Motorcycle;