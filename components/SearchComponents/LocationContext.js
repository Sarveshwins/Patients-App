// LocationContext.js
import React, {createContext, useContext, useState} from 'react';

const LocationContext = createContext();

export const LocationProvider = ({children}) => {
  const [location, setLocation] = useState(null);

  const [locality, setLocality] = useState(null);

  const topCitiesData = [
    {
      id: 1,
      city: 'Delhi',
    },
    {
      id: 2,
      city: 'Bangalore',
    },
    {
      id: 3,
      city: 'Mumbai',
    },
    {
      id: 4,
      city: 'Chennai',
    },
    {
      id: 5,
      city: 'Kolkata',
    },
    {
      id: 6,
      city: 'Hyderabad',
    },
    {
      id: 7,
      city: 'Pune',
    },
    {
      id: 8,
      city: 'Ahmedabad',
    },
  ];

  const CitiesData = [
    {id: 9, city: 'Agra'},
    {id: 10, city: 'Ahmedabad'},
    {id: 11, city: 'Ahmednagar'},
    {id: 12, city: 'Ajmer'},
    {id: 13, city: 'Akola'},
    {id: 14, city: 'Alwar'},
    {id: 15, city: 'Amravati'},
    {id: 16, city: 'Amritsar'},
    {id: 17, city: 'Belgaum'},
    {id: 18, city: 'Bhiwandi'},
    {id: 19, city: 'Bhopal'},
    {id: 20, city: 'Bhubaneswar'},
    {id: 21, city: 'Bhavnagar'},
    {id: 22, city: 'Bilaspur'},
    {id: 23, city: 'Bikaner'},
    {id: 24, city: 'Bokaro Steel City'},
    {id: 25, city: 'Chandigarh'},
    {id: 26, city: 'Chennai'},
    {id: 27, city: 'Coimbatore'},
    {id: 28, city: 'Cuttack'},
    {id: 29, city: 'Darbhanga'},
    {id: 30, city: 'Dehradun'},
    {id: 31, city: 'Delhi'},
    {id: 32, city: 'Dhanbad'},
    {id: 33, city: 'Dhule'},
    {id: 34, city: 'Faridabad'},
    {id: 35, city: 'Gandhinagar'},
    {id: 36, city: 'Ghaziabad'},
    {id: 37, city: 'Gorakhpur'},
    {id: 38, city: 'Gulbarga'},
    {id: 39, city: 'Gurgaon'},
    {id: 40, city: 'Gwalior'},
    {id: 41, city: 'Hisar'},
    {id: 42, city: 'Hyderabad'},
    {id: 43, city: 'Indore'},
    {id: 44, city: 'Jaipur'},
    {id: 45, city: 'Jamnagar'},
    {id: 46, city: 'Jamshedpur'},
    {id: 47, city: 'Jhansi'},
    {id: 48, city: 'Jodhpur'},
    {id: 49, city: 'Junagadh'},
    {id: 50, city: 'Kakinada'},
    {id: 51, city: 'Kanpur'},
    {id: 52, city: 'Kochi'},
    {id: 53, city: 'Kolhapur'},
    {id: 54, city: 'Kolkata'},
    {id: 55, city: 'Kurnool'},
    {id: 56, city: 'Lucknow'},
    {id: 57, city: 'Ludhiana'},
    {id: 58, city: 'Madurai'},
    {id: 59, city: 'Malegaon'},
    {id: 60, city: 'Mangalore'},
    {id: 61, city: 'Meerut'},
    {id: 62, city: 'Nagpur'},
    {id: 63, city: 'Nanded'},
    {id: 64, city: 'Navi Mumbai'},
    {id: 65, city: 'Nellore'},
    {id: 66, city: 'Nizamabad'},
    {id: 67, city: 'Noida'},
    {id: 68, city: 'Panipat'},
    {id: 69, city: 'Patna'},
    {id: 70, city: 'Pune'},
    {id: 71, city: 'Rajahmundry'},
    {id: 72, city: 'Rajkot'},
    {id: 73, city: 'Ranchi'},
    {id: 74, city: 'Saharanpur'},
    {id: 75, city: 'Salem'},
    {id: 76, city: 'Sangli'},
    {id: 77, city: 'Siliguri'},
    {id: 78, city: 'Solapur'},
    {id: 79, city: 'South Dumdum'},
    {id: 80, city: 'Surat'},
    {id: 81, city: 'Thane'},
    {id: 82, city: 'Thiruvananthapuram'},
    {id: 83, city: 'Tiruchirapalli'},
    {id: 84, city: 'Tirunelveli'},
    {id: 85, city: 'Tirupur'},
    {id: 86, city: 'Tumkur'},
    {id: 87, city: 'Udaipur'},
    {id: 88, city: 'Ujjain'},
    {id: 89, city: 'Ulhasnagar'},
    {id: 90, city: 'Varanasi'},
    {id: 91, city: 'Vellore'},
    {id: 92, city: 'Vijayawada'},
    {id: 93, city: 'Visakhapatnam'},
    {id: 94, city: 'Warangal'},
  ];

  const topLocalitiesMumbai = [
    {
      id: 1,
      locality: 'All Location',
    },
    {
      id: 2,
      locality: 'Bandra',
    },
    {
      id: 3,
      locality: 'Juhu',
    },
    {
      id: 4,
      locality: 'Andheri',
    },
    {
      id: 5,
      locality: 'Powai',
    },
    {
      id: 6,
      locality: 'Worli',
    },
    {
      id: 7,
      locality: 'Dadar',
    },
    {
      id: 8,
      locality: 'Chembur',
    },
    {
      id: 9,
      locality: 'Thane',
    },
    {
      id: 10,
      locality: 'Khar',
    },
    {
      id: 11,
      locality: 'Bhandup',
    },
  ];

  const topLocalitiesDelhi = [
    {
      id: 1,
      locality: 'All Location',
    },
    {
      id: 2,
      locality: 'South Extension',
    },
    {
      id: 3,
      locality: 'Dwarka',
    },
    {
      id: 4,
      locality: 'Karol Bagh',
    },
    {
      id: 5,
      locality: 'Vasant Kunj',
    },
    {
      id: 6,
      locality: 'Pitampura',
    },
    {
      id: 7,
      locality: 'Rohini',
    },
    {
      id: 8,
      locality: 'Mayur Vihar',
    },
    {
      id: 9,
      locality: 'Saket',
    },
    {
      id: 10,
      locality: 'Nehru Place',
    },
  ];

  const topLocalitiesPune = [
    {
      id: 1,
      locality: 'All Location',
    },
    {
      id: 2,
      locality: 'Hinjewadi',
    },
    {
      id: 3,
      locality: 'Kothrud',
    },
    {
      id: 4,
      locality: 'Viman Nagar',
    },
    {
      id: 5,
      locality: 'Wakad',
    },
    {
      id: 6,
      locality: 'Baner',
    },
    {
      id: 7,
      locality: 'Kondhwa',
    },
    {
      id: 8,
      locality: 'Hadapsar',
    },
    {
      id: 9,
      locality: 'Aundh',
    },
    {
      id: 10,
      locality: 'Magarpatta City',
    },
  ];

  function handleLocation(cityName) {
    setLocation(cityName);
  }

  function handleLocality(localityName) {
    setLocality(localityName);
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        handleLocation,
        locality,
        handleLocality,
        topCitiesData,
        CitiesData,
        topLocalitiesMumbai,
        topLocalitiesDelhi,
        topLocalitiesPune
      }}>
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
