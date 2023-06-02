import axios from 'axios';

export const rickAndMortyApiClient = axios.create({
  baseURL: `${process.env.API_URL}`,
});
