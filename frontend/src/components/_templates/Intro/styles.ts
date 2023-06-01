import styled from 'styled-components'

import { media } from 'styles/mediaQueries'

export const Wrapper = styled.div`
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
`

export const IntroImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 20px;
`

export const IntroCopy = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: white;
`
