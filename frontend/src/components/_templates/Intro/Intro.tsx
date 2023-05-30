import React from 'react';
import styled from 'styled-components';

import { media } from 'styles/mediaQueries';

import Meta from '../../_shared/Meta';
import CharacterCard from 'src/components/_shared/CharacterCard';

interface IIntroTemplateProps {
  rickCharacters: LickApi.ICharacterCore[];
  mortyCharacters: LickApi.ICharacterCore[];
  title: string;
}

const IntroTemplate: React.FC<IIntroTemplateProps> = ({
  rickCharacters,
  mortyCharacters,
  title,
}) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper>
        {rickCharacters.map((character) => (
          <CharacterCard character={character} />
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px;

  ${media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.desktop} {
    max-width: 1360px;
    grid-template-columns: repeat(6, 1fr);
  }
`;

const IntroImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const IntroCopy = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: white;
`;

export default IntroTemplate;
