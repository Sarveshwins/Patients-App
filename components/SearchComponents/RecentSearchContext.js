import React, {createContext, useContext, useState} from 'react';
import clinicBanner from '../../assets/searchSection/clinicBanner.png';
import doctorBanner from '../../assets/searchSection/doctorBanner.png';

const RecentSearchContext = createContext();

export const RecentSearchProvider = ({children}) => {
  //const [selectedIssues, setSelectedIssues] = useState([]);
  const [selectedClinics, setSelectedClinics] = useState([]);
  const [selectedDoctors, setSelectedDoctors] = useState([]);
  const [allSelectedItems, setAllSelectedItems] = useState([]);

  const issueDataList = [
    {id: 1, issue: 'Asthma'},
    {id: 2, issue: 'Bronchitis'},
    {id: 3, issue: 'Cancer'},
    {id: 4, issue: 'Diabetes'},
    {id: 5, issue: 'Eczema'},
    {id: 6, issue: 'Fibromyalgia'},
    {id: 7, issue: 'Gastritis'},
    {id: 8, issue: 'Hypertension'},
    {id: 9, issue: 'Insomnia'},
    {id: 10, issue: 'Jaundice'},
    {id: 11, issue: 'Kidney Stones'},
    {id: 12, issue: 'Lupus'},
    {id: 13, issue: 'Migraine'},
    {id: 14, issue: 'Narcolepsy'},
    {id: 15, issue: 'Osteoporosis'},
    {id: 16, issue: 'Psoriasis'},
    {id: 17, issue: 'Quinsy'},
    {id: 18, issue: 'Rheumatoid Arthritis'},
    {id: 19, issue: 'Sinusitis'},
    {id: 20, issue: 'Tinnitus'},
    {id: 21, issue: 'Ulcerative Colitis'},
    {id: 22, issue: 'Varicose Veins'},
    {id: 23, issue: "Wilson's Disease"},
    {id: 24, issue: 'Xeroderma'},
    {id: 25, issue: 'Yeast Infection'},
    {id: 26, issue: 'Zika Virus Infection'},
  ];

  const clinicsNameList = [
    {
      id: 27,
      name: 'Aster Clinic',
      image: clinicBanner,
      location: 'Lake Road',
      field: 'ayurveda',
    },
    {
      id: 28,
      name: 'Blossom Health Center',
      image: clinicBanner,
      location: 'Sunset Avenue',
      field: 'homeopathy',
    },
    {
      id: 29,
      name: 'Caring Touch Clinic',
      image: clinicBanner,
      location: 'Maple Street',
      field: 'allopathy',
    },
    {
      id: 30,
      name: 'Dove Wellness Center',
      image: clinicBanner,
      location: 'Green Park',
      field: 'ayurveda',
    },
    {
      id: 31,
      name: 'Evergreen Medical Services',
      image: clinicBanner,
      location: 'Ocean View',
      field: 'homeopathy',
    },
    {
      id: 32,
      name: 'Floral Health Hub',
      image: clinicBanner,
      location: 'Mountain Crest',
      field: 'allopathy',
    },
    {
      id: 33,
      name: 'GreenLeaf Care Center',
      image: clinicBanner,
      location: 'River Side',
      field: 'ayurveda',
    },
    {
      id: 34,
      name: 'Harmony Health Clinic',
      image: clinicBanner,
      location: 'Valley Lane',
      field: 'homeopathy',
    },
    {
      id: 35,
      name: 'Infinite Healing Hub',
      image: clinicBanner,
      location: 'Meadow Lane',
      field: 'allopathy',
    },
    {
      id: 36,
      name: 'Jade Wellness Point',
      image: clinicBanner,
      location: 'City Plaza',
      field: 'ayurveda',
    },
    {
      id: 37,
      name: 'Kaleidoscope Health Center',
      image: clinicBanner,
      location: 'Silver Street',
      field: 'homeopathy',
    },
    {
      id: 38,
      name: 'Lunar Medical Services',
      image: clinicBanner,
      location: 'Golden Avenue',
      field: 'allopathy',
    },
    {
      id: 39,
      name: 'Mystic Healing Center',
      image: clinicBanner,
      location: 'Diamond Circle',
      field: 'ayurveda',
    },
    {
      id: 40,
      name: 'Nirvana Wellness Hub',
      image: clinicBanner,
      location: 'Pine View',
      field: 'homeopathy',
    },
    {
      id: 41,
      name: 'Oasis Medical Center',
      image: clinicBanner,
      location: 'Cherry Lane',
      field: 'allopathy',
    },
    {
      id: 42,
      name: 'Pearl Health Clinic',
      image: clinicBanner,
      location: 'Topaz Road',
      field: 'ayurveda',
    },
    {
      id: 43,
      name: 'Quartz Healing Point',
      image: clinicBanner,
      location: 'Ruby Square',
      field: 'homeopathy',
    },
    {
      id: 44,
      name: 'Radiant Care Center',
      image: clinicBanner,
      location: 'Sapphire Street',
      field: 'allopathy',
    },
    {
      id: 45,
      name: 'Serene Health Hub',
      image: clinicBanner,
      location: 'Emerald Lane',
      field: 'ayurveda',
    },
    {
      id: 46,
      name: 'Tranquil Wellness Center',
      image: clinicBanner,
      location: 'Sunflower Avenue',
      field: 'homeopathy',
    },
    {
      id: 47,
      name: 'Unity Medical Services',
      image: clinicBanner,
      location: 'Lily Lane',
      field: 'allopathy',
    },
    {
      id: 48,
      name: 'Vivid Healing Hub',
      image: clinicBanner,
      location: 'Daisy Street',
      field: 'ayurveda',
    },
    {
      id: 49,
      name: 'Wellspring Health Clinic',
      image: clinicBanner,
      location: 'Rose Garden',
      field: 'homeopathy',
    },
    {
      id: 50,
      name: 'Xenon Medical Services',
      image: clinicBanner,
      location: 'Tulip Plaza',
      field: 'allopathy',
    },
    {
      id: 51,
      name: 'Yellowstone Wellness Point',
      image: clinicBanner,
      location: 'Blossom Road',
      field: 'ayurveda',
    },
    {
      id: 52,
      name: 'Zenith Healing Center',
      image: clinicBanner,
      location: 'Ivy Lane',
      field: 'homeopathy',
    },
  ];

  const doctorList = [
    {
      id: 53,
      firstName: 'Dr. Alex',
      lastName: 'Ayurveda',
      image: doctorBanner,
      field: 'Ayurveda',
    },
    {
      id: 54,
      firstName: 'Dr. Bella',
      lastName: 'Cardiologist',
      image: doctorBanner,
      field: 'Cardiologist',
    },
    {
      id: 55,
      firstName: 'Dr. Charlie',
      lastName: 'Dermatologist',
      image: doctorBanner,
      field: 'Dermatologist',
    },
    {
      id: 56,
      firstName: 'Dr. David',
      lastName: 'Endocrinologist',
      image: doctorBanner,
      field: 'Endocrinologist',
    },
    {
      id: 57,
      firstName: 'Dr. Emily',
      lastName: 'Gynecologist',
      image: doctorBanner,
      field: 'Gynecologist',
    },
    {
      id: 58,
      firstName: 'Dr. Felix',
      lastName: 'Hematologist',
      image: doctorBanner,
      field: 'Hematologist',
    },
    {
      id: 59,
      firstName: 'Dr. Grace',
      lastName: 'Immunologist',
      image: doctorBanner,
      field: 'Immunologist',
    },
    {
      id: 60,
      firstName: 'Dr. Henry',
      lastName: 'Neurologist',
      image: doctorBanner,
      field: 'Neurologist',
    },
    {
      id: 61,
      firstName: 'Dr. Iris',
      lastName: 'Ophthalmologist',
      image: doctorBanner,
      field: 'Ophthalmologist',
    },
    {
      id: 62,
      firstName: 'Dr. Bipin',
      lastName: 'Psychiatrist',
      image: doctorBanner,
      field: 'Psychiatrist',
    },
    {
      id: 63,
      firstName: 'Dr. Kevin',
      lastName: 'Radiologist',
      image: doctorBanner,
      field: 'Radiologist',
    },
    {
      id: 64,
      firstName: 'Dr. Lily',
      lastName: 'Surgeon',
      image: doctorBanner,
      field: 'Surgeon',
    },
    {
      id: 65,
      firstName: 'Dr. Mike',
      lastName: 'Urologist',
      image: doctorBanner,
      field: 'Urologist',
    },
    {
      id: 66,
      firstName: 'Dr. Binod',
      lastName: 'Allergist',
      image: doctorBanner,
      field: 'Allergist',
    },
    {
      id: 67,
      firstName: 'Dr. Oliver',
      lastName: 'Dentist',
      image: doctorBanner,
      field: 'Dentist',
    },
    {
      id: 68,
      firstName: 'Dr. Penelope',
      lastName: 'Family Physician',
      image: doctorBanner,
      field: 'Family Physician',
    },
    {
      id: 69,
      firstName: 'Dr. Quentin',
      lastName: 'Nephrologist',
      image: doctorBanner,
      field: 'Nephrologist',
    },
    {
      id: 70,
      firstName: 'Dr. Binesh',
      lastName: 'Orthopedic Surgeon',
      image: doctorBanner,
      field: 'Orthopedic Surgeon',
    },
    {
      id: 71,
      firstName: 'Dr. Birla',
      lastName: 'Pediatrician',
      image: doctorBanner,
      field: 'Pediatrician',
    },
    {
      id: 72,
      firstName: 'Dr. Tina',
      lastName: 'Rheumatologist',
      image: doctorBanner,
      field: 'Rheumatologist',
    },
    {
      id: 73,
      firstName: 'Dr. Ulysses',
      lastName: 'Vascular Surgeon',
      image: doctorBanner,
      field: 'Vascular Surgeon',
    },
    {
      id: 74,
      firstName: 'Dr. Veronica',
      lastName: 'Gastroenterologist',
      image: doctorBanner,
      field: 'Gastroenterologist',
    },
    {
      id: 75,
      firstName: 'Dr. William',
      lastName: 'Pulmonologist',
      image: doctorBanner,
      field: 'Pulmonologist',
    },
    {
      id: 76,
      firstName: 'Dr. Xander',
      lastName: 'Oncologist',
      image: doctorBanner,
      field: 'Oncologist',
    },
    {
      id: 77,
      firstName: 'Dr. Yara',
      lastName: 'Podiatrist',
      image: doctorBanner,
      field: 'Podiatrist',
    },
    {
      id: 78,
      firstName: 'Dr. Zachary',
      lastName: 'Chiropractor',
      image: doctorBanner,
      field: 'Chiropractor',
    },
  ];

  function handleItemClicked(item) {
    // Find the index of the existing item in the allSelectedItems array based on id
    const itemIndex = allSelectedItems.findIndex(
      existingItem => existingItem.id === item.id,
    );
  
    // If the item exists in allSelectedItems, update it, else add it to the end
    if (itemIndex !== -1) {
      const updatedItems = [...allSelectedItems];
      updatedItems[itemIndex] = item;
      setAllSelectedItems(updatedItems);
    } else {
      setAllSelectedItems([item, ...allSelectedItems]);
    }
  
    console.log(allSelectedItems);
  }
  

  return (
    <RecentSearchContext.Provider
      value={{
        allSelectedItems,
        handleItemClicked,
        issueDataList,
        clinicsNameList,
        doctorList,
      }}>
      {children}
    </RecentSearchContext.Provider>
  );
};

export const useRecentSearch = () => {
  const context = useContext(RecentSearchContext);
  if (!context) {
    throw new Error(
      'useRecentSearch must be used within a RecentSearchProvider',
    );
  }
  return context;
};
