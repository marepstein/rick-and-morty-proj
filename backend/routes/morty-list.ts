import * as express from 'express';
import { characterService } from '../services/characterService';
import { rickAndMortyApiClient } from '../providers/rickAndMortyApiClient';


interface AliveMortysResponse {
    data: LickApi.IRickAndMortyApiCharactersResponse; // Replace `any` with the actual type of `data`
  }

const router = express.Router();

router.route('/alive-mortys')
 .get(async (res: Response) => {
  const { data }: AliveMortysResponse = await characterService({
    rickAndMortyApiClient,
  }).getAliveMortys();
  res.json({ data });
});

export default router;