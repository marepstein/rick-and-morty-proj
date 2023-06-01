import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import LoadingSpinner from 'src/components/_shared/LoadingSpinner';
import CharacterTemplate from '../../src/components/_templates/Character';

const CharacterPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState<LickApi.ICharacter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (router.isReady && id) {
        try {
          setIsLoading(true);
          const response = await axios.get(`/api/single-character/${id}`);
          const routeCharacter = response.data;
          setCharacter(routeCharacter);
        } catch (error) {
          console.error('Error fetching character:', error);
        }
      }
    };

    fetchData();
    setIsLoading(false);
  }, [router, router.isReady, id]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CharacterTemplate character={character} isLoading={isLoading} />
      )}
    </>
  );
};

export default CharacterPage;
