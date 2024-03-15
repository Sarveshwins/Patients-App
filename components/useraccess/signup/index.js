import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Appearance,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../../ScreenWrapper';
import CommonTextInput from '../../Commontextinput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {appColors} from '../../../utils/Appcolors';
import {useAppCommonDataProvider} from '../../UseAppCommonDataProvider';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpAction} from '../../redux/action/Signup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import { useAppCommonDataProvider } from '../../../useAppCommonDataProvider'

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [signUpValues, setSignUpValues] = useState({
    firstName: '',
    lastName: '',
    Phone: '',
    Password: '',
    confirmPassword: '',
    passwordeye: true,
    confirmPasswordeye: true,
    passwordFocus: false,
    confirmPasswordFocus: false,
  });
  const {colorScheme} = useAppCommonDataProvider();

  // const handleSignup = () => {
  //   if (
  //     signUpValues?.firstName?.length >= 3 &&
  //     signUpValues?.lastName?.length >= 3 &&
  //     signUpValues?.Password?.length >= 8 &&
  //     signUpValues?.confirmPassword?.length >= 8
  //   ) {
  //     if (/^\d{10}$/.test(signUpValues?.Phone)) {
  //       // Navigate to verifyphoneno page if signing up with mobile number
  //       navigation.navigate('Verifyphone');
  //     } else {
  //       // Navigate to verifyemail page if signing up with email
  //       navigation.navigate('VerifyEmail');
  //     }
  //   } else {
  //     console.log('Validation failed. Please check the input values.');
  //   }
  // };

  const signUpProcess = async () => {
    if (
      signUpValues?.firstName?.length >= 2 &&
      signUpValues?.lastName?.length >= 2 &&
      signUpValues?.Password?.length >= 8 &&
      signUpValues?.confirmPassword?.length >= 8
    ) {
      //console.log(signUpValues, '<--signUpValuessignUpValues');
      dispatch({
        type: SignUpAction?.types?.start,
        payload: {
          contact: signUpValues?.Phone,
          firstName: signUpValues?.firstName,
          lastName: signUpValues?.lastName,
          password: signUpValues?.Password,
          confirmPassword: signUpValues?.confirmPassword,
          role: 'patient',
          regBy: 'manual',
          extraData: signupResponse => {
            console.log('signupResponse', signupResponse);
            if (signupResponse?.status === 201) {
              if (signupResponse?.data?.status == 'success') {
                navigation.navigate('Successful')
                // , {
                //   contact: signUpValues?.Phone,
                // });
              }
            } else {
              CustomMessage(err?.response?.data?.message?.message, 'danger');
            }
          },
          onError: err => {
            CustomMessage(err?.response?.data?.message?.message, 'danger');
          },
        },
      });
    }
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'red'}}>
      <ScreenWrapper
        statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}>
        {/* <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          enableOnAndroid={true}
          contentContainerStyle={{paddingBottom: 20}}
          style={{
            flex: 1,
            paddingHorizontal: '10%',
            paddingTop: 28,
            backgroundColor:
              colorScheme === 'light' ? appColors?.white : appColors?.black,
          }}> */}
          <View style={{margintTop: 10, flex: 0.2, backgroundColor: 'red'}}>
            <Text
              style={{
                fontSize: 37,
                fontWeight: '500',
                color: colorScheme === 'light' ? 'black' : 'white',
              }}>
              Sign Up
            </Text>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '500',
                color: '#C0C0C0',
                marginTop: '4%',
                lineHeight: 22,
              }}>
              Sign up to register yourself{'\n'}on this Platfom
            </Text>
          </View>
          <View contentContainerStyle={{flex: 9}}>
            <View style={{flex: 0.78}}>
              <CommonTextInput
                label="First Name"
                value={signUpValues?.firstName}
                sucess={signUpValues?.firstName?.length >= 3}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, firstName: e});
                }}
              />
              <CommonTextInput
                label="Last Name"
                value={signUpValues?.lastName}
                sucess={signUpValues?.lastName?.length >= 3}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, lastName: e});
                }}
              />
              <CommonTextInput
                label="Email/Phone"
                value={signUpValues?.Phone}
                sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(
                  signUpValues?.Phone,
                )}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, Phone: e});
                }}
              />
              <CommonTextInput
                label="Password"
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
                }}
              />
              <CommonTextInput
                label="Confirm Password"
                value={signUpValues?.confirmPassword}
                passwordFocus={signUpValues?.confirmPasswordFocus}
                onFocus={() => {
                  setSignUpValues({
                    ...signUpValues,
                    confirmPasswordFocus: true,
                  });
                }}
                onBlur={() => {
                  setSignUpValues({
                    ...signUpValues,
                    confirmPasswordFocus: false,
                  });
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
                }}
              />
            </View>
            <View
              style={{
                marginTop: '15%',

                width: '100%',
                flex: 0.2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {/* <CommonButton
                  buttonText={'Sign Up'}
                  onPress={() => {
                    signUpProcess();
                    //navigation?.navigate('Verification');
                  }}
                /> */}
                {/* <View
                style={{
                  flexDirection: "row",
                  flex: 0.8,
                  justifyContent: "space-between",
                }}
              >
                <Image source={imagePath?.googleIcon} />
                <Image source={imagePath?.facebookIcon} />
              </View> */}
              </View>
              <Text
                style={{marginTop: '5%', color: appColors?.gray, fontSize: 15}}>
                Or Sign Up with any of the Providers
              </Text>
              <View
                style={{
                  marginTop: '5%',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: 180,
                }}>
                {/* <TouchableOpacity >
                  <Image source={imagePath?.facebookIcon} />
                </TouchableOpacity>
                <TouchableOpacity >
                  <Image source={imagePath?.googleIcon} />
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => onAppleButtonPress()}>
                  <View
                    style={{
                      width: 48,
                      height: 44,
                      backgroundColor: 'white',
                      borderColor: appColors.gray,
                      borderRadius: 18,
                      borderWidth: 1,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {/* <Image source={imagePath?.Apple} /> */}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 0.1, flexDirection: 'row', marginTop: 10}}>
              <Text style={{color: appColors?.gray}}>
                If you already have an account ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation?.navigate('Login');
                }}>
                <Text style={{color: appColors?.orange}}>{' Sign in'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        {/* </KeyboardAwareScrollView> */}
      </ScreenWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"white"
  },
  // group 1 start
  group2: {
    height: hp('55%'),
    top: 44,
  },
  group3: {
    height: hp('20%'),
    top: 42,
  },
  group1: {
    left: 40,
    textAlign: 'left',
    height: hp('10%'),
  },
  group4: {
    height: hp('15%'),
    top: 30,
  },
  Signup: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
  },
  signup_text: {
    color: '#C0C0C0',
    fontSize: 16,
    fontWeight: '400',
    top: 10,
    width: 277,
  },

  // group 1 end

  // group2 start
  inputs: {},

  //   group 3 start

  signinbutton1: {
    borderRadius: 15, // Adjust the border radius as needed
    width: hp('15%'),
    height: hp('4%'),
    backgroundColor: '#F7F7F7',
    left: hp('4%'),
  },
  signintext1: {
    color: '#2E2525',
    fontSize: hp('2%'),
    textAlign: 'left',
    fontWeight: '600',
    top: 4,
    left: hp('2%'),
    position: 'absolute',
  },

  //   group 3 end

  //group 4 start

  appletext: {
    color: '#FFF',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    left: 17,
    top: 3,
  },
  applebutton: {
    backgroundColor: '#454545',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowRadius: 11,
    elevation: 11,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 15,
    height: 36,
    width: hp('38%'),
    left: 41,
    marginTop: 30,
  },
  applelogo: {
    left: 33,
    bottom: 17,
    height: 18,
  },
  group4text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#454545',
    left: 54,
  },
  signinbutton: {
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: 140,
    height: 36,
    backgroundColor: '#FF9393',
    left: 192,
    top: 10,
  },
  signintext: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    top: 4,
  },
  signinicon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    right: 10,
    top: 4,
  },
  leftbutton: {
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: 33,
    height: 33,
    backgroundColor: '#FF9393',
    left: 41,
    shadowColor: '#FF9393',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 5,
    top: -22, // For Android
  },
  group5logo: {
    margin: '15%',
  },
});
export default Signup;
