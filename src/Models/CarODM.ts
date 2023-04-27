import { Model, model, models, Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarSchema from '../Schemas/CarSchema';
import UnprocessableEntityError from '../Errors/UnprocessableEntityError';

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

  public async getAll(): Promise <ICar[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise <ICar | null> {
    if (!isValidObjectId(id)) {
      throw new UnprocessableEntityError('Invalid mongo id');
    }
    return this.model.findById(id);
  }
}