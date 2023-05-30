import * as express from 'express';
import { Express } from 'express';

import mortyRoute from './routes/morty-list';

const app: Express = express();

app.use('/alive-mortys', mortyRoute);

app.listen(8000, () => {
    console.log('running on 8000');
  });
  