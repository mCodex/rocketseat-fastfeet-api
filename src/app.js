import express from 'express';
import helmet from 'helmet';

import routes from './routes';

import './database';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(routes);

export default app;
