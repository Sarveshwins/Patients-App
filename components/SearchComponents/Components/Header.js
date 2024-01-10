import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import { useLocation } from '../LocationContext';

import locationPicker from '../../../assets/searchSection/location.png';

const Header = () => {
  const navigation = useNavigation();
  const { location, locality } = useLocation();

  const [profile, setProfile] = useState(null);

  const {isDarkMode} = useTheme();

  const imagepick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfile(image.path);
    });
  };

  const styles = StyleSheet.create({
    conatiner: {
      flexDirection: 'row',
      width: wp('90%'),
      alignSelf: 'center',
      height: hp('5.25%'),
      top: hp(1.5),
      marginHorizontal: wp(5),
    },
    imageprofile: {
      borderRadius: 51,
      width: hp('5%'),
      height: hp(5),
      borderColor: isDarkMode ? '#9E9E9E' : 'grey',
      overflow: 'hidden',
      borderRadius: 43,
      borderWidth: 2,
      borderColor: '#FFF',
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 3,
    },
    TextStyle: {
      flexDirection: 'row',
      paddingLeft: wp('3%'),
      verticalAlign: 'middle',
    },
    Text: {
      color: '#000',
      textAlign: 'center',
      fontFamily: 'SF Pro Display',
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 16,
      letterSpacing: 0.4,
      textAlignVertical: 'center',
    },
    ViewArea: {
      flexDirection: 'row',
    },
    LocationNameStyle: {
      flexDirection: 'row',
      width: wp(22),
      marginLeft: wp(35),
      //paddingRight: wp(3),
      verticalAlign: 'middle',
    },
    TextLocation: {
      color: '#000',
      fontFamily: 'SF Pro Display',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: undefined,
      textAlignVertical: 'center',
    },
    TextLocation2: {
      color: '#000',
      fontFamily: 'SF Pro Display',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: undefined,
      textAlignVertical: 'center',
      marginLeft: 15
    },
    locationIcon: {
      width: wp(7),
      height: hp(3.2),
      marginTop: hp(1),
    },
  });

  return (
    <View style={styles.conatiner}>
      <TouchableHighlight onPress={imagepick}>
        <Image
          resizeMode="cover"
          style={styles.imageprofile}
          source={
            profile
              ? {uri: profile}
              : require('../../../assets/isection/emptyavator.png')
          }
        />
      </TouchableHighlight>
      <View style={styles.TextStyle}>
        <Text style={styles.Text}>Myself</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Location')}
        style={styles.ViewArea}>
        <View style={styles.LocationNameStyle}>
          {location === null ? (
            <Text style={styles.TextLocation}>No Location</Text>
          ) : (
            <Text style={styles.TextLocation2}>{location}</Text>
          )}
        </View>
        <Image
          resizeMode="cover"
          style={styles.locationIcon}
          source={locationPicker}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
