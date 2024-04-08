import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useRecentSearch} from '../RecentSearchContext';
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';

const Issues = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();

  const {leftSideIssueData, rightSideIssueData} = useRecentSearch();

  function handleArrowClick() {
    // navigation.navigate('SearchHome');
    navigation.navigate('MainContainer', {screen: 'SearchHome'});
  }

  const renderLeftItem = ({item}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',

        marginLeft: 8,
      }}>
      <View style={styles.DoctorCard} key={item.id}>
        <Image style={styles.DoctorImage} source={item.image} />
        <View style={styles.DoctorTextView}>
          {item.FirstName && item.LastName ? (
            <>
              <Text style={styles.TextName2}>{item.FirstName}</Text>
              <Text style={styles.TextName3}>{item.LastName}</Text>
            </>
          ) : (
            <Text style={styles.TextName}>{item.FirstName}</Text>
          )}
        </View>
      </View>
      <View style={styles.DoctorCard2} key={item.id}>
        <Image style={styles.DoctorImage} source={item.image} />
        <View
          style={{
            marginLeft: wp(3.2),
            width: wp(30),
            flexDirection: 'column',
            verticalAlign: 'middle',

            height: wp(13),
          }}>
          {item.FirstName && item.LastName ? (
            <>
              <Text style={styles.TextName2}>{item.FirstName}</Text>
              <Text style={styles.TextName3}>{item.LastName}</Text>
            </>
          ) : (
            <Text style={styles.TextName}>{item.FirstName}</Text>
          )}
        </View>
      </View>
    </View>
  );

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
      marginTop: 10,
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
      // flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(45),
      // marginLeft: wp(5.86),
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
    DoctorCard2: {
      flexDirection: 'row',
      marginTop: hp(8),
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
      width: wp(30),
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
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.ViewWrapper}>
          <TouchableOpacity onPress={handleArrowClick}>
            {isDarkMode ? (
              <Image style={styles.ArrowImage} source={LeftArrowDark} />
            ) : (
              <Image style={styles.ArrowImage} source={LeftArrow} />
            )}
          </TouchableOpacity>
          <Text style={styles.DoctorText}>Issues</Text>
        </View>
        <FlatList
          data={leftSideIssueData}
          renderItem={renderLeftItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />

        {/* <View style={styles.DoctorsCard2}>
              <FlatList
                data={rightSideIssueData}
                renderItem={renderRightItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Issues;
