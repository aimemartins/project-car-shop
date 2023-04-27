import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
// import Car from '../../../src/Domains/Car';
import { getAllOutput, carOutput, carInput } from './Mocks/CarServiceMocks';

describe('[ CAMADA SERVICE ] - Verificando Service para o endpoint /cars', function () {
  describe('LISTAGEM DE CARROS', function () {
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

  describe('BUSCA UM CARRO POR ID', function () {
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

  describe('CADASTRO DE CARRO', function () {
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

  afterEach(function () {
    sinon.restore();
  });
});
