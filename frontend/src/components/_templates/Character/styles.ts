import styled from 'styled-components';
import { media } from 'styles/mediaQueries';

export const CharacterContainer = styled.section`
    height: 100%;
    margin-top: 1rem;
`;

export const CharacterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.tablet} {
        flex-direction: row;
    }
`;

export const CharacterInfoContianer = styled.div`
    margin-top: 1.5rem;
`;

export const CharacterInfoText = styled.p`
    font-size: 1rem;
`;


export const CharacterImage = styled.img`
    max-width: 15rem;
    max-height: 15rem;
    border-radius: 50%;
`;
