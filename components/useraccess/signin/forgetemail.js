import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';
import ScreenWrapper from '../../ScreenWrapper';
import CommonTextInputotp from '../../Commontextinput/otp';
const Forgetemail = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = text => {
    // Limit input to 6 characters
    if (text.length <= 6) {
      setOtp(text);
    }
  };
  return (
    <SafeAreaView>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.group1}>
            <Text style={styles.Signup}>Verify{'\n'}Email</Text>
            <Text style={styles.signup_text}>
              You have been sent a verification code on your email.
            </Text>
          </View>

          <CommonTextInputotp
            style={{
              top: 138,
            }}
            label="enter the 6 digit code"
            value={otp}
            onChangeText={handleOtpChange}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Resend verifiction code</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.verifybutton,
            backgroundColor: otp.length === 6 ? '#FF9393' : '#F7F7F7',
            shadowColor: otp.length === 6 ? '#FF9393' : '#fff',
          }}
          onPress={() => navigation.navigate('Changepassword')}
          disabled={otp.length !== 6}>
          <Text
            style={{
              ...styles.verifytext,
              color: otp.length === 6 ? '#FFF' : '#282222',
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
    // backgroundColor:"white"
    top: 0,
  },
  // group 1 start

  group1: {
    left: 40,
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
    left: 35,
    top: 155,
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
    left: 109,
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
export default Forgetemail;
