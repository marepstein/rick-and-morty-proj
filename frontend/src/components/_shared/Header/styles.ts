import styled from 'styled-components'
import { media } from 'styles/mediaQueries'

export const HeaderContainer = styled.div`
    height: 100%;
    max-height: 5rem;
    text-align: center;

    ${media.tablet} {
        text-align: left;
    }

`
