import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRecentSearch} from '../RecentSearchContext';
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';
import Border from '../../../assets/searchSection/borderImage.png';

const MyDoctorScreen = () => {
  const navigation = useNavigation();
  const {myDoctorsData} = useRecentSearch();
  const {isDarkMode} = useTheme();
  const [isBookPressed, setBookPressed] = useState(false);

  function handleArrowClick() {
        navigation.navigate('MainContainer', {screen: 'SearchHome'});

    //navigation.navigate('SearchHome');
  }

  const handleBookPress = () => {
    setBookPressed(true);
  };

  const styles = StyleSheet.create({
    container: {
      width: wp(100),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(1.85),
      marginLeft: 8,
    },
    DoctorText: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 28,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 40,
    },
    ArrowImage: {
      marginRight: wp(0),
      marginTop: 7.5,
    },
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(95),
      marginLeft: wp(5.86),
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(1.35),
    },
    DoctorImage: {
      width: wp(12.2),
      height: hp(5.7),
      borderRadius: 23,
      overflow: 'hidden',
      borderWidth: 1.7,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 3,
      marginLeft: 3,
      marginTop: 4
    },
    DoctorBorderImage: {
      position: "absolute"
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(40),
      flexDirection: 'column',
    },
    TextName: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 20,
    },
    TextSpecialist: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    TextArea: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    ButtonView: {
      marginLeft: wp(12.25),
      flexDirection: 'row',
    },
    DoctorButton: {
      borderRadius: 31,
      borderWidth: 1,
      borderColor: '#1A936F',
      height: hp(3),
      width: wp(19),
    },
    DoctorButtonHovered: {
      backgroundColor: '#147e5a',
    },
    buttonText: {
      color: '#1A936F',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 16,
      textAlign: 'center',
      marginTop: 3,
    },
  });

  return (
    <SafeAreaView style={{height: hp(100)}}>
      <View style={styles.container}>
        <View style={styles.ViewWrapper}>
          <TouchableOpacity onPress={handleArrowClick}>
            {isDarkMode ? (
              <Image style={styles.ArrowImage} source={LeftArrowDark} />
            ) : (
              <Image style={styles.ArrowImage} source={LeftArrow} />
            )}
          </TouchableOpacity>
          <Text style={styles.DoctorText}>My Doctors</Text>
        </View>
        <ScrollView
          style={styles.ScrollArea}
          showsVerticalScrollIndicator={false}>
          <View style={styles.DoctorsCard}>
            {myDoctorsData.map(doctor => (
              <View style={styles.DoctorCard} key={doctor.key}>
                <Image style={styles.DoctorImage} source={doctor.image} />
                <Image style={styles.DoctorBorderImage} source={Border} />
                <View style={styles.DoctorTextView}>
                  <Text style={styles.TextName}>{doctor.name}</Text>
                  <Text style={styles.TextSpecialist}>{doctor.specialist}</Text>
                  <Text style={styles.TextArea}>{doctor.area}</Text>
                </View>
                <View style={styles.ButtonView}>
                  <TouchableOpacity
                    onPress={handleBookPress}
                    style={[
                      styles.DoctorButton,
                      isBookPressed && styles.DoctorButtonHovered,
                    ]}>
                    <Text style={styles.buttonText}>Book a call</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
          <View style={{marginTop: 70}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MyDoctorScreen;
