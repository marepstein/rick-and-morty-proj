import { AxiosInstance } from 'axios'

// Namespaces are not compilable.
// Do not import this file. Or import external dependencies.
// Use like so - const intro: LickApi.IIntro = {...};

/* eslint-disable */

declare global {
    namespace LickApi {
        type CharacterServiceCapabilities = {
            rickAndMortyApiClient: AxiosInstance
            name: string
        }

        type LocationServiceCapabilities = {
            rickAndMortyApiClient: AxiosInstance
            id: number
        }

        type EpisodeServiceCapabilities = {
            rickAndMortyApiClient: AxiosInstance
            id: number
        }

        interface IRickAndMortyApiCharactersResponse {
            info: {
                count: number
                next: string | null
                prev: string | null
                paes: number
            }
            results: ICharacter[]
        }

        interface ICharacterCore {
            id: number
            name: string
            status: string
            species: string
            gender: string
            avatar: string
        }

        interface ICharacter extends ICharacterCore {
            origin: ILocation
            location: ILocation
            episodes: IEpisode[]
        }

        interface ILocation {
            id: number
            name: string
            type: string
            noOfResidents: number
            dimension: string
        }

        interface IEpisode {
            id: number
            name: string
            airDate: string
            noOfCharacters: number
            episode: string
        }
    }
}
