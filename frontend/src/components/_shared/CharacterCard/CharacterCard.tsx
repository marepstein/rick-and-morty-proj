import React from 'react';
import {
  CardContainer,
  CardImage,
  CardInfoContainer,
  CardInfo,
} from './styles';

interface ICharacterCardProps {
  image: string;
  name: string;
  gender: string;
  species: string;
}

const CharacterCard = ({ character, loading }) => {
  return (
    <CardContainer>
      {loading && 'Loading...'}
      <CardImage src={character.image} />
      <CardInfoContainer>
        <CardInfo>Name: {character.name}</CardInfo>
        <CardInfo>Gender: {character.gender}</CardInfo>
        <CardInfo>Species: {character.species}</CardInfo>
      </CardInfoContainer>
    </CardContainer>
  );
};

export default CharacterCard;

// picture, name, gender, species etc
