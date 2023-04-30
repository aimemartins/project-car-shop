import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService, {} from '../Services/MotorcycleService';
import NotFoundError from '../Errors/NotFoundError';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motor: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
    if (!motor.status) {
      motor.status = false;
    }

    try {
      const newMotor = await this.service.create(motor);
      return this.res.status(201).json(newMotor);
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
        throw new NotFoundError('Motorcycle not found');
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const car: IMotorcycle = this.req.body;
      const result = await this.service.update(id, car);
      if (!result) {
        throw new NotFoundError('Motorcycle not found');
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}