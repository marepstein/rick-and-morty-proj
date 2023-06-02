import * as express from 'express';
import { characterService } from '../services/characterService';
import { rickAndMortyApiClient } from '../providers/rickAndMortyApiClient';

const router = express.Router();

router.route('/characters').get(async (_, res: express.Response) => {
  const { data: ricks } = await characterService({
    rickAndMortyApiClient,
    name: 'rick',
  }).getCharacter();
  const rickArray = ricks.results;

  const { data: mortys } = await characterService({
    rickAndMortyApiClient,
    name: 'morty',
  }).getCharacter();
  const rickAndMortyArray = rickArray.concat(mortys.results);

  res.json(rickAndMortyArray);
});

export default router;
