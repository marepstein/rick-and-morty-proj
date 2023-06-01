export const episodeService = ({ rickAndMortyApiClient, id }: LickApi.EpisodeServiceCapabilities) => ({
    getEpisode: async () => rickAndMortyApiClient.get(`episode/${id}`),
});

