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

const Clinics = ({route}) => {
  const {clinicsNameList, filteredClinics} = route.params;
  const navigation = useNavigation();

  function handleArrowClick() {
    navigation.navigate('SearchHome');
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
      // borderRadius: 23,
      // overflow: 'hidden',
      // borderWidth: 1.7,
      // borderColor: '#FFF',
      // borderColor: '#E923BD',
      // shadowColor: '#000',
      // shadowOffset: {width: 0, height: 2},
      // shadowOpacity: 0.35,
      // shadowRadius: 3,
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(80),
      flexDirection: 'column',
      alignSelf: "center"
    },
    TextName: {
      color: '#212121',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 22,
    },
    TextSpecialist: {
      color: '#777',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
    },
    ButtonView: {
      marginLeft: wp(2.25),
      flexDirection: 'row',
    },
    DoctorButton: {
      width: wp(12.26),
      height: hp(4),
      borderRadius: 10,
      backgroundColor: '#1A936F',
      margin: 7,
      marginTop: 15,
    },
    DoctorButtonHovered: {
      backgroundColor: '#147e5a',
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 22,
      textAlign: 'center',
      marginTop: 4,
    },
    ScrollArea: {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image style={styles.ArrowImage} source={LeftArrow} />
        </TouchableOpacity>
        <Text style={styles.DoctorText}>Clinics</Text>
      </View>
      <ScrollView
        style={styles.ScrollArea}
        showsVerticalScrollIndicator={false}>
        {clinicsNameList ? (
          <View style={styles.DoctorsCard}>
            {clinicsNameList.map(clinic => (
              <View style={styles.DoctorCard} key={clinic.id}>
                <Image style={styles.DoctorImage} source={clinic.image} />
                <View style={styles.DoctorTextView}>
                  <Text style={styles.TextName}>{clinic.name}</Text>
                  <Text style={styles.TextSpecialist}>
                    {clinic.field} | {clinic.location}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.DoctorsCard}>
            {filteredClinics.map(clinic => (
              <View style={styles.DoctorCard} key={clinic.id}>
                <Image style={styles.DoctorImage} source={clinic.image} />
                <View style={styles.DoctorTextView}>
                  <Text style={styles.TextName}>{clinic.name}</Text>
                  <Text style={styles.TextSpecialist}>
                    {clinic.field} | {clinic.location}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Clinics;
