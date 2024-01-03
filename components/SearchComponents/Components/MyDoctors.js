import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import DoctorImage from '../../../assets/searchSection/DoctorImage.png';
import {useNavigation} from '@react-navigation/native';
import MyDoctorScreen from '../Screens/MyDoctorScreen';

const MyDoctors = () => {
  const [isCallPressed, setCallPressed] = useState(false);
  const [isBookPressed, setBookPressed] = useState(false);
  const navigation = useNavigation();

  const handleCallPressIn = () => {
    setCallPressed(true);
  };

  const handleCallPressOut = () => {
    setCallPressed(false);
  };

  const handleBookPressIn = () => {
    setBookPressed(true);
  };

  const handleBookPressOut = () => {
    setBookPressed(false);
  };

  function handleImageClick() {
    navigation.navigate('MyDoctorScreen');
  }

  const styles = StyleSheet.create({
    container: {
      width: wp(90),
      flexDirection: 'column',
      alignSelf: 'center',
      paddingHorizontal: wp(1),
    },
    ViewWrapper: {
      flexDirection: 'row',
      //marginTop: hp(1.85),
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
      marginLeft: wp(54.5),
    },
    DoctorsCard: {
      flexDirection: 'column',
      marginTop: hp(2.2),
      width: wp(89.3),
      alignSelf: 'center',
    },
    DoctorCard: {
      flexDirection: 'row',
      marginBottom: hp(1.35),
    },
    DoctorImage: {
      width: wp(13),
      height: wp(13),
      borderRadius: 23,
      overflow: 'hidden',
      borderWidth: 1.7,
      borderColor: '#FFF',
      borderColor: '#E923BD',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.35,
      shadowRadius: 3,
    },
    DoctorTextView: {
      marginLeft: wp(3.2),
      width: wp(40),
      flexDirection: 'column',
    },
    TextName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 13,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 20,
    },
    TextSpecialist: {
      color: '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    TextArea: {
      color: '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
    },
    ButtonView: {
      marginLeft: wp(2.25),
      flexDirection: 'row',
    },
    DoctorButton: {
      width: wp(12.26),
      height: hp(4),
      borderRadius: 10,
      backgroundColor: '#1A936F',
      margin: 7,
      marginTop: 15,
    },
    DoctorButtonHovered: {
      backgroundColor: '#147e5a',
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'SFProDisplay-Bold',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 22,
      textAlign: 'center',
      marginTop: 4,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.ViewWrapper}>
        <Text style={styles.DoctorText}>My Doctors</Text>
        <TouchableOpacity onPress={handleImageClick}>
          <Image style={styles.RighArrowImage} source={RightArrow} />
        </TouchableOpacity>
      </View>
      <View style={styles.DoctorsCard}>
        <View style={styles.DoctorCard}>
          <Image style={styles.DoctorImage} source={DoctorImage} />
          <View style={styles.DoctorTextView}>
            <Text style={styles.TextName}>Dr Swapnil Katare</Text>
            <Text style={styles.TextSpecialist}>Neurosurgeon</Text>
            <Text style={styles.TextArea}>Bandra (W)</Text>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isCallPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Call Pressed')}
              onPressIn={handleCallPressIn}
              onPressOut={handleCallPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isBookPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Book Pressed')}
              onPressIn={handleBookPressIn}
              onPressOut={handleBookPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.DoctorCard}>
          <Image style={styles.DoctorImage} source={DoctorImage} />
          <View style={styles.DoctorTextView}>
            <Text style={styles.TextName}>Dr Swapnil Katare</Text>
            <Text style={styles.TextSpecialist}>Neurosurgeon</Text>
            <Text style={styles.TextArea}>Bandra (W)</Text>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isCallPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Call Pressed')}
              onPressIn={handleCallPressIn}
              onPressOut={handleCallPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isBookPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Book Pressed')}
              onPressIn={handleBookPressIn}
              onPressOut={handleBookPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.DoctorCard}>
          <Image style={styles.DoctorImage} source={DoctorImage} />
          <View style={styles.DoctorTextView}>
            <Text style={styles.TextName}>Dr Swapnil Katare</Text>
            <Text style={styles.TextSpecialist}>Neurosurgeon</Text>
            <Text style={styles.TextArea}>Bandra (W)</Text>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isCallPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Call Pressed')}
              onPressIn={handleCallPressIn}
              onPressOut={handleCallPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.DoctorButton,
                isBookPressed && styles.DoctorButtonHovered,
              ]}
              onPress={() => console.log('Button Book Pressed')}
              onPressIn={handleBookPressIn}
              onPressOut={handleBookPressOut}
              activeOpacity={1}>
              <Text style={styles.buttonText}>Book</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyDoctors;
