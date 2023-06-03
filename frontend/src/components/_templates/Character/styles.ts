import styled from 'styled-components';
import { media } from 'src/styles/mediaQueries';

export const CharacterContainer = styled.section`
  height: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet} {
    align-items: flex-start;
  }
  margin-top: 1.5rem;
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
  text-align: center;

  ${media.tablet} {
    margin-left: 1rem;
    text-align: left;
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
