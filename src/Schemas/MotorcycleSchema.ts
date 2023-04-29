import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

const motorSchema = new Schema<IMotorcycle>({
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: { type: Boolean, required: false },
  buyValue: { type: Number, required: true },
  category: { type: String, required: true },
  engineCapacity: { type: Number, required: true },
});

export default motorSchema;