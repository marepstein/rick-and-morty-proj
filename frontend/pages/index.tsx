import { NextPage, GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

import IntroTemplate from '../src/components/_templates/Intro';
import LoadingSpinner from 'src/components/_shared/LoadingSpinner';

const IntroPage: NextPage = () => {
  const [rickCharacters, setRickCharacters] = useState<LickApi.ICharacter[]>(
    []
  );
  const [mortyCharacters, setMortyCharacters] = useState<LickApi.ICharacter[]>(
    []
  );
  const [clickedCharacter, setClickedCharacter] =
    useState<LickApi.ICharacter>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const getSingleCharacterID: (
    e: LickApi.ICharacter
  ) => Promise<LickApi.ICharacter | undefined> = async (
    e: LickApi.ICharacter
  ) => {
    try {
      setClickedCharacter(e);
      router.push(
        {
          pathname: `/characters/${e.id}`,
          query: { id: e.id },
        },
        `/characters/${e.id}`
      );
      return clickedCharacter;
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    const { data: rickCharacters } = await axios.get<LickApi.ICharacter[]>(
      '/api/rick-list'
    );
    const { data: mortyCharacters } = await axios.get<LickApi.ICharacter[]>(
      '/api/morty-list'
    );
    setRickCharacters(rickCharacters);
    setMortyCharacters(mortyCharacters);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // <AppContainer>
    <>
      {!isLoading ? (
        <IntroTemplate
          rickCharacters={rickCharacters}
          mortyCharacters={mortyCharacters}
          loading={isLoading}
          title='Rick and Morty FE Tech Test'
          onClick={getSingleCharacterID}
        />
      ) : (
        <LoadingSpinner />
      )}
    </>
    // </AppContainer>
  );
};

export default IntroPage;

// export const getServerSideProps: GetServerSideProps = async (context) => {

//   const res =  await fetch('http://localhost:8000/api/rick-list');
//   const rickCharacters = await res.json();
//   console.log({ rickCharacters });

//   return { props: { rickCharacters } };
// };

// this runs before any stuff is rendered i.e. before the pages/api stuff exists
// you still do need the pages/api stuff for the client side
