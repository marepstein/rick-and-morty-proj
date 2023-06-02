export const characterService = ({ rickAndMortyApiClient, name }: LickApi.CharacterServiceCapabilities) => ({
  getCharacter: async () =>
    await rickAndMortyApiClient.get<LickApi.IRickAndMortyApiCharactersResponse>('character', {
      params: { name, status: 'alive' },
    }),
});
