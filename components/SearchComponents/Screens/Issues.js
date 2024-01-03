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
import Acne from '../../../assets/issues/Acne.png';
import BackPain from '../../../assets/issues/BackPain.png';
import Depression from '../../../assets/issues/Depression.png';
import Diabetes from '../../../assets/issues/Diabetes.png';
import Diarrhoea from '../../../assets/issues/Diarrhoea.png';
import Dietation from '../../../assets/issues/Dietation.png';
import Headache from '../../../assets/issues/Headache.png';
import Infertitily from '../../../assets/issues/Infertitily.png';
import KneePain from '../../../assets/issues/KneePain.png';
import LowBP from '../../../assets/issues/LowBP.png';
import Piles from '../../../assets/issues/Piles.png';
import Pregnancy from '../../../assets/issues/Pregnancy.png';
import WeightLoss from '../../../assets/issues/WeightLoss.png';

const Issues = () => {
  const navigation = useNavigation();

  const leftSideData = [
    {
      id: 1,
      FirstName: 'Diabetes',
      image: Diabetes,
    },
    {
      id: 2,
      FirstName: 'Dietation /',
      LastName: 'Nutritionist',
      image: Dietation,
    },
    {
      id: 3,
      FirstName: 'Low BP',
      image: LowBP,
    },
    {
      id: 4,
      FirstName: 'Acne /',
      LastName: 'Pimples',
      image: Acne,
    },
    {
      id: 5,
      FirstName: 'Depression',
      image: Depression,
    },
    {
      id: 6,
      FirstName: 'Weight Loss',
      image: WeightLoss,
    },
    {
      id: 7,
      FirstName: 'Pregnancy',
      image: Pregnancy,
    },
    {
      id: 8,
      FirstName: 'Acne /',
      LastName: 'Pimples',
      image: Acne,
    },
    {
      id: 9,
      FirstName: 'Depression',
      image: Depression,
    },
    {
      id: 10,
      FirstName: 'Weight Loss',
      image: WeightLoss,
    },
  ];

  const rightSideData = [
    {
      id: 1,
      FirstName: 'Knee Pain',
      image: KneePain,
    },
    {
      id: 2,
      FirstName: 'Infertitily',
      image: Infertitily,
    },
    {
      id: 3,
      FirstName: 'Headache',
      image: Headache,
    },
    {
      id: 4,
      FirstName: 'Piles',
      image: Piles,
    },
    {
      id: 5,
      FirstName: 'Diarrhoea',
      image: Diarrhoea,
    },
    {
      id: 6,
      FirstName: 'Back Pain',
      image: BackPain,
    },
    {
      id: 7,
      FirstName: 'Piles',
      image: Piles,
    },
    {
      id: 8,
      FirstName: 'Diarrhoea',
      image: Diarrhoea,
    },
    {
      id: 9,
      FirstName: 'Back Pain',
      image: BackPain,
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
      borderRadius: 57,
      backgroundColor: '#C4C4C4',
      overflow: 'hidden',
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
        <Text style={styles.DoctorText}>Issues</Text>
      </View>
      <ScrollView
        style={styles.ScrollArea}
        showsVerticalScrollIndicator={false}>
        <View style={styles.IssuesWrapper}>
          <View style={styles.DoctorsCard}>
            {leftSideData.map(issuse => (
              <View style={styles.DoctorCard} key={issuse.id}>
                <Image style={styles.DoctorImage} source={issuse.image} />
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
              <View style={styles.DoctorCard} key={issuse.id}>
                <Image style={styles.DoctorImage} source={issuse.image} />
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

export default Issues;
