import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
// import Car from '../../../src/Domains/Car';
import { 
  getAllOutput, 
  carOutput, 
  carInput, 
  carUpdateInput, 
  updateOutput } from './Mocks/CarServiceMocks';

describe('[ 1) CAMADA SERVICE DE CARS ] - Verificando Service para o endpoint /cars', function () {
  describe('1.1) LISTAGEM DE CARROS', function () {
    it('retorna a lista completa de carros', async function () {
      // arrange
      sinon.stub(Model, 'find').resolves(getAllOutput);
      // act
      const service = new CarService();
      const result = await service.getAll();
      // assert
      expect(result).to.be.deep.equal(getAllOutput);
    });
  });

  describe('1.2) BUSCA UM CARRO POR ID', function () {
    it(
      'retorna o Error "Invalid mongo id" caso seja passado um mongo id inválido', 
      async function () {
      // arrange
        sinon.stub(Model, 'findById').resolves(null);
        try {
        // act
          const service = new CarService();
          await service.getById('3');
        } catch (error) {
        // assert
          expect((error as Error).message).to.be.equal('Invalid mongo id');
        }
      },
    );

    it('retorna o Error "Car not found" caso o mongo id não exista no banco', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(null);
      try {
        // act
        const service = new CarService();
        await service.getById('644ae1e4cdec39391bb12f60');
      } catch (error) {
        // assert
        expect((error as Error).message).to.be.equal('Car not found');
      }
    });
    
    it('retorna um carro cadastrado no banco com id respectivo', async function () {
      // arrange
      sinon.stub(Model, 'findById').resolves(carOutput);
      // act
      const service = new CarService();
      const result = await service.getById('6348513f34c397abcad040b2');
      // assert
      expect(result).to.deep.equal(carOutput);
    });
  });

  describe('1.3) CADASTRO DE CARRO', function () {
    it('retorna o carro cadastrado com sucesso', async function () {
      // arrange
      sinon.stub(Model, 'create').resolves(carOutput);
      // act
      const service = new CarService();
      const result = await service.create(carInput);
      // assert
      expect(result).to.be.deep.equal(carOutput);
    });
  });

  describe('1.4) ATUALIZAÇÃO DE CARRO', function () {
    it('retorna o carro atualizado com sucesso', async function () { 
      // arrange
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updateOutput);
      sinon.stub(Model, 'findById').resolves(updateOutput);
      // act
      const service = new CarService();
      const result = await service.update('6348513f34c397abcad040b2', carUpdateInput);
      
      // assert
      expect(result).to.be.deep.equal(updateOutput);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
