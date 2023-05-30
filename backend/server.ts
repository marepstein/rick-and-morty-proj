import * as express from 'express';
import * as morgan from 'morgan';
import { Express } from 'express';

import mortyRoute from './routes/morty-list';
import rickRoute from './routes/rick-list';

const app: Express = express();

app.use(morgan('combined'))

app.use(mortyRoute);
app.use(rickRoute);

app.listen(8000, () => {
    console.log('running on 8000');
  });
  