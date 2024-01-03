import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import DoctorImage1 from '../../../assets/searchSection/DoctorImage.png';
import DoctorImage2 from '../../../assets/searchSection/DoctorImage2.png';
import DoctorImage3 from '../../../assets/searchSection/DoctorImage3.png';

const MyDoctorScreen = () => {
  const navigation = useNavigation();
  const [isBookPressed, setBookPressed] = useState(false);

  const myDoctorsData = [
    {
      key: '1',
      name: 'Dr. Pramod Hari Mahajan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage1,
    },
    {
      key: '2',
      name: 'Dr. Hariprakash Chauhan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage2,
    },
    {
      key: '3',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage3,
    },
    {
      key: '4',
      name: 'Dr. Pramod Hari Mahajan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage1,
    },
    {
      key: '5',
      name: 'Dr. Hariprakash Chauhan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage2,
    },
    {
      key: '6',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage3,
    },
    {
      key: '7',
      name: 'Dr. Pramod Hari Mahajan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage1,
    },
    {
      key: '8',
      name: 'Dr. Hariprakash Chauhan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage2,
    },
    {
      key: '9',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage3,
    },
    {
      key: '10',
      name: 'Dr. Pramod Hari Mahajan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage1,
    },
    {
      key: '11',
      name: 'Dr. Hariprakash Chauhan',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage2,
    },
    {
      key: '12',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage3,
    },
    {
      key: '13',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage1,
    },
    {
      key: '14',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage2,
    },
    {
      key: '15',
      name: 'Dr. Garge Hari R',
      specialist: 'Neurosurgeon',
      area: 'Bandra (W)',
      image: DoctorImage3,
    },
  ];

  function handleArrowClick() {
    navigation.navigate('SearchHome');
  }

  const handleBookPressIn = () => {
    setBookPressed(true);
  };

  const handleBookPressOut = () => {
    setBookPressed(false);
  };

  const styles = StyleSheet.create({
    container: {
      width: wp(90),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(1.85),
      marginLeft: wp(-5),
    },
    DoctorText: {
      color: '#000',
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
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(1.35),
    },
    DoctorImage: {
      width: wp(13),
      height: wp(13),
      borderRadius: 23,
      overflow: 'hidden',
      borderWidth: 1.7,
      borderColor: '#FFF',
      borderColor: '#E923BD',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 3,
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(40),
      flexDirection: 'column',
    },
    TextName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 20,
    },
    TextSpecialist: {
      color: '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    TextArea: {
      color: '#000',
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
    ScrollArea: {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image style={styles.ArrowImage} source={LeftArrow} />
        </TouchableOpacity>
        <Text style={styles.DoctorText}>My Doctors</Text>
      </View>
      <ScrollView style={styles.ScrollArea} showsVerticalScrollIndicator={false}>
        <View style={styles.DoctorsCard}>
          {myDoctorsData.map(doctor => (
            <View style={styles.DoctorCard} key={doctor.key}>
              <Image style={styles.DoctorImage} source={doctor.image} />
              <View style={styles.DoctorTextView}>
                <Text style={styles.TextName}>{doctor.name}</Text>
                <Text style={styles.TextSpecialist}>{doctor.specialist}</Text>
                <Text style={styles.TextArea}>{doctor.area}</Text>
              </View>
              <View style={styles.ButtonView}>
                <TouchableOpacity
                  // onPressIn={handleBookPressIn}
                  // onPressOut={handleBookPressOut}
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
      </ScrollView>
    </View>
  );
};

export default MyDoctorScreen;
