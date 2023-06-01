import * as express from 'express';

import { rickAndMortyApiClient } from '../providers/rickAndMortyApiClient';
import { episodeService } from '../services/episodeService';
import { locationService } from '../services/locationService';
import { formatEpisodes } from '../utils/formatEpisodes';
import { formatLocation } from '../utils/formatLocation';
import { getIDFromUrl } from '../utils/getID';

const router = express.Router();

router.route('/character/:id')
 .get(async (req: express.Request, res: express.Response) => {
  // ----- get character -----

  const characterId = req.params.id;
  const { data: character } = await rickAndMortyApiClient.get(`character/${characterId}`);
  const { id, name, species, status, type, gender, avatar } = character;
  
  // ----- episode formatting -----

  const sortedCharacterEpisodes = character.episode?.sort();
  const firstEpisodeID = getIDFromUrl(sortedCharacterEpisodes.shift().split('/'));
  const lastEpisodeID = getIDFromUrl(sortedCharacterEpisodes.pop().split('/'));

  const { data: firstEpisode } = await episodeService({ rickAndMortyApiClient, id: firstEpisodeID }).getEpisode();
  const { data: lastEpisode } = await episodeService({ rickAndMortyApiClient, id: lastEpisodeID }).getEpisode();

  const firstEpisodeData: LickApi.IEpisode = formatEpisodes(firstEpisode);
  const lastEpisodeData: LickApi.IEpisode = formatEpisodes(lastEpisode);

  // ----- location formatting ------

  const locationID = getIDFromUrl(character.location.url.split('/'));
  const { data: location } = await locationService({ rickAndMortyApiClient, id: locationID }).getLocation();
  const locationData: LickApi.ILocation = formatLocation(location);


  res.json({ id, name, species, status, type, gender, avatar, episodes: [firstEpisodeData, lastEpisodeData], location: locationData});
});

export default router;