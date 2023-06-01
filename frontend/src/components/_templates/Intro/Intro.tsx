import React from 'react';

import Meta from '../../_shared/Meta';
import CharacterCard from 'src/components/_shared/CharacterCard';

import { Wrapper } from './styles';

interface IIntroTemplateProps {
  rickCharacters: LickApi.ICharacter[];
  mortyCharacters: LickApi.ICharacter[];
  title: string;
  loading: boolean;
  onClick: (onClick) => void;
}

const IntroTemplate: React.FC<IIntroTemplateProps> = ({
  rickCharacters,
  // mortyCharacters,
  title,
  loading,
  onClick
}) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper>
        {rickCharacters.map((character) => (
          <CharacterCard character={character} loading={loading} onClick={onClick} />
        ))}
      </Wrapper>
    </>
  );
};

export default IntroTemplate;
