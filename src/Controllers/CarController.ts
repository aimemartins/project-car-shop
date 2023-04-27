import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';
import NotFoundError from '../Errors/NotFoundError';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    if (!car.status) {
      car.status = false;
    }

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const result = await this.service.getAll();
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const result = await this.service.getById(id);
      if (!result) {
        throw new NotFoundError('Car not found');
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const car: ICar = this.req.body;
      const result = await this.service.update(id, car);
      if (!result) {
        throw new NotFoundError('Car not found');
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}