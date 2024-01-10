import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRecentSearch} from '../RecentSearchContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import PolyGon from '../../../assets/searchSection/Polygon.png';
import PolyGonC from '../../../assets/searchSection/PolygonC.png';
import clinicBanner from '../../../assets/searchSection/clinicBanner.png';
import doctorBanner from '../../../assets/searchSection/doctorBanner.png';
import TrendingIssues from '../Components/TrendingIssues';
import TrendingSpecialist from '../Components/TrendingSpecialist';

const RecentSearch = () => {
  const navigation = useNavigation();
  const {allSelectedItems} = useRecentSearch();
  const [searchText, setSearchText] = useState('');

  function handleArrowClick() {
    navigation.navigate('SearchHome');
  }

  const truncateName = name => {
    const maxLength = 11;

    // Check if the name length exceeds the maximum length
    if (name.length > maxLength) {
      // Truncate the name to the first 10 letters and add a dot at the end
      return `${name.substring(0, 8)}..`;
    } else {
      // If the name is within the limit, return the original name
      return name;
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    Header: {
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    headerWrapper: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(86),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
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
      flex: 1,
      fontSize: 15,
      color: '#000',
      paddingHorizontal: 20,
    },
    RecentSearchView: {
      flexDirection: 'column',
      marginTop: 15,
      marginLeft: wp(5),
    },
    RecentSearchTextView: {},
    RecentSearchText: {
      color: '#000',
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
    },
    RecentName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
      width: 80,
      textAlign: 'center',
    },
    hexagonContainer: {
      alignSelf: "center",
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
      //position: 'absolute',
      height: hp(90),
      //marginTop: wp(26),
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={handleArrowClick}>
            <Image style={styles.ArrowImage} source={LeftArrow} />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              style={styles.input}
              placeholder="Search for Doctor’s, Clinic’s, Services & more.."
              placeholderTextColor="#A5A5A5"
              onPress={() => navigation.navigate('Search')}
              onPressIn={() => navigation.navigate('Search')}
            />
          </View>
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
  );
};

export default RecentSearch;
