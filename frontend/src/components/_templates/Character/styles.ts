import styled from 'styled-components';
import { media } from 'styles/mediaQueries';

export const CharacterContainer = styled.section`
    height: 100%;
    margin-top: 1rem;
`;

export const CharacterHeadSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.tablet} {
        flex-direction: row;
    }
`;

export const CharacterInfoContainer = styled.div`
    margin-top: 1.5rem;

    ${media.tablet} {
        margin-left: 1rem;
    }
`;

export const CharacterInfoText = styled.p`
    font-size: 1rem;
`;

export const CharacterInfoSection = styled.div`
    text-align: center;

    ${media.tablet} {
        text-align: left;
    }
`;


export const CharacterImage = styled.img`
    max-width: 100%;
    max-height: 10rem;
    border-radius: 50%;
`;
