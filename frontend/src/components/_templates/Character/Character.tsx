import LoadingSpinner from 'src/components/_shared/LoadingSpinner';
import React from 'react';

import {
  CharacterContainer,
  CharacterHeadSection,
  CharacterInfoContainer,
  CharacterImage,
  CharacterInfoText,
  CharacterInfoSection,
} from './styles';

interface ICharacterTemplateProps {
  character: LickApi.ICharacter;
  isLoading: boolean;
}

const CharacterTemplate = ({ character, isLoading }: ICharacterTemplateProps) => {
  const firstEpisode = character?.episodes.length > 1 ? character.episodes[0] : character?.episodes[0];
  const lastEpisode =
    character?.episodes.length > 1 ? character.episodes[character.episodes.length - 1] : character?.episodes[0];

  return (
    <CharacterContainer>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CharacterHeadSection>
            <CharacterImage src={character?.avatar} />
            <CharacterInfoContainer>
              <h1>{character?.name}</h1>
              <CharacterInfoText>Status: {character?.status}</CharacterInfoText>
              <CharacterInfoText>Origin: {character?.origin.name}</CharacterInfoText>
            </CharacterInfoContainer>
          </CharacterHeadSection>
          <CharacterInfoSection>
            <h1>Location Details:</h1>
            <CharacterInfoText>Name: {character?.location.name}</CharacterInfoText>
            <CharacterInfoText>Type: {character?.location.type}</CharacterInfoText>
            <CharacterInfoText>Dimension: {character?.location.dimension}</CharacterInfoText>
            <CharacterInfoText>No. of Residents: {character?.location.noOfResidents}</CharacterInfoText>

            <h1>Episodes: {character?.episodes.length} </h1>
            <CharacterInfoText>
              First Appearance: {firstEpisode?.name} {firstEpisode?.episode}
            </CharacterInfoText>
            <CharacterInfoText>First Appearance Air date: {firstEpisode?.airDate}</CharacterInfoText>
            <CharacterInfoText>First Appearance Character Count: {firstEpisode?.noOfCharacters}</CharacterInfoText>
            <CharacterInfoText>
              Last Appearance: {lastEpisode?.name} {lastEpisode?.episode}
            </CharacterInfoText>
            <CharacterInfoText>Last Appearance Air date: {lastEpisode?.airDate}</CharacterInfoText>
            <CharacterInfoText>Last Appearance Character Count: {lastEpisode?.noOfCharacters}</CharacterInfoText>
          </CharacterInfoSection>
        </>
      )}
    </CharacterContainer>
  );
};

export default CharacterTemplate;
