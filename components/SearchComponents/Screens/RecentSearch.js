import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  SafeAreaView,
  TouchableHighlight,
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
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import darkSearchIcon from '../../../assets/searchSection/searchIconDark.png';
import TrendingIssues from '../Components/TrendingIssues';
import TrendingSpecialist from '../Components/TrendingSpecialist';
import Cross from '../../../assets/searchSection/cross.png';
import CrossDark from '../../../assets/searchSection/crossDark.png';

const RecentSearch = () => {
  const navigation = useNavigation();
  const {allSelectedItems} = useRecentSearch();
  const {isDarkMode} = useTheme();

  function handleArrowClick() {
    navigation.navigate('SearchHome');
  }

  const truncateName = name => {
    const maxLength = 11;
    if (name.length > maxLength) {
      return `${name.substring(0, 8)}..`;
    } else {
      return name;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    Header: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
      flexDirection: 'column',
    },
    headerWrapper: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(77),
      flexDirection: 'row',
      alignSelf: 'center',
      borderRadius: 22,
      backgroundColor: isDarkMode ? 'rgba(158, 158, 158, 0.60)' : '#F2F2F2',
      marginTop: hp(3),
      paddingLeft: 10,
    },
    ArrowImage: {
      marginLeft: wp(1),
      marginRight: wp(1.5),
      marginTop: hp(4.3),
    },
    searchIcon: {
      width: wp(5),
      height: hp(2.46),
      marginRight: wp(0.6),
      marginTop: hp(1.6),
    },
    input: {
      fontSize: 13,
      color: isDarkMode ? '#fff' : '#000',
    },
    CrossWrapper: {
      position: 'absolute',
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(90),
      marginTop: hp(4.8),
      height: 22,
      width: 22
    },
    RecentSearchView: {
      flexDirection: 'column',
      marginTop: 15,
      marginLeft: wp(5),
    },
    RecentSearchTextView: {},
    RecentSearchText: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 24,
    },
    RecentScrollView: {
      marginLeft: 25,
      marginRight: 10,
      marginTop: 21,
      flexDirection: 'column',
      alignContent: 'center',
      textAlign: 'center',
      marginBottom: 15
    },
    RecentName: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
      width: 80,
      textAlign: 'center',
    },
    hexagonContainer: {
      alignSelf: 'center',
      width: wp(15),
      height: hp(6.9),
      aspectRatio: 1,
      overflow: 'hidden',
      transform: [{rotate: '-45deg'}],
    },
    RecentImage: {
      width: '100%',
      height: '100%',
      transform: [{rotate: '45deg'}],
    },
    DataCard: {
      flexDirection: 'column',
      alignSelf: 'center',
    },
    ScrollArea: {
      height: hp(90),
    },
  });

  return (
    <SafeAreaView style={{height: hp(100)}}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={handleArrowClick}>
              {isDarkMode ? (
                <Image style={styles.ArrowImage} source={LeftArrowDark} />
              ) : (
                <Image style={styles.ArrowImage} source={LeftArrow} />
              )}
            </TouchableOpacity>
            <View style={styles.searchBarContainer}>
              {isDarkMode ? (
                <Image source={darkSearchIcon} style={styles.searchIcon} />
              ) : (
                <Image source={searchIcon} style={styles.searchIcon} />
              )}
              <TextInput
                style={styles.input}
                placeholder="Search for Doctor’s, Clinic’s, Services & more.."
                placeholderTextColor={isDarkMode ? '#fff' : '#A5A5A5'}
                onPress={() => navigation.navigate('Search')}
                onPressIn={() => navigation.navigate('Search')}
              />
            </View>
            <TouchableHighlight style={styles.CrossWrapper}>
              {isDarkMode ? (
                <Image style={styles.CrossImage} source={CrossDark} />
              ) : (
                <Image style={styles.CrossImage} source={Cross} />
              )}
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.RecentSearchView}>
          <View style={styles.RecentSearchTextView}>
            <Text style={styles.RecentSearchText}>Recent Search</Text>
          </View>
        </View>
        <ScrollView style={styles.ScrollArea}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {allSelectedItems.map(data => (
              <View style={styles.RecentScrollView} key={data.id}>
                {data.name ? (
                  <View style={styles.DataCard}>
                    <View style={styles.hexagonContainer}>
                      <Image style={styles.RecentImage} source={data.image} />
                    </View>
                    <Text style={styles.RecentName}>
                      {truncateName(data.name)}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.DataCard}>
                    <View style={styles.hexagonContainer}>
                      <Image style={styles.RecentImage} source={data.image} />
                    </View>
                    <Text style={styles.RecentName}>
                      {truncateName(data.firstName)}
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </ScrollView>
          <TrendingIssues />
          <TrendingSpecialist />
          <View style={{margin: 25}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RecentSearch;
