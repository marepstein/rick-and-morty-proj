import { NextPage, GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';

import IntroTemplate from '../src/components/_templates/Intro';

const IntroPage: NextPage = () => {
  const [rickCharacters, setRickCharacters] = useState<LickApi.ICharacter[]>(
    []
  );
  const [mortyCharacters, setMortyCharacters] = useState<LickApi.ICharacter[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    <IntroTemplate
      rickCharacters={rickCharacters}
      mortyCharacters={mortyCharacters}
      loading={isLoading}
      title="Rick and Morty FE Tech Test"
    />
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
