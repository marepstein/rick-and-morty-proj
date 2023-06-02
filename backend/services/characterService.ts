import axios from 'axios';

const getCharacter = async ({
  url = 'https://rickandmortyapi.com/api/character',
  params,
}: {
  url?: string;
  params: { name: string; status: string };
}): Promise<any[]> => {
  let characterArray: LickApi.ICharacter[] = [];

  const { data } = await axios.get(url, {
    params: params,
  });

  characterArray = [...characterArray, ...data.results];

  if (data.info.next) {
    const nextPageCharacter = await getCharacter({ url: data.info.next, params });
    characterArray = [...characterArray, ...nextPageCharacter];
  }

  return characterArray;
};

export const characterService = () => ({
  getCharacter,
});
