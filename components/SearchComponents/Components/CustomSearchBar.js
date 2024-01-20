import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useLocation} from '../LocationContext';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../ThemeContext';

import searchIcon from '../../../assets/searchSection/searchIcon.png';
import darkSearchIcon from '../../../assets/searchSection/searchIconDark.png';

const CustomSearchBar = () => {
  const navigation = useNavigation();
  const {locality} = useLocation();
  const {isDarkMode} = useTheme();
  // const [isTyping, setIsTyping] = useState(false);

  // function handleClick() {
  //   setIsTyping(true);
  // }

  // if (isTyping === true) {
  //   navigation.navigate('Search');
  // }

  const styles = StyleSheet.create({
    searchBarContainer: {
      width: wp(91),
      flexDirection: 'row',
      alignSelf: 'center',
      borderRadius: 22,
      backgroundColor: isDarkMode ? 'rgba(158, 158, 158, 0.60)' : '#F2F2F2',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    searchIcon: {
      width: wp(5),
      height: hp(2.46),
      marginLeft: wp(1),
      marginRight: wp(0.81),
      marginTop: hp(1.65),
    },
    input: {
      fontSize: 15,
      //color: isDarkMode ? 'rgba(255, 255, 255, 1)' : '#6A6464',
      fontWeight: '400',
    },
    cityView: {
      marginLeft: wp(9),
      marginTop: hp(1.72),
    },
    cityText: {
      color: '#0B547C',
      fontFamily: 'SF Pro Display',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: undefined,
    },
  });

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <View style={styles.searchBarContainer}>
          {isDarkMode ? (
            <Image source={darkSearchIcon} style={styles.searchIcon} />
          ) : (
            <Image source={searchIcon} style={styles.searchIcon} />
          )}
          <TextInput
            style={styles.input}
            placeholder="Search for Doctor’s, Clinic’s, Services & more.."
            placeholderTextColor={
              isDarkMode ? 'rgba(255, 255, 255, 1)' : '#6A6464'
            }
            onPress={() => navigation.navigate('Search')}
            onPressIn={() => navigation.navigate('Search')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <View style={styles.cityView}>
          {locality === null ? (
            <Text style={styles.cityText}>No Location</Text>
          ) : (
            <Text style={styles.cityText}>{locality}</Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CustomSearchBar;
