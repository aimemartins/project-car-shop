// import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

export const MotoInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
  
};

const output1 = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};
const output2 = {
  id: '6348513f34c397abcad040b3',
  model: 'Honda Cb 700f Hornet',
  year: 2006,
  color: 'White',
  status: true,
  buyValue: 40.000,
  category: 'Street',
  engineCapacity: 600,
};

export const getAllOutput = [output1, output2];
export const motoOutput = output1;