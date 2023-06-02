import * as express from 'express';
import axios from 'axios';

import { characterService } from '@services/characterService';
import { locationService } from '@services/locationService';

import { rickAndMortyApiClient } from '@lib/rickAndMortyApiClient';

import { formatEpisodes } from '@utils/formatEpisodes';
import { formatLocation } from '@utils/formatLocation';
import { getIDFromUrl } from '@utils/getID';

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

router.route('/characters/:id').get(async (req: express.Request, res: express.Response) => {
  // ----- get character -----

  const characterId = req.params.id;
  const { data: character } = await rickAndMortyApiClient.get(`character/${characterId}`);
  const { id, name, image, species, status, type, gender, origin, avatar, episode } = character;

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
    image,
    species,
    status,
    type,
    gender,
    origin,
    avatar,
    episodes: sortedEpisodes,
    location: locationData,
  });
});

export default router;