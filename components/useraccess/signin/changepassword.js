import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../ScreenWrapper';
import CommonTextInputphonenumber from '../../Commontextinput/phonenumber';
const Changepassword = ({navigation}) => {
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const [signUpValues, setSignUpValues] = useState({
    Phone: '',
    password: '',
    confirmPassword: '',
    passwordeye: true,
    confirmPasswordeye: true,
    passwordFocus: false,
    confirmPasswordFocus: false,
  });

  return (
    <SafeAreaView>
      <ScreenWrapper
      //  statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}
      >
        <View style={styles.container}>
          <View style={styles.group1}>
            <Text
              style={[
                styles.Signup,
                // {color: colorScheme === 'light' ? 'black' : 'white',}
              ]}>
              Forgot{'\n'}password
            </Text>
            <Text style={styles.signup_text}>
              Kindly verify your email or phone number{'\n'}first for the
              further process.{' '}
            </Text>
          </View>
        </View>
        <CommonTextInputphonenumber
          style={[styles.password]}
          label="New Password"
          value={signUpValues?.Password}
          passwordFocus={signUpValues?.passwordFocus}
          onFocus={() => {
            setSignUpValues({...signUpValues, passwordFocus: true});
          }}
          onBlur={() => {
            setSignUpValues({...signUpValues, passwordFocus: false});
          }}
          eyeValue={signUpValues?.passwordeye}
          onChangeEye={() => {
            setSignUpValues({
              ...signUpValues,
              passwordeye: !signUpValues?.passwordeye,
            });
          }}
          onChangeText={e => {
            setSignUpValues({...signUpValues, Password: e});
            setPasswordsMatch(e === signUpValues.confirmPassword);
            setPasswordMatchError(e !== signUpValues.confirmPassword);
          }}
        />
        <CommonTextInputphonenumber
          style={styles.confirmpw}
          label="Confirm Password"
          value={signUpValues?.confirmPassword}
          passwordFocus={signUpValues?.confirmPasswordFocus}
          onFocus={() => {
            setSignUpValues({...signUpValues, confirmPasswordFocus: true});
          }}
          onBlur={() => {
            setSignUpValues({...signUpValues, confirmPasswordFocus: false});
          }}
          eyeValue={signUpValues?.confirmPasswordeye}
          onChangeEye={() => {
            setSignUpValues({
              ...signUpValues,
              confirmPasswordeye: !signUpValues?.confirmPasswordeye,
            });
          }}
          onChangeText={e => {
            setSignUpValues({...signUpValues, confirmPassword: e});
            setPasswordsMatch(e === signUpValues.Password);
            setPasswordMatchError(e !== signUpValues.Password);
          }}
        />
        {passwordMatchError && (
          <Text style={{color: 'red', textAlign: 'center', top: 130}}>
            Confirm password must be the same as new password.
          </Text>
        )}
        <TouchableOpacity
          style={{
            ...styles.verifybutton,
            backgroundColor: passwordsMatch ? '#FF9393' : '#F7F7F7', // Change color to pink when passwords match
            shadowColor: passwordsMatch ? '#FF9393' : '#F7F7F7', // Change color to pink when passwords match
          }}
          onPress={() => {
            if (passwordsMatch) {
              navigation.navigate('Changepwsuccess');
            }
          }}>
          <Text
            style={{
              ...styles.verifytext,
              color: passwordsMatch ? '#FFF' : '#120F0F', // Change color to pink when passwords match
            }}>
            Verify
          </Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // group 1 start

  group1: {
    textAlign: 'left',
  },
  Signup: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
    top: 50,
    left: 40,
  },
  signup_text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '400',
    top: 65,
    width: 295,
    left: 40,
  },
  Emailph: {
    top: 128,
    left: 40,
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

export default Changepassword;
