import React from 'react'

import { CardContainer, CardImage, CardInfoContainer, CardInfo, CardButton } from './styles'

interface ICharacterCardProps {
    character: LickApi.ICharacter
    loading: boolean
    onClick: (onClick) => void
}

const CharacterCard = ({
    character,
    loading,
    onClick,
}: ICharacterCardProps) => {
    return (
        <CardContainer onClick={() => onClick(character)}>
            {loading && 'Loading...'}
            <CardImage src={character.image} />
            <CardInfoContainer>
                <CardInfo>Name: {character.name}</CardInfo>
                <CardInfo>Gender: {character.gender}</CardInfo>
                <CardInfo>Species: {character.species}</CardInfo>
            </CardInfoContainer>
            <CardButton onClick={() => onClick(character)}>View Profile</CardButton>
        </CardContainer>
    )
}

export default CharacterCard
