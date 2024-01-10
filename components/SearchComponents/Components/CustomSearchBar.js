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

import searchIcon from '../../../assets/searchSection/searchIcon.png';
import { openPicker } from 'react-native-image-crop-picker';

const CustomSearchBar = () => {
  const navigation = useNavigation();
  const {locality} = useLocation();
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
      backgroundColor: 'rgba(249, 249, 249, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
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
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search for Doctor’s, Clinic’s, Services & more.."
            placeholderTextColor="#A5A5A5"
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
