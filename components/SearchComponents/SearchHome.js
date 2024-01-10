import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Header from './Components/Header';
import CustomSearchBar from './Components/CustomSearchBar';
import MyDoctors from './Components/MyDoctors';
import TrendingIssues from './Components/TrendingIssues';
import TrendingSpecialist from './Components/TrendingSpecialist';

const SearchHome = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    Header: {
      position: 'absolute',
      backgroundColor: '#fff',
    },
    ScrollArea: {
      height: hp(70),
      marginTop: wp(40),
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Header />
        <CustomSearchBar />
      </View>
      <ScrollView style={styles.ScrollArea}>
        <MyDoctors />
        <TrendingIssues />
        <TrendingSpecialist />
        <View style={{margin: 25}} />
      </ScrollView>
    </View>
  );
};

export default SearchHome;
