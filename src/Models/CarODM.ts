import { Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarSchema from '../Schemas/CarSchema';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = CarSchema;
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise <ICar> {
    return this.model.create({ ...car });
  }
}