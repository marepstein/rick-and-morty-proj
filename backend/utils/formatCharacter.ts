export const formatCharacter = (character) => {
  return {
    id: character.id,
    name: character.name,
    avatar: character.image,
    species: character.species,
    status: character.status,
    gender: character.gender,
    origin: character.origin,
    episodes: character.episode,
    location: character.location,
  };
};
