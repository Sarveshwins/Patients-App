import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useLocation} from '../LocationContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import locationSpot from '../../../assets/searchSection/locationSpot.png';
import Line from '../../../assets/searchSection/TextLine.png';
import Cross from '../../../assets/searchSection/cross.png';

const Location = () => {
  const navigation = useNavigation();
  const {location, handleLocation, locality, handleLocality} = useLocation();
  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredLocalities, setFilteredLocalities] = useState([]);
  const [isCitySelected, setIsCitySelected] = useState(false);

  //const [currentLocation, setCurrentLocation] = useState(null);

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
      locality: 'Colaba',
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
      locality: 'Connaught Place',
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
      locality: 'Koregaon Park',
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

  useEffect(() => {
    // Filter cities based on the user's input
    const filteredTopCities = topCitiesData.filter(city =>
      city.city.toLowerCase().includes(searchText.toLowerCase()),
    );
    const filteredOtherCities = CitiesData.filter(city =>
      city.city.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredCities([...filteredTopCities, ...filteredOtherCities]);
  }, [searchText]);

  function handleInputPress() {
    setIsTyping(true);
  }
  function handleCurrentLocality(localityName) {
    handleLocality(localityName);
    navigation.navigate("SearchHome")
  }

  function handleCurrentLocation(cityName) {
    handleLocation(cityName);
    const currentCity = cityName;
    setIsCitySelected(true);

    if (currentCity === 'Mumbai') {
      setFilteredLocalities([...topLocalitiesMumbai]);
    } else if (currentCity === 'Pune') {
      setFilteredLocalities([...topLocalitiesPune]);
    } else {
      setFilteredLocalities([...topLocalitiesDelhi]);
    }
    // Additional logic to update the map based on the selected city
    // You might dispatch an action to update the map or trigger a map update function
  }

  // function handleCurrentLocation(cityName) {
  //   handleLocation(cityName);
  // }

  const handleCrossPress = () => {
    setSearchText('');
    setIsTyping(false);
  };

  function handleArrowClick() {
    navigation.navigate('SearchHome');
  }

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#FFF',
      flexDirection: 'column',
    },
    headerWrapper: {},
    header: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(77.3),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    CrossWrapper: {
      position: "absolute"
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(92),
      marginTop: hp(4.8),
    },
    ArrowImage: {
      marginLeft: wp(1),
      marginRight: wp(1.5),
      marginTop: hp(4.3),
    },
    searchIcon: {
      width: wp(5),
      height: hp(2.46),
      marginRight: wp(0.6),
      marginTop: hp(1.6),
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: '#000',
      paddingHorizontal: 20,
    },
    LocationViewWrapper: {
      marginLeft: wp(13.3),
      marginTop: hp(1.35),
      flexDirection: 'row',
      marginTop: 15,
    },
    locationSpot: {
      width: wp(4.26),
      height: hp(2),
    },
    TextLocation: {
      color: '#0B547C',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 20,
      marginLeft: 6,
      marginTop: -2.5,
      marginBottom: 15,
    },
    ScrollAreaContainer: {
      width: wp(100),
      alignSelf: 'center',
    },
    TopCities: {
      height: hp(5),
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
    },
    TopCitiesText: {
      marginLeft: wp(5.6),
      marginTop: hp(1),
      color: '#222',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 25,
    },
    TopCityCard: {
      marginLeft: wp(5.6),
    },
    TopCityText: {
      color: '#222',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 21,
      marginTop: hp(2.2),
      marginBottom: 4,
    },
    TopCityLine: {
      width: wp(89.5),
    },
  });

  return (
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleArrowClick}>
            <Image style={styles.ArrowImage} source={LeftArrow} />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              placeholder="Search my city, locality"
              placeholderTextColor="#A5A5A5"
              clearButtonMode="always"
              style={styles.input}
              value={searchText}
              onChangeText={text => {
                setSearchText(text);
                // Set isTyping to true when the user starts typing
                if (!isTyping) setIsTyping(true);
              }}
              //onBlur={() => setIsTyping(false)} // Set isTyping to false when the user finishes typing
            />
          </View>
          {isTyping && (
              <TouchableHighlight style={styles.CrossWrapper} onPress={handleCrossPress}>
                <Image style={styles.CrossImage} source={Cross} />
              </TouchableHighlight>
            //<Image style={styles.CrossImage} source={Cross} />
          )}
        </View>
        <View style={styles.LocationViewWrapper}>
          <Image source={locationSpot} style={styles.locationSpot} />
          <Text style={styles.TextLocation}>
            {location === null ? 'Current Location' : location}
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isCitySelected === true ? (
          <>
            <View style={styles.ScrollAreaContainer}>
              <View style={styles.TopCities}>
                <Text style={styles.TopCitiesText}>Select Localities</Text>
              </View>
            </View>
            {filteredLocalities.map(locality => (
              <View style={styles.TopCityCard} key={locality.id}>
                <TouchableOpacity
                  onPress={() => handleCurrentLocality(locality.locality)}
                >
                  <Text style={styles.TopCityText}>{locality.locality}</Text>
                </TouchableOpacity>
                <Image source={Line} style={styles.TopCityLine} />
              </View>
            ))}
          </>
        ) : isTyping && searchText.length > 0 ? (
          <>
            <View style={styles.ScrollAreaContainer}>
              <View style={styles.TopCities}>
                <Text style={styles.TopCitiesText}>Search Results</Text>
              </View>
            </View>
            {filteredCities.map(city => (
              <View style={styles.TopCityCard} key={city.id}>
                <TouchableOpacity
                  onPress={() => handleCurrentLocation(city.city)}>
                  <Text style={styles.TopCityText}>{city.city}</Text>
                </TouchableOpacity>
                <Image source={Line} style={styles.TopCityLine} />
              </View>
            ))}
          </>
        ) : (
          <>
            <View style={styles.ScrollAreaContainer}>
              <View style={styles.TopCities}>
                <Text style={styles.TopCitiesText}>Top Cities</Text>
              </View>
            </View>
            {topCitiesData.map(city => (
              <View style={styles.TopCityCard} key={city.id}>
                <TouchableOpacity
                  onPress={() => handleCurrentLocation(city.city)}>
                  <Text style={styles.TopCityText}>{city.city}</Text>
                </TouchableOpacity>
                <Image source={Line} style={styles.TopCityLine} />
              </View>
            ))}
            <View style={styles.ScrollAreaContainer}>
              <View style={styles.TopCities}>
                <Text style={styles.TopCitiesText}>Other Cities</Text>
              </View>
            </View>
            {CitiesData.map(city2 => (
              <View style={styles.TopCityCard} key={city2.id}>
                <TouchableOpacity
                  onPress={() => handleCurrentLocation(city2.city)}>
                  <Text style={styles.TopCityText}>{city2.city}</Text>
                </TouchableOpacity>
                <Image source={Line} style={styles.TopCityLine} />
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Location;
