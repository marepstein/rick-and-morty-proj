import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface IProps {
    locationID: number;
    setLocation: (location: LickApi.ILocation) => void;
    // ILocation = the argument that is passed 
    // returns void as its not a function but is state 
}

export const fetchLocation: React.FC<IProps> = ({ locationID, setLocation }) => {
    // const [location, setLocation] = useState();
    useEffect(() => {
        const fetchData = async () => {
            if (locationID) {
                try {
                  const response = await axios.get(`/api/location/${locationID}`);
                  const routeLocation = response.data;
                  setLocation(routeLocation)
                  return;
                } catch (error) {
                  console.error('Error fetching character:', error);
                }
              }
        }

        fetchData();
       
    }, [locationID, setLocation]);

    return null;
    // had to do this to remove the react error 
    // by returning null in the function component, you're showing that this component doesn't render any JSX elements.
   
  };