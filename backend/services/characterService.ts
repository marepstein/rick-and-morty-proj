export const characterService = ({
    rickAndMortyApiClient,
    name,
}: LickApi.CharacterServiceCapabilities) => ({
    getCharacter: async () =>
        rickAndMortyApiClient.get<LickApi.IRickAndMortyApiCharactersResponse>(
            'character',
            {
                params: { name: name, status: 'alive' },
            }
        ),
})
