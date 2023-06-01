import styled from 'styled-components';
import { media } from '../../../../styles/mediaQueries';

const StyledSpinner = styled.svg`
    animation: rotate 2s linear infinite;
    width: 5rem;
    height: 5rem;
    margin-top: 10rem;
    border-top: 4px solid #EAEAEA;
    border-right: 4px solid #EAEAEA;
    border-bottom: 4px solid #EAEAEA;
    border-left: 4px solid #000;
    border-radius: 50%;

    ${media.tablet} {
        margin-top: 20rem;
    }

    & .path {
        stroke: #5652bf;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
`;

const LoadingSpinner = () => {
    return (
        <>
            <StyledSpinner />
        </>
    );
};

export default LoadingSpinner;