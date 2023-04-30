import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;

  constructor(obj: IVehicle) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status;
    this.buyValue = obj.buyValue;
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
}