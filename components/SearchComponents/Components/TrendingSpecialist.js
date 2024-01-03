import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import Dietian from '../../../assets/searchSection/Dietian.png';
import Ophtalmologist from '../../../assets/searchSection/Ophtalmologist.png';
import Ayurveda from '../../../assets/searchSection/Ayurveda.png';

const TrendingSpecialist = () => {
  const navigation = useNavigation();

  function handleArrowClick() {
    navigation.navigate('Specailist');
  }

  const styles = StyleSheet.create({
    container: {
      width: wp(90),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
      marginTop: hp(3),
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(1.85),
    },
    DoctorText: {
      color: '#000',
      fontFamily: 'SF Pro Display',
      fontSize: 22,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: undefined,
    },
    RighArrowImage: {
      marginLeft: wp(31.5),
    },
    ImagesContainer: {
      marginTop: hp(2.5),
      marginLeft: -16,
    },
    ImagesRow: {
      flexDirection: 'row',
      //width: wp(85.3),
    },
    ImagesRow2: {
      flexDirection: 'row',
      //width: wp(85.3),
      marginTop: 20,
    },
    ImageView: {
      flexDirection: 'column',
      marginRight: wp(11),
      alignItems: 'center',
      width: wp(25),
    },
    TrendingImage: {
      resizeMode: 'cover',
      justifyContent: 'center',
      overlayColor: 'lightgray',
    },
    ImageTextView: {
      justifyContent: 'center',
      marginTop: 5,
    },
    TextName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 18,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <Text style={styles.DoctorText}>Trending Specialities</Text>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image style={styles.RighArrowImage} source={RightArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.ImagesContainer}>
        <View style={styles.ImagesRow}>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Dietian} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Dietian /</Text>
              <Text style={styles.TextName}>Nutrition</Text>
            </View>
          </View>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Ophtalmologist} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Ophtalmologist </Text>
            </View>
          </View>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Ayurveda} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Ayurveda</Text>
            </View>
          </View>
        </View>
        <View style={styles.ImagesRow2}>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Dietian} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Dietian /</Text>
              <Text style={styles.TextName}>Nutrition</Text>
            </View>
          </View>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Ophtalmologist} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Ophtalmologist </Text>
            </View>
          </View>
          <View style={styles.ImageView}>
            <Image style={styles.TrendingImage} source={Ayurveda} />
            <View style={styles.ImageTextView}>
              <Text style={styles.TextName}>Ayurveda</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrendingSpecialist;
