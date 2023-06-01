import React, { useEffect } from 'react';
import axios from 'axios';
import { NextRouter } from 'next/router';

interface IProps {
    router: NextRouter;
    id: number;
    setIsLoading: (isLoading: boolean) => void;
    setCharacter: (character: LickApi.ICharacter) => void;
    setLocationID: (id: number) => void;
}

export const fetchCharacterData: React.FC<IProps> = ({ router, id, setIsLoading, setCharacter, setLocationID }) => {
    useEffect(() => {
        const fetchData = async () => {
          if (router.isReady && id) {
            try {
              setIsLoading(true);
              const response = await axios.get(`/api/single-character/${id}`);
              const routeCharacter = response.data;
              setCharacter(routeCharacter);
              setLocationID(routeCharacter.location.url.slice(-1));
            } catch (error) {
              console.error('Error fetching character:', error);
            }
          }
        };
    
        fetchData();
        setIsLoading(false);
      }, [router, router.isReady, id]);

    return null;
    // had to do this to remove the react error 
    // by returning null in the function component, you're showing that this component doesn't render any JSX elements.
   
  };