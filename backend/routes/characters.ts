import * as express from 'express';
import axios from 'axios';

import { locationService } from '@services/locationService';
import { characterService } from '@services/characterService';

import { rickAndMortyApiClient } from '@lib/rickAndMortyApiClient';

import { formatEpisodes } from '@utils/formatEpisodes';
import { formatLocation } from '@utils/formatLocation';
import { getIDFromUrl } from '@utils/getID';
import { formatCharacter } from '@utils/formatCharacter';

const router = express.Router();

router.route('/characters').get(async (_, res: express.Response) => {
  const rickArray = await characterService().getCharacter({ params: { name: 'rick', status: 'alive' } });
  const mortyArray = await characterService().getCharacter({ params: { name: 'morty', status: 'alive' } });

  const characterArray = rickArray.concat(mortyArray);
  const formattedCharacters = characterArray.map(formatCharacter);
  res.json(formattedCharacters);
});

router.route('/characters/:id').get(async (req: express.Request, res: express.Response) => {
  // ----- get character -----

  const characterId = req.params.id;
  const { data: character } = await rickAndMortyApiClient.get(`character/${characterId}`);
  const { id, name, image, species, status, gender, origin, episode } = character;

  // ----- episode formatting -----

  const newEpisodesArray: LickApi.IEpisode[] = [];

  await Promise.all(
    episode.map(async (ep: string) => {
      const { data: episode } = await axios.get(ep);
      const formattedEpisode = formatEpisodes(episode);
      newEpisodesArray.push(formattedEpisode);
    }),
  );

  const sortedEpisodes: LickApi.IEpisode[] = newEpisodesArray.sort((a, b) => a.id - b.id);

  // ----- location formatting ------

  const locationID: number = getIDFromUrl(character.location.url.split('/'));
  const { data: location } = await locationService({
    rickAndMortyApiClient,
    id: locationID,
  }).getLocation();
  const locationData: LickApi.ILocation = formatLocation(location);

  res.json({
    id,
    name,
    avatar: image,
    species,
    status,
    gender,
    origin,
    episodes: sortedEpisodes,
    location: locationData,
  });
});

export default router;
