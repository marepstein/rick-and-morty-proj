import React from 'react';

import Meta from '../../_shared/Meta';
import CharacterCard from 'src/components/_shared/CharacterCard';

import { Wrapper } from './styles';

interface IIntroTemplateProps {
  characters: LickApi.IListCharacter[];
  title: string;
  loading: boolean;
  onClick: (onClick) => void;
}

const IntroTemplate: React.FC<IIntroTemplateProps> = ({ characters, title, loading, onClick }) => {
  return (
    <>
      <Meta title={title} />
      <Wrapper>
        {characters.map((character) => (
          <CharacterCard character={character} loading={loading} onClick={onClick} key={character.id} />
        ))}
      </Wrapper>
    </>
  );
};

export default IntroTemplate;
