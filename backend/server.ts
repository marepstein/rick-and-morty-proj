import * as morgan from 'morgan';
import * as dotenv from 'dotenv';

import app from './app';

dotenv.config();
const PORT = process.env.PORT || 8000;

app.use(morgan('combined'));

app.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});

export default app;
