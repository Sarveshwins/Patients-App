import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import Medicines from '../../../assets/issues/Medicines.png';

const Specailist = () => {
  const navigation = useNavigation();

  const leftSideData = [
    {
      FirstName: 'Diabetes',
    },
    {
      FirstName: 'Dietation /',
      LastName: 'Nutritionist',
    },
    {
      FirstName: 'Low BP',
    },
    {
      FirstName: 'Acne /',
      LastName: 'Pimples',
    },
    {
      FirstName: 'Depression',
    },
    {
      FirstName: 'Weight Loss',
    },
    {
      FirstName: 'Pregnancy',
    },
    {
      FirstName: 'Acne /',
      LastName: 'Pimples',
    },
    {
      FirstName: 'Depression',
    },
    {
      FirstName: 'Weight Loss',
    },
  ];

  const rightSideData = [
    {
      FirstName: 'Knee Pain',
    },
    {
      FirstName: 'Infertitily',
    },
    {
      FirstName: 'Headache',
    },
    {
      FirstName: 'Piles',
    },
    {
      FirstName: 'Diarrhoea',
    },
    {
      FirstName: 'Back Pain',
    },
    {
      FirstName: 'Piles',
    },
    {
      FirstName: 'Diarrhoea',
    },
    {
      FirstName: 'Back Pain',
    },
  ];

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
    IssuesWrapper: {
      flexDirection: 'row',
    },
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(45),
      marginLeft: wp(0),
    },
    DoctorsCard2: {
      flexDirection: 'column',
      marginTop: hp(10),
      width: wp(45),
      marginLeft: wp(0),
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(8),
    },
    DoctorImage: {
      width: wp(13),
      height: wp(13),
      overflow: 'hidden',
      //backgroundColor: '#C4C4C4',
      //flex: 1,
      resizeMode: 'cover',
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(40),
      flexDirection: 'column',
      verticalAlign: 'middle',
      height: wp(13),
    },
    TextName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      marginTop: 20,
    },
    TextName2: {
      color: '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      marginTop: 16,
    },
    TextName3: {
      color: '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      verticalAlign: 'middle',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image style={styles.ArrowImage} source={LeftArrow} />
        </TouchableOpacity>
        <Text style={styles.DoctorText}>Speciality</Text>
      </View>
      <ScrollView style={styles.ScrollArea} showsVerticalScrollIndicator={false}>
        <View style={styles.IssuesWrapper}>
          <View style={styles.DoctorsCard}>
            {leftSideData.map(issuse => (
              <View style={styles.DoctorCard} key={issuse.key}>
                <Image style={styles.DoctorImage} source={Medicines} />
                <View style={styles.DoctorTextView}>
                  {issuse.FirstName && issuse.LastName ? (
                    <>
                      <Text style={styles.TextName2}>{issuse.FirstName}</Text>
                      <Text style={styles.TextName3}>{issuse.LastName}</Text>
                    </>
                  ) : (
                    <Text style={styles.TextName}>{issuse.FirstName}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>

          <View style={styles.DoctorsCard2}>
            {rightSideData.map(issuse => (
              <View style={styles.DoctorCard} key={issuse.key}>
                <Image style={styles.DoctorImage} source={Medicines} />
                <View style={styles.DoctorTextView}>
                  {issuse.FirstName && issuse.LastName ? (
                    <>
                      <Text style={styles.TextName2}>{issuse.FirstName}</Text>
                      <Text style={styles.TextName3}>{issuse.LastName}</Text>
                    </>
                  ) : (
                    <Text style={styles.TextName}>{issuse.FirstName}</Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Specailist;
