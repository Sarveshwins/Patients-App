import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useRecentSearch} from '../RecentSearchContext';
import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import RightArrowDark from '../../../assets/searchSection/RightArrowIconDark.png';
import Border from '../../../assets/searchSection/borderImage.png';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../ThemeContext';

const MyDoctors = () => {
  const {myDoctorsData} = useRecentSearch();
  const {isDarkMode} = useTheme();
  const navigation = useNavigation();

  function handleImageClick() {
    navigation.navigate('MyDoctorScreen');
  }

  const styles = StyleSheet.create({
    container: {
      width: wp(90),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      alignSelf: 'center',
      verticalAlign: 'middle',
      //marginTop: hp(1.85),
    },
    DoctorText: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SF Pro Display',
      fontSize: 22,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: undefined,
    },
    RighArrowImage: {
      marginLeft: wp(54.5),
      marginTop: 5,
    },
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(87),
      alignSelf: 'center',
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(1.35),
    },
    DoctorImage: {
      width: 49,
      height: 49,
      borderRadius: 20,
      overflow: 'hidden',
      borderWidth: 1.7,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 2,
    },
    DoctorBorderImage: {
      position: 'absolute',
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(40),
      flexDirection: 'column',
    },
    TextName: {
      color: isDarkMode ? '#fff' : '#000',
      position: 'absolute',
      width: wp(80),
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 20,
    },
    TextSpecialist: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Regular',
      marginTop: hp(2.5),
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    TextArea: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Regular',
      marginTop: hp(0.5),
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    ButtonView: {
      marginLeft: wp(-4.6),
      flexDirection: 'row',
      marginTop: hp(3),
    },
    DoctorButton: {
      width: 58,
      height: 25,
      borderRadius: 7,
      backgroundColor: isDarkMode ? '#000' : '#1A936F',
      borderColor: isDarkMode ? '#1A936F' : undefined,
      borderWidth: 1,
      margin: 7,
    },
    DoctorButtonHovered: {
      backgroundColor: isDarkMode ? '#1A936F' : '#147e5a',
    },
    buttonText: {
      color: isDarkMode ? '#1A936F' : '#FFF',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: isDarkMode ? '500' : '700',
      lineHeight: 22,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <Text style={styles.DoctorText}>My Doctors</Text>
        <TouchableOpacity onPress={handleImageClick}>
          {isDarkMode ? (
            <Image style={styles.RighArrowImage} source={RightArrowDark} />
          ) : (
            <Image style={styles.RighArrowImage} source={RightArrow} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.DoctorsCard}>
        {myDoctorsData.map(
          (doctor, index) =>
            doctor.key < 4 && (
              <View
                key={doctor.key}
                style={[
                  styles.DoctorCard,
                  {
                    borderBottomColor: index > 1 ? 'white' : 'black',
                    borderBottomWidth: index > 1 ? 0 : 0.5,
                  },
                ]}>
                <View
                  style={{
                    height: 57,
                    width: 57,
                    backgroundColor: 'blue',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 23,
                    borderWidth: 1.7,
                  }}>
                  <Image style={styles.DoctorImage} source={doctor.image} />
                </View>
                {/* <Image style={styles.DoctorBorderImage} source={Border} /> */}
                <View style={styles.DoctorTextView}>
                  <Text style={styles.TextName}>{doctor.name}</Text>
                  <Text style={styles.TextSpecialist}>{doctor.specialist}</Text>
                  <Text style={styles.TextArea}>{doctor.area}</Text>
                </View>
                <View style={styles.ButtonView}>
                  <TouchableOpacity style={[styles.DoctorButton]}>
                    <Text style={styles.buttonText}>Book</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.DoctorButton]}>
                    <Text style={styles.buttonText}>Call</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ),
        )}
      </View>
    </View>
  );
};

export default MyDoctors;
