import * as express from 'express';
import * as morgan from 'morgan';
import { Express } from 'express';

// import mortyRoute from './routes/morty-list';
import rickAndMortyRoute from './routes/rick-and-morty';
import singleCharacterRoute from './routes/single-character';

const app: Express = express();

app.use(morgan('combined'));

// app.use(mortyRoute);
app.use(rickAndMortyRoute);
app.use(singleCharacterRoute);

app.listen(8000, () => {
  console.log('running on 8000');
});
