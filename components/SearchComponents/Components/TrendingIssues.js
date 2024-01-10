import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import Covid from '../../../assets/searchSection/Covid.png';
import Diarrhea from '../../../assets/searchSection/Diarrhea.png';
import Dengue from '../../../assets/searchSection/Dengue.png';
import Diabetes from '../../../assets/searchSection/Diabetes.png';
import LowBP from '../../../assets/searchSection/LowBP.png';
import Constipation from '../../../assets/searchSection/Constipation.png';
import Malaria from '../../../assets/searchSection/Malaria.png';
import Headache from '../../../assets/searchSection/Headache.png';

const TrendingIssues = () => {
  const navigation = useNavigation();

  function handleArrowClick() {
    navigation.navigate('Issues');
  }

  const styles = StyleSheet.create({
    container: {
      width: wp(100),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(1.85),
      marginLeft: wp(5),
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
      marginLeft: wp(43.5),
    },
    ImagesContainer: {
      marginTop: hp(2.5),
      marginLeft: 10,
    },
    ImagesRow: {
      flexDirection: 'row',
      //width: wp(85.3),
    },
    ImagesRow2: {
      flexDirection: 'row',
      //width: wp(85.3),
      marginTop: 12,
    },
    ImageView: {
      flexDirection: 'column',
      marginRight: wp(5.5),
      alignItems: 'center',
      width: wp(19),
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
        <Text style={styles.DoctorText}>Trending Issues</Text>
        <TouchableOpacity onPress={handleArrowClick}>
          <Image style={styles.RighArrowImage} source={RightArrow} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.ImagesContainer}>
          <View style={styles.ImagesRow}>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Covid} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Covid</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Diarrhea} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Diarrhea </Text>
                <Text style={styles.TextName}>Diarrhea </Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Dengue} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Dengue</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Diabetes} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Diabetes</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Malaria} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Malaria</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Headache} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Headache</Text>
              </View>
            </View>
          </View>
          <View style={styles.ImagesRow2}>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={LowBP} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Low BP</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Constipation} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Constipation </Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Malaria} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Malaria</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Headache} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Headache</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Malaria} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Malaria</Text>
              </View>
            </View>
            <View style={styles.ImageView}>
              <Image style={styles.TrendingImage} source={Headache} />
              <View style={styles.ImageTextView}>
                <Text style={styles.TextName}>Headache</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrendingIssues;
