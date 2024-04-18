import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRecentSearch} from '../RecentSearchContext';
import {useTheme} from '../../ThemeContext';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import RightArrowDark from '../../../assets/searchSection/RightArrowIconDark.png';
// import Dietian from '../../../assets/searchSection/Dietian.png';
// import Ophtalmologist from '../../../assets/searchSection/Ophtalmologist.png';
// import Ayurveda from '../../../assets/searchSection/Ayurveda.png';
import Medicines from '../../../assets/issues/Medicines.png';

const TrendingSpecialist = () => {
  const navigation = useNavigation();
  const {leftSideSpecialityData, rightSideSpecialityData} = useRecentSearch();
  const {isDarkMode} = useTheme();

  function handleArrowClick() {
    navigation.navigate('Specailist');
  }
  const renderSpecialityItem = ({item, index}) => (
    <View key={index} style={styles.ImageView}>
      <Image style={styles.TrendingImage} source={Medicines} />
      <View style={styles.ImageTextView}>
        <Text style={styles.TextName}>{item.FirstName}</Text>
        {item.LastName && <Text style={styles.TextName}>{item.LastName}</Text>}
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      width: wp(100),
      flexDirection: 'column',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      marginTop: hp(3.73),
    },
    DoctorText: {
      marginLeft: wp(5),
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SF Pro Display',
      fontSize: 22,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: undefined,
    },
    RighArrowImage: {
      marginLeft: wp(32),
      marginTop: 6,
    },
    ImagesContainer: {
      marginTop: hp(2.5),
      //marginLeft: -16,
      marginBottom: '8%',
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
      overlayColor: isDarkMode ? 'white' : 'lightgray',
    },
    ImageTextView: {
      justifyContent: 'center',
      marginTop: 5,
    },
    TextName: {
      color: isDarkMode ? '#fff' : '#000',
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
          {isDarkMode ? (
            <Image style={styles.RighArrowImage} source={RightArrowDark} />
          ) : (
            <Image style={styles.RighArrowImage} source={RightArrow} />
          )}
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.ImagesContainer}>
          <View style={styles.ImagesRow}>
            {/* {leftSideSpecialityData.map((speciality, index) => (
              <View key={index} style={styles.ImageView}>
                <Image style={styles.TrendingImage} source={Medicines} />
                <View style={styles.ImageTextView}>
                  <Text style={styles.TextName}>{speciality.FirstName}</Text>
                  {speciality.LastName && (
                    <Text style={styles.TextName}>{speciality.LastName}</Text>
                  )}
                </View>
              </View>
            ))} */}
            <FlatList
              data={leftSideSpecialityData}
              renderItem={renderSpecialityItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View>
          <View style={styles.ImagesRow2}>
            <FlatList
              data={rightSideSpecialityData}
              renderItem={renderSpecialityItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TrendingSpecialist;
