import IMotorcycle from '../Interfaces/IMotorcycle';
import motorSchema from '../Schemas/MotorcycleSchema';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = motorSchema;
    super(schema, 'Motorcycle');
  }
}

export default MotorcycleODM;