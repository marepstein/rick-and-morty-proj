export const locationService = ({ rickAndMortyApiClient, id }: LickApi.LocationServiceCapabilities) => ({
  getLocation: async () => await rickAndMortyApiClient.get(`location/${id}`),
});
