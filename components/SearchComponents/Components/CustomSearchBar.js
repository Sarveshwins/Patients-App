import React from 'react';
import {View, StyleSheet, Image, TextInput, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import searchIcon from '../../../assets/searchSection/searchIcon.png';

const CustomSearchBar = () => {
  const styles = StyleSheet.create({
    searchBarContainer: {
      width: wp(90),
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
      <View style={styles.searchBarContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for Doctor’s, Clinic’s, Services & more.."
          placeholderTextColor="#A5A5A5"
        />
      </View>
      <View style={styles.cityView}>
        <Text style={styles.cityText}>Panchvati</Text>
      </View>
    </>
  );
};

export default CustomSearchBar;
