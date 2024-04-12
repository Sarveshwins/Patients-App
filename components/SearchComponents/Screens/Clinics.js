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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../ThemeContext';

import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';

const Clinics = ({route}) => {
  const {clinicsNameList, filteredClinics} = route.params;
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();

  function handleArrowClick() {
    // navigation.navigate('SearchHome');
    navigation.navigate('MainContainer', {screen: 'SearchHome'});
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
      marginLeft: wp(0),
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
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(95),
      marginLeft: wp(5),
    },
    DoctorCard: {
      flexDirection: 'row',
      height: hp(7),
      width: wp(88),
      marginBottom: hp(1.25),
      borderBottomColor: '#fff',
      borderBottomWidth: 0.5,
    },
    DoctorImage: {
      width: wp(12.2),
      height: hp(5.7),
    },
    DoctorBorderImage: {
      position: 'absolute',
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(70),
      flexDirection: 'column',
      marginTop: 4.5,
    },
    TextName: {
      color: isDarkMode ? '#fff' : '#212121',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 22,
    },
    TextSpecialist: {
      color: isDarkMode ? '#fff' : '#777',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
    },
    ButtonView: {
      marginLeft: wp(1),
      flexDirection: 'row',
      marginTop: hp(2),
    },
    DoctorButton: {
      width: wp(15.46),
      height: hp(2.95),
      borderRadius: 10,
      backgroundColor: isDarkMode ? '#000' : '#1A936F',
      borderColor: isDarkMode ? '#1A936F' : undefined,
      borderWidth: 1,
      margin: 7,
    },
    DoctorButtonHovered: {
      backgroundColor: isDarkMode ? '#1A936F' : '#147e5a',
    },
    buttonText: {
      color: isDarkMode ? '#1A936F' : '#FFF',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: isDarkMode ? '500' : '700',
      lineHeight: 22,
      textAlign: 'center',
    },
    ScrollArea: {
      marginBottom: 85,
      height: hp(100),
    },
  });
  const renderItem1 = ({item}) => (
    <View style={styles.DoctorCard} key={item.id}>
      <Image style={styles.DoctorImage} source={item.image} />
      <View style={styles.DoctorTextView}>
        <Text style={styles.TextName}>{item.name}</Text>
        <Text style={styles.TextSpecialist}>
          {item.field} | {item.location}
        </Text>
      </View>
    </View>
  );
  const renderItem = ({item}) => (
    <View style={styles.DoctorCard} key={item.id}>
      <Image style={styles.DoctorImage} source={item.image} />
      <View style={styles.DoctorTextView}>
        <Text style={styles.TextName}>{item.name}</Text>
        <Text style={styles.TextSpecialist}>
          {item.field} | {item.location}
        </Text>
      </View>
    </View>
  );
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
          <Text style={styles.DoctorText}>Clinics</Text>
        </View>
        <ScrollView
          style={styles.ScrollArea}
          showsVerticalScrollIndicator={false}>
          {clinicsNameList ? (
            <View style={styles.DoctorsCard}>
              <FlatList
                data={clinicsNameList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          ) : (
            <View style={styles.DoctorsCard}>
              <FlatList
                data={filteredClinics}
                renderItem={renderItem1}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Clinics;
