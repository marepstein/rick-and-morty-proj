import * as express from 'express';
import { characterService } from '../services/characterService';
import { rickAndMortyApiClient } from '../providers/rickAndMortyApiClient';

const router = express.Router();

router.route('/alive-ricks')
 .get(async (_, res: express.Response) => {
  const { data } = await characterService({
    rickAndMortyApiClient,
  }).getAliveRicks();
  res.json(data);
});

export default router;