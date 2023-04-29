import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  // -------------------------------- id
  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id; 
  }

  // -------------------------------- model
  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model; 
  }

  // -------------------------------- year
  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year; 
  }

  // -------------------------------- color
  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color; 
  }

  // -------------------------------- status
  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
  
  // -------------------------------- buyValue
  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue; 
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