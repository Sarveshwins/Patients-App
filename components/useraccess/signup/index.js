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
import {imagePath} from '../../../utils/imagePath';
import CommonButton from '../../CommonButton';
import ShakeComponent from '../../ShakeComponent';

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

  const [count, setCount] = useState(0);

  const signUpProcess = async () => {
    setCount(count + 1);
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
                navigation.navigate('Successful');
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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === 'light' ? appColors?.white : appColors?.black,
      }}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        enableOnAndroid={true}
        contentContainerStyle={{paddingBottom: 70}}
        style={{
          flex: 1,
          paddingHorizontal: '5%',
          paddingTop: 28,
          backgroundColor:
            colorScheme === 'light' ? appColors?.white : appColors?.black,
        }}>
        <View style={{margintTop: 10, flex: 1}}>
          <Text
            style={{
              fontSize: 37,
              fontWeight: '500',
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
            }}>
            Sign Up
          </Text>
          <Text
            style={{
              fontSize: 19,
              fontWeight: '500',
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
              marginTop: '4%',
              lineHeight: 22,
            }}>
            Sign up to register your self on this {'\n'}Platfom
          </Text>
        </View>
        <View contentContainerStyle={{flex: 1}}>
          <View style={{flex: 1}}>
            <ShakeComponent
              shouldShake={
                !/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)
              }
              render={count}>
              <CommonTextInput
                label="Enter Phone Number"
                value={signUpValues?.Phone}
                sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(
                  signUpValues?.Phone,
                )}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, Phone: e});
                }}
              />
            </ShakeComponent>
            <ShakeComponent
              shouldShake={signUpValues?.firstName?.length < 3}
              render={count}>
              <CommonTextInput
                label="First Name"
                value={signUpValues?.firstName}
                sucess={signUpValues?.firstName?.length >= 3}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, firstName: e});
                }}
              />
            </ShakeComponent>
            <ShakeComponent
              shouldShake={signUpValues?.lastName?.length < 3}
              render={count}>
              <CommonTextInput
                label="Last Name"
                value={signUpValues?.lastName}
                sucess={signUpValues?.lastName?.length >= 3}
                onChangeText={e => {
                  setSignUpValues({...signUpValues, lastName: e});
                }}
              />
            </ShakeComponent>
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
              }}>
              {colorScheme === 'light' ? (
                <CommonButton
                  buttonText={'Sign up'}
                  onPress={() => {
                    signUpProcess();
                  }}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    signUpProcess();
                  }}>
                  <Image source={imagePath?.DSignUp} />
                </TouchableOpacity>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Image source={imagePath?.GoogleIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={imagePath?.facebookIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: '5%',
            }}>
            <TouchableOpacity>
              {colorScheme === 'light' ? (
                <Image source={imagePath?.AppleCenter} />
              ) : (
                <Image source={imagePath?.AppleCenter} />
              )}
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '5%',
                color: appColors?.gray,
                fontSize: 15,
              }}>
              Or Sign Up with any of the Providers
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              alignSelf: 'center',
              alignItems: 'center',
            }}></View>
        </View>
        <Text
          style={[
            styles?.group4text,
            {
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
            },
          ]}>
          If you already have an Account then,
        </Text>
        <View
          style={{
            alignSelf: 'flex-end',
            marginRight: 30,
          }}>
          <TouchableOpacity onPress={() => navigation?.navigate('SignIn')}>
            {colorScheme === 'light' ? (
              <Image source={imagePath?.SignInBtn} />
            ) : (
              <Image source={imagePath?.DSignINBtn} />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"white"
  },
  group4text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#454545',
    left: 54,
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
    left: 5,
    top: -5,
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
