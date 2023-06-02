import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`

export const CardImage = styled.img`
    width: 100%;
`

export const CardInfoContainer = styled.div`
    min-height: 90px;
    width: 100%;
    padding: 0;
    text-align: left;
`

export const CardInfo = styled.p`
    font-size: 0.75rem;
    margin: 0.5rem 0;
`

export const CardButton = styled.button`
    width: 100%;
    background: none;
    border: solid 1px black;
    padding: 0.5rem;

    &:hover {
        border: solid 2px black;
        transition: border-width 0.1s linear;
        margin: -1px; 
    }
`
