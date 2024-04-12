import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useLocation} from '../LocationContext';
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import searchIconDark from '../../../assets/searchSection/searchIconDark.png';
import locationSpot from '../../../assets/searchSection/locationSpot.png';
import locationDark from '../../../assets/searchSection/locationDark.png';
import Line from '../../../assets/searchSection/TextLine.png';
import Cross from '../../../assets/searchSection/cross.png';
import CrossDark from '../../../assets/searchSection/crossDark.png';
import TickDark from '../../../assets/searchSection/tickDark.png';

const Location = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const {
    location,
    handleLocation,
    locality,
    handleLocality,
    topCitiesData,
    CitiesData,
    topLocalitiesMumbai,
    topLocalitiesDelhi,
    topLocalitiesPune,
  } = useLocation();

  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredLocalities, setFilteredLocalities] = useState([]);
  const [isCitySelected, setIsCitySelected] = useState(false);

  useEffect(() => {
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
    navigation.navigate('MainContainer', {screen: 'SearchHome'});
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
  }

  const handleCrossPress = () => {
    setSearchText('');
    setIsTyping(false);
  };

  function boldMatchedText(text, searchText) {
    const index = text.toLowerCase().indexOf(searchText.toLowerCase());
    if (index !== -1) {
      const preMatched = text.substring(0, index);
      const matched = text.substring(index, index + searchText.length);
      const postMatched = text.substring(index + searchText.length);
      return (
        <>
          {preMatched}
          <Text style={{fontWeight: '900'}}>{matched}</Text>
          {postMatched}
        </>
      );
    }
    return <>{text}</>;
  }

  function handleArrowClick() {
    navigation.navigate('MainContainer', {screen: 'SearchHome'});
  }

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: isDarkMode ? '#000' : '#FFF',
      flexDirection: 'column',
      height: hp(100),
    },
    headerWrapper: {},
    header: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(86),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: isDarkMode
        ? 'rgba(183, 183, 183, 0.26)'
        : 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    CrossWrapper: {
      position: 'absolute',
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(86),
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
      color: isDarkMode ? '#fff' : '#000',
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
      color: isDarkMode ? '#fff' : '#0B547C',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 20,
      marginLeft: 6,
      //marginBottom: 5,
    },
    ScrollAreaContainer: {
      width: wp(100),
      alignSelf: 'center',
    },
    TopCities: {
      height: hp(5),
      marginTop: hp(2.4),
      backgroundColor: isDarkMode
        ? 'rgba(183, 183, 183, 0.26)'
        : 'rgba(242, 242, 242, 0.9)',
    },
    TopCitiesText: {
      marginLeft: wp(5.6),
      marginTop: hp(1),
      color: isDarkMode ? '#fff' : '#222',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 25,
    },
    TopCityCard: {
      marginLeft: wp(5.6),
    },
    TextViewWrapper: {
      flexDirection: 'row',
    },
    TopCityText: {
      color: isDarkMode ? '#fff' : '#222',
      fontFamily: 'SFProDisplay-Regular',
      //fontSize: 15,
      fontStyle: 'normal',
      //fontWeight: '400',
      lineHeight: 21,
      marginTop: hp(2.2),
      marginBottom: 4,
      width: wp(60),
    },
    TopCityText2: {
      color: isDarkMode ? '#fff' : '#222',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 21,
      marginTop: hp(2.2),
      marginBottom: 4,
      width: wp(60),
    },
    tickImage: {
      marginLeft: wp(22),
      marginTop: hp(2.5),
    },
    TopCityLine: {
      width: wp(89.5),
    },
  });

  return (
    <SafeAreaView style={{flex: 1, color: 'red'}}>
      <View style={styles.Container}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleArrowClick}>
              {isDarkMode ? (
                <Image style={styles.ArrowImage} source={LeftArrowDark} />
              ) : (
                <Image style={styles.ArrowImage} source={LeftArrow} />
              )}
            </TouchableOpacity>
            <View style={styles.searchBarContainer}>
              {isDarkMode ? (
                <Image source={searchIconDark} style={styles.searchIcon} />
              ) : (
                <Image source={searchIcon} style={styles.searchIcon} />
              )}
              <TextInput
                placeholder="Search my city, locality"
                placeholderTextColor={isDarkMode ? '#fff' : '#4A4A4A'}
                clearButtonMode="always"
                style={styles.input}
                value={searchText}
                onChangeText={text => {
                  setSearchText(text);
                  if (!isTyping) setIsTyping(true);
                }}
              />
            </View>
            {isTyping && (
              <TouchableHighlight
                style={styles.CrossWrapper}
                onPress={handleCrossPress}>
                {isDarkMode ? (
                  <Image style={styles.CrossImage} source={CrossDark} />
                ) : (
                  <Image style={styles.CrossImage} source={Cross} />
                )}
              </TouchableHighlight>
            )}
          </View>
          <View style={styles.LocationViewWrapper}>
            {isDarkMode ? (
              <Image source={locationDark} style={styles.locationSpot} />
            ) : (
              <Image source={locationSpot} style={styles.locationSpot} />
            )}
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
              {filteredLocalities.map(Locality => (
                <View style={styles.TopCityCard} key={Locality.id}>
                  <TouchableOpacity
                    style={styles.TextViewWrapper}
                    onPress={() => handleCurrentLocality(Locality.locality)}>
                    <Text
                      style={[
                        styles.TopCityText2,
                        Locality.id === 1 && {
                          color: '#82BEFF',
                          fontSize: 18,
                          width: wp(90),
                          textAlign: 'center',
                        },
                      ]}>
                      {Locality.locality}
                    </Text>
                    {locality === Locality.locality ? (
                      <Image style={styles.tickImage} source={TickDark} />
                    ) : undefined}
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
                    style={styles.TextViewWrapper}
                    onPress={() => handleCurrentLocation(city.city)}>
                    <Text style={styles.TopCityText}>
                      {boldMatchedText(city.city, searchText)}
                    </Text>
                    {location === city.city ? (
                      <Image style={styles.tickImage} source={TickDark} />
                    ) : null}
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
                    style={styles.TextViewWrapper}
                    onPress={() => handleCurrentLocation(city.city)}>
                    <Text
                      style={{
                        ...styles.TopCityText,
                        fontWeight: location === city.city ? 900 : 100,
                        fontSize: location === city.city ? 17 : 15,
                      }}>
                      {city.city}
                    </Text>
                    {location === city.city ? (
                      <Image style={styles.tickImage} source={TickDark} />
                    ) : undefined}
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
                    style={styles.TextViewWrapper}
                    onPress={() => handleCurrentLocation(city2.city)}>
                    <Text
                      style={{
                        ...styles.TopCityText,
                        fontWeight: location === city2.city ? 900 : 100,
                        fontSize: location === city2.city ? 17 : 15,
                      }}>
                      {city2.city}
                    </Text>
                    {location === city2.city ? (
                      <Image style={styles.tickImage} source={TickDark} />
                    ) : undefined}
                  </TouchableOpacity>
                  <Image source={Line} style={styles.TopCityLine} />
                </View>
              ))}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Location;
