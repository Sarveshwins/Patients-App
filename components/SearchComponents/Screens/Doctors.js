import React from 'react';
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
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';
import Border from '../../../assets/searchSection/borderImage.png';

const Doctors = ({route}) => {
  const {doctorList, filteredDoctors} = route.params;
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();

  function handleArrowClick() {
    //navigation.navigate('SearchHome');
    navigation.navigate('MainContainer', {screen: 'SearchHome'});
  }

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
      marginLeft: wp(0),
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
      marginLeft: wp(5),
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(1.35),
      height: hp(7.5),
      width: wp(88),
      borderBottomColor: '#fff',
      borderBottomWidth: 0.5,
    },
    DoctorImage: {
      width: wp(12.2),
      height: hp(5.7),
      borderRadius: 23,
      overflow: 'hidden',
      borderWidth: 1.7,
      //borderColor: isDarkMode ? '#000' : '#E923BD',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 3,
      marginLeft: 3,
      marginTop: 4,
    },
    DoctorBorderImage: {
      position: 'absolute',
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(35),
      flexDirection: 'column',
      marginTop: 6,
    },
    TextName: {
      color: isDarkMode ? '#fff' : '#212121',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 22,
    },
    TextSpecialist: {
      color: isDarkMode ? '#fff' : '#777',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
    },
    ButtonView: {
      marginLeft: wp(1),
      flexDirection: 'row',
      marginTop: hp(2),
    },
    DoctorButton: {
      width: wp(15.46),
      height: hp(2.95),
      borderRadius: 10,
      backgroundColor: isDarkMode ? '#000' : '#1A936F',
      borderColor: isDarkMode ? '#1A936F' : undefined,
      borderWidth: 1,
      marginTop: 13,
      marginLeft: 7,
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
    ScrollArea: {
      height: hp(100),
      marginBottom: 85,
    },
  });

  const renderItem = ({item}) => (
    <View style={styles.DoctorCard}>
      <Image style={styles.DoctorImage} source={item.image} />
      <Image style={styles.DoctorBorderImage} source={Border} />
      <View style={styles.DoctorTextView}>
        <Text style={styles.TextName}>{item.firstName}</Text>
        <Text style={styles.TextSpecialist}>{item.lastName}</Text>
      </View>
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.DoctorButton}>
          <Text style={styles.buttonText}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.DoctorButton}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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
          <Text style={styles.DoctorText}>Doctors</Text>
        </View>
        <ScrollView
          style={styles.ScrollArea}
          showsVerticalScrollIndicator={false}>
          {doctorList ? (
            <View style={styles.DoctorsCard}>
              {doctorList.map(doctor => (
                <View style={styles.DoctorCard} key={doctor.id}>
                  <Image style={styles.DoctorImage} source={doctor.image} />
                  <Image style={styles.DoctorBorderImage} source={Border} />
                  <View style={styles.DoctorTextView}>
                    <Text style={styles.TextName}>{doctor.firstName}</Text>
                    <Text style={styles.TextSpecialist}>{doctor.lastName}</Text>
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
              ))}
            </View>
          ) : (
            <View style={styles.DoctorsCard}>
              {filteredDoctors.map(doctor => (
                <View style={styles.DoctorCard} key={doctor.id}>
                  <Image style={styles.DoctorImage} source={doctor.image} />
                  <Image style={styles.DoctorBorderImage} source={Border} />
                  <View style={styles.DoctorTextView}>
                    <Text style={styles.TextName}>{doctor.firstName}</Text>
                    <Text style={styles.TextSpecialist}>{doctor.lastName}</Text>
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
              ))}
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Doctors;
