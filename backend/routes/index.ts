import * as express from 'express';
import characterRoute from '@routes/characters';

const router = express.Router();

router.use('/v1', characterRoute);

export default router;
