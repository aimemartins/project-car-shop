import { Router } from 'express';
import CarController from '../Controllers/CarController';
// import CarODM from '../Models/CarODM';

const routes = Router();

// const modelODM = new CarODM();
// const service = 

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());
routes.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());
routes.put('/cars/:id', (req, res, next) => new CarController(req, res, next).update());
export default routes;