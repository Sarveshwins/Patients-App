import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTheme} from '../ThemeContext';
import Header from './Components/Header';
import CustomSearchBar from './Components/CustomSearchBar';
import MyDoctors from './Components/MyDoctors';
import TrendingIssues from './Components/TrendingIssues';
import TrendingSpecialist from './Components/TrendingSpecialist';

const SearchHome = () => {
  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    Header: {
      position: 'absolute',
      backgroundColor: isDarkMode ? '#000' : '#fff',
    },
    ScrollArea: {
      height: hp(70),
      marginTop: wp(40),
    },
  });

  return (
    <SafeAreaView style={{height: hp(100),backgroundColor:'white'}}>
      <View style={styles.container}>
        <View style={styles.Header}>
          <Header />
          <CustomSearchBar />
        </View>
        <ScrollView style={styles.ScrollArea}>
          <MyDoctors />
          <TrendingIssues />
          <TrendingSpecialist />
          <View style={{margin: 5}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchHome;
