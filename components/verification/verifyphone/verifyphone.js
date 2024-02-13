import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import OtpInputs from 'react-native-otp-inputs';
import ScreenWrapper from '../../ScreenWrapper';

const Verifyphone = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = code => {
    setOtp(code);
  };

  const isOtpComplete = otp.length === 6;
  return (
    <SafeAreaView>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.group1}>
            <Text style={styles.Signup}>Verify{'\n'}Phone Number</Text>
            <Text style={styles.signup_text}>
              You have been sent a verification code on your mobile.
            </Text>
          </View>

          <OtpInputs
            inputContainerStyles={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '1.8%',
              borderRadius: 10,
              borderColor: 'black',
              top: 158,
              right: 10,
              backgroundColor: 'rgba(247, 247, 247, 1)',
            }}
            inputStyles={{
              //   color:
              //     colorScheme === 'light' ? appColors?.black : appColors?.white,
              width: 45,
              height: 45,
              justifyContent: 'center',
              textAlign: 'center',
            }}
            keyboardType="phone-pad"
            style={{flexDirection: 'row'}}
            numberOfInputs={6}
            handleChange={handleOtpChange} // Call this function when OTP changes
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Resend OTP </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.verifybutton,
            backgroundColor: isOtpComplete ? '#FF9393' : '#F7F7F7',
            shadowColor: isOtpComplete ? '#FF9393' : '#FFF',
          }}
          onPress={() => navigation.navigate('Signup')}
          disabled={!isOtpComplete}>
          <Text
            style={{
              ...styles.verifytext,
              color: isOtpComplete ? '#FFFFFF' : '#4A4A4A',
            }}>
            Verify
          </Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor:"white"
    top: 0,
  },
  // group 1 start

  group1: {
    right: 40,
    textAlign: 'left',
  },
  Signup: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
    top: 50,
  },
  signup_text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    top: 65,
    width: 277,
  },
  forgetPassword: {
    left: 40,
    top: 170,
    color: '#FD962A',
    fontSize: 15,
    fontWeight: '500',
  },
  // group 1 end
  verifybutton: {
    borderRadius: 7, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: 157,
    height: 42,
    backgroundColor: '#F7F7F7',
    left: 117,
    top: 254,
  },
  verifytext: {
    color: '#251E1E',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    top: 4,
  },
});
export default Verifyphone;
