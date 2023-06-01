import React from 'react';

import LoadingSpinner from 'src/components/_shared/LoadingSpinner';

import {
  CharacterContainer,
  CharacterSection,
  CharacterInfoContianer,
  CharacterImage,
  CharacterInfoText,
} from './styles';

interface ICharacterTemplateProps {
  character: LickApi.ICharacter;
  isLoading: boolean;
  location: LickApi.ILocation;
  firstEpisode: LickApi.IEpisode;
  lastEpisode: LickApi.IEpisode;
}

const CharacterTemplate = ({
  character,
  isLoading,
  location,
  firstEpisode,
  lastEpisode,
}: ICharacterTemplateProps) => {
  //     number of episodes
  //   // first appearance name and episode
  //     first appearance air date
  //     first appearance character count
  //     last appearance name and ep
  //     last air date
  //     last charcter count

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CharacterContainer>
          <CharacterSection>
            <CharacterImage src={character?.image} />
            <CharacterInfoContianer>
              <CharacterInfoText>Status: {character?.status}</CharacterInfoText>
              <CharacterInfoText>
                Origin: {character?.origin.name}
              </CharacterInfoText>
            </CharacterInfoContianer>
          </CharacterSection>
          {/* <CharacterSection> */}
          <h1>Location Details:</h1>
          <CharacterInfoText>Name: {character?.location.name}</CharacterInfoText>
          <CharacterInfoText>Type: {character?.location.type}</CharacterInfoText>
          <CharacterInfoText>
            Dimension: {character?.location.dimension}
          </CharacterInfoText>
          <CharacterInfoText>
            No. of Residents: {character?.location.noOfResidents}
          </CharacterInfoText>

          <h1>Episodes: {character?.episodes.length} </h1>
          <CharacterInfoText>
            First Appearance: {firstEpisode?.name} {firstEpisode?.episode}
          </CharacterInfoText>
          {/* <CharacterInfoText>First Appearance Air date: {firstEpisode?.air_date}</CharacterInfoText>
          <CharacterInfoText>First Appearance Character Count: {firstEpisode?.characters.length}</CharacterInfoText>
          <CharacterInfoText>
            Last Appearance: {lastEpisode?.name} {lastEpisode?.episode}
          </CharacterInfoText>
          <CharacterInfoText>Last Appearance Air date: {lastEpisode?.air_date}</CharacterInfoText>
          <CharacterInfoText>Last Appearance Character Count: {lastEpisode?.characters.length}</CharacterInfoText> */}


          {/* </CharacterSection> */}

          {/* <div>{character.name}</div>
        <div>{character.name}</div> */}
        </CharacterContainer>
      )}
    </>
  );
};

export default CharacterTemplate;
