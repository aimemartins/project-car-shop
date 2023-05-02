import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { MotoInput, getAllOutput, motoOutput } from './Mocks/MotorcycleServiceMocks';

describe(
  '[ CAMADA SERVICE DE MOTORCYCLES ] - Verificando Service para o endpoint /motorcycles', 
  function () {
    describe('LISTAGEM DE MOTOS', function () {
      it('retorna a lista completa de motos', async function () {
        // arange
        sinon.stub(Model, 'find').resolves(getAllOutput);
        // act
        const service = new MotorcycleService();
        const result = await service.getAll();
        // assert
        expect(result).to.be.deep.equal(getAllOutput);
      });
    });

    describe('BUSCA UMA MOTO POR ID', function () {
      it(
        'retorna o Error "Invalid mongo id" caso seja passado um mongo id inválido', 
        async function () {
        // arrange
          sinon.stub(Model, 'findById').resolves(null);
          try {
          // act
            const service = new MotorcycleService();
            await service.getById('3');
          } catch (error) {
          // assert
            expect((error as Error).message).to.be.equal('Invalid mongo id');
          }
        },
      );
  
      it(
        'retorna o Error "Motorcycle not found" caso o mongo id não exista no banco', 
        async function () {
        // arrange
          sinon.stub(Model, 'findById').resolves(null);
          try {
          // act
            const service = new MotorcycleService();
            await service.getById('6348513f34c397abcad040b1');
          } catch (error) {
          // assert
            expect((error as Error).message).to.be.equal('Motorcycle not found');
          }
        },
      );
      
      it('retorna uma moto cadastrada no banco com id respectivo', async function () {
        // arrange
        sinon.stub(Model, 'findById').resolves(motoOutput);
        // act
        const service = new MotorcycleService();
        const result = await service.getById('6348513f34c397abcad040b2');
        // assert
        expect(result).to.deep.equal(motoOutput);
      });
    });

    describe('CADASTRO DE UMA MOTO', function () {
      it('retorna a moto cadastrada com sucesso', async function () {
        // arrange
        sinon.stub(Model, 'create').resolves(motoOutput);
        // act
        const service = new MotorcycleService();
        const result = await service.create(MotoInput);
        // assert
        expect(result).to.be.deep.equal(motoOutput);
      });
    });
    
    afterEach(function () {
      sinon.restore();
    });
  },
  
);