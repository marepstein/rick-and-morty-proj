export const characterService = ({ rickAndMortyApiClient }: LickApi.CharacterServiceCapabilities) => ({
    getAliveRicks: async () => rickAndMortyApiClient.get<LickApi.IRickAndMortyApiCharactersResponse>('character', {
        params: { name: 'rick', status: 'alive' }
    }),
    getAliveMortys: async () => rickAndMortyApiClient.get<LickApi.IRickAndMortyApiCharactersResponse>('character', {
        params: { name: 'morty', status: 'alive' }
    })
});