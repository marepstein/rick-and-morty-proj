import * as morgan from 'morgan';
import app from './app';

app.use(morgan('combined'));

app.listen(8000, () => {
  console.log('running on 8000');
});

export default app;
