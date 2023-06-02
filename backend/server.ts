import * as express from 'express';
import * as morgan from 'morgan';
import { Express } from 'express';

import routes from '@routes/index';

const app: Express = express();

app.use(morgan('combined'));

app.use(routes);

app.listen(8000, () => {
  console.log('running on 8000');
});

export default app;
