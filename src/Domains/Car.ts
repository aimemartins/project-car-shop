import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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

  // -------------------------------- DoorsQty
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getDoorsQty() {
    return this.doorsQty; 
  }

  // -------------------------------- DoorsQty
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty; 
  }
}

export default Car;