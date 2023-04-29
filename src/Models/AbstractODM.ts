import {
  isValidObjectId,
  Model,
  models,
  Schema,
  UpdateQuery,
  model,
} from 'mongoose';
import UnprocessableEntityError from '../Errors/UnprocessableEntityError';

export default abstract class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise <T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise <T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise <T | null> {
    if (!isValidObjectId(id)) {
      throw new UnprocessableEntityError('Invalid mongo id');
    }
    return this.model.findById(id);
  }

  public async update(_id: string, obj: Partial<T>): Promise <T | null> {
    if (!isValidObjectId(_id)) {
      throw new UnprocessableEntityError('Invalid mongo id');
    }
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
    );
  }
}