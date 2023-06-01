// interface IProps {
//     character: LickApi.ICharacter;
// }

export const formatEpisodes = (episode) => {
    return {
        id: episode.id,
        name: episode.name,
        airDate: episode.air_date,
        noOfCharacters: episode.characters.length,
        episode: episode.episode
    }
}