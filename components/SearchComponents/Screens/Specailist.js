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
import {useRecentSearch} from '../RecentSearchContext';
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';
import Medicines from '../../../assets/issues/Medicines.png';

const Specailist = () => {
  const navigation = useNavigation();
  const {leftSideSpecialityData, rightSideSpecialityData} = useRecentSearch();
  const {isDarkMode} = useTheme();

  function handleArrowClick() {
    navigation.navigate('SearchHome');
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
    IssuesWrapper: {
      flexDirection: 'row',
    },
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(45),
      marginLeft: wp(5.86),
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
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      marginTop: 20,
    },
    TextName2: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      marginTop: 16,
    },
    TextName3: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 13,
      verticalAlign: 'middle',
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
          <Text style={styles.DoctorText}>Speciality</Text>
        </View>
        <ScrollView
          style={styles.ScrollArea}
          showsVerticalScrollIndicator={false}>
          <View style={styles.IssuesWrapper}>
            <View style={styles.DoctorsCard}>
              {leftSideSpecialityData.map(issuse => (
                <View style={styles.DoctorCard} key={issuse.id}>
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
              {rightSideSpecialityData.map(issuse => (
                <View style={styles.DoctorCard} key={issuse.id}>
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
    </SafeAreaView>
  );
};

export default Specailist;
