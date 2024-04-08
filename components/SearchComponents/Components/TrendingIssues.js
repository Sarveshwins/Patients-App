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

const TrendingIssues = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const {leftSideIssueData, rightSideIssueData} = useRecentSearch();

  function handleArrowClick() {
    navigation.navigate('Issues');
  }
  const renderIssueItem = ({item}) => (
    <View key={item.id} style={styles.ImageView}>
      <Image style={styles.TrendingImage} source={item.image} />
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
      //alignSelf: 'center',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      //alignSelf: "center",
      //verticalAlign: "middle",
      marginTop: hp(1),
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
      marginLeft: wp(43),
      marginTop: 6,
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
        <Text style={styles.DoctorText}>Trending Issues</Text>
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
            <FlatList
              data={leftSideIssueData}
              renderItem={renderIssueItem}
              keyExtractor={item => item.id.toString()}
              horizontal
            />
          </View>
          <View style={styles.ImagesRow2}>
            {rightSideIssueData.map(issue => (
              <View key={issue.id} style={styles.ImageView}>
                <Image style={styles.TrendingImage} source={issue.image} />
                <View style={styles.ImageTextView}>
                  <Text style={styles.TextName}>{issue.FirstName}</Text>
                  {issue.LastName && (
                    <Text style={styles.TextName}>{issue.LastName}</Text>
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

export default TrendingIssues;
