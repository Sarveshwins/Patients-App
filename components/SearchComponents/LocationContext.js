// LocationContext.js
import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);

  const [locality, setLocality] = useState(null);

  function handleLocation(cityName) {
    setLocation(cityName);
  }

  function handleLocality(localityName){
    setLocality(localityName)
  }

  return (
    <LocationContext.Provider value={{ location, handleLocation, locality, handleLocality }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
