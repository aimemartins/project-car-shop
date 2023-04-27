import express from 'express';
import routes from './Routes/Routes';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

export default app;
