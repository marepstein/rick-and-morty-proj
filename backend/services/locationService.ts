export const locationService = ({
    rickAndMortyApiClient,
    id,
}: LickApi.LocationServiceCapabilities) => ({
    getLocation: async () => rickAndMortyApiClient.get(`location/${id}`),
})
