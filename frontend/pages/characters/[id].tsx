import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterTemplate from '../../src/components/_templates/Character';

// import { fetchLocation } from 'src/helpers/fetchLocation';

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<LickApi.ICharacter>();
  const [locationID, setLocationID] = useState<number>();
  const [location, setLocation] = useState<LickApi.ILocation>();
  const [episodes, setEpisodes] = useState([]);
  const [firstEpisode, setFirstEpisode] = useState<LickApi.IEpisode>();
  const [lastEpisode, setLastEpisode] = useState<LickApi.IEpisode>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //   fetchLocation(locationID);
    // }, [locationID]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (locationID) {
//         try {
//           const response = await axios.get(`/api/location/${locationID}`);
//           const routeLocation = response.data;
//           setLocation(routeLocation);
//           return;
//         } catch (error) {
//           console.error('Error fetching character:', error);
//         }
//       }
//     };

//     fetchData();
//   }, [locationID, setLocation]);

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady && id) {
        try {
          setIsLoading(true);
          const response = await axios.get(`/api/single-character/${id}`);
          const routeCharacter = response.data;
          setCharacter(routeCharacter);
          setEpisodes(routeCharacter.episode);
          setLocationID(routeCharacter.location.url.slice(-1));
          // set episodeID / find the episodes then pass to other function
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      }
    };

    fetchData();
    setIsLoading(false);
  }, [router, router.isReady, id]);


    //   const fetchEpisodes = async () => {
    //     if (character) {
    //         const episodeArray = character.episode;
    //         setEpisodes(episodeArray);

    //         if (episodes && episodeArray.length) {
    //             const sortedCharacterEpisodes = character.episode?.sort();
  
    //             const firstEpisodeArray = sortedCharacterEpisodes.shift().split('/');
    //             const firstEpisodeID = firstEpisodeArray[firstEpisodeArray?.length - 1];

    //             const lastEpisodeArray =  sortedCharacterEpisodes.pop().split('/');
    //             const lastEpisodeID = lastEpisodeArray[lastEpisodeArray?.length - 1];
                
    //             const firstEpisodeResponse = await axios.get(`/api/episode/${firstEpisodeID}`);
    //             setFirstEpisode(firstEpisodeResponse.data);
    
                            
    //             const lastEpisodeResponse = await axios.get(`/api/episode/${lastEpisodeID}`);
    //             setLastEpisode(lastEpisodeResponse.data);
    //         }
    //     }
    //   }

    // useEffect(() => {
    //   fetchEpisodes();
    // }, [character])

  return (
    <CharacterTemplate
      character={character}
      location={location}
      isLoading={isLoading}
      firstEpisode={firstEpisode}
      lastEpisode={lastEpisode}
    />
  );
};

export default CharacterPage;
