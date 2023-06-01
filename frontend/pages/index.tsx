import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import IntroTemplate from '../src/components/_templates/Intro'
import LoadingSpinner from 'src/components/_shared/LoadingSpinner'

import { SectionContainer } from 'src/components/_shared/Layout/styles'

const IntroPage: NextPage = () => {
    const [characters, setCharacters] = useState<LickApi.ICharacter[]>([])
    const [clickedCharacter, setClickedCharacter] =
        useState<LickApi.ICharacter>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const router = useRouter()

    const getSingleCharacterID: (
        e: LickApi.ICharacter
    ) => Promise<LickApi.ICharacter | undefined> = async (
        e: LickApi.ICharacter
    ) => {
        try {
            setClickedCharacter(e)
            router.push(
                {
                    pathname: `/characters/${e.id}`,
                    query: { id: e.id },
                },
                `/characters/${e.id}`
            )
            return clickedCharacter
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        setIsLoading(true)
        const { data: characters } = await axios.get<LickApi.ICharacter[]>(
            '/api/characters'
        )
        setCharacters(characters)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SectionContainer>
            {!isLoading ? (
                <IntroTemplate
                    characters={characters}
                    loading={isLoading}
                    title="Rick and Morty FE Tech Test"
                    onClick={getSingleCharacterID}
                />
            ) : (
                <LoadingSpinner />
            )}
        </SectionContainer>
    )
}

export default IntroPage
