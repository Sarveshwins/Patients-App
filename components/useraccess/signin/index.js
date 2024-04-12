import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from '../../Commontextinput';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginAction} from '../../redux/action/Login';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonButton from '../../CommonButton';
import {imagePath} from '../../../utils/imagePath';
import {useAppCommonDataProvider} from '../../UseAppCommonDataProvider';
import {appColors} from '../../../utils/Appcolors';
import ShakeComponent from '../../ShakeComponent';

const SignIn = ({navigation}) => {
  const [loginValue, setLoginValue] = useState({
    phoneNumber: '', //"doctor@yopmail.com"
  });
  const {colorScheme} = useAppCommonDataProvider();

  const loginMethod = async () => {
    // navigation?.navigate("TabNavigator");
    // return;
    dispatch({
      type: LoginAction?.types?.start,
      payload: {
        contact: loginValue?.email,
        password: loginValue?.password,
        extraData: loginResponse => {
          console.log('loginResponse', loginResponse);
          if (loginResponse?.status === 200) {
            if (loginResponse?.data?.status == 'success') {
              navigation?.navigate('TabNavigator');
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
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '112069212219-vs4uvnguffdtg3mj43opvidg9d1r13dn.apps.googleusercontent.com',
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   });
  // }, []);
  // useEffect(() => {
  //   // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
  //   return appleAuth.onCredentialRevoked(async () => {
  //     console.warn(
  //       'If this function executes, User Credentials have been Revoked',
  //     );
  //   });
  // }, []);

  const googleSign = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo, '<----userInfo');
  };

  const [count, setCount] = useState(0);

  const signUpProcess = () => {
    setCount(count + 1);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === 'light' ? appColors?.white : appColors?.black,
      }}>
      <View
        // keyboardShouldPersistTaps="always"
        // enableOnAndroid={true}
        // contentContainerStyle={{paddingBottom: 20}}
        style={{
          flex: 1,
          paddingHorizontal: '8%',
          paddingTop: 28,
          backgroundColor:
            colorScheme === 'light' ? appColors?.white : appColors?.black,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 37,
              fontWeight: '500',
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
            }}>
            Welcome back
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
            Sign in to Continue {'\n'}using the app
          </Text>
        </View>
        <View style={{flex: 1, margintTop: 10}}>
          <CommonTextInput
            label="Enter Phone Number"
            value={loginValue?.phoneNumber}
            sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(
              loginValue?.phoneNumber,
            )}
            onChangeText={e => {
              setLoginValue({...loginValue, phoneNumber: e});
            }}
            shouldShake={
              count != 0 &&
              !/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(loginValue?.phoneNumber)
            }
            render={count}
          />
        </View>
        <View
          style={{
            marginTop: '15%',
            width: '100%',
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

          <Text
            style={{
              marginTop: '15%',
              color:
                colorScheme === 'light'
                  ? appColors?.textColor
                  : appColors?.white,
              fontSize: 15,
            }}>
            You can continue Sign In through
          </Text>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: '15%',
            }}>
            <TouchableOpacity>
              <Image style={{width: 360}} source={imagePath?.AppleLogin} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.1,
              flexDirection: 'row',
              marginTop: '35%',
              alignSelf: 'center',
              alignItems: 'center',
            }}></View>
        </View>
      </View>
      <Text
        style={[
          styles?.group4text,
          {
            color:
              colorScheme === 'light' ? appColors?.textColor : appColors?.white,
          },
        ]}>
        If you already have an Account then,
      </Text>
      <View
        style={{
          alignSelf: 'flex-end',
          marginRight: 30,
          bottom: 5,
        }}>
        <TouchableOpacity onPress={() => navigation?.navigate('MainContainer')}>
          {colorScheme === 'light' ? (
            <Image source={imagePath?.SignInBtn} />
          ) : (
            <Image source={imagePath?.DSignINBtn} />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  // group 1 start

  group1: {
    left: 40,
    textAlign: 'left',
    top: hp('5%'),
  },
  Welcometext: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
  },

  // group 1 end

  // group 2 start
  Emailph: {
    top: hp('10%'),
  },
  password: {
    top: 64,
  },
  confirmpw: {
    top: 52,
  },
  forgetPassword: {
    left: 40,
    color: '#FD962A',
    fontSize: 15,
    fontWeight: '500',
  },
  //   group 3 start

  signinbutton1: {
    borderRadius: 15, // Adjust the border radius as needed
    height: 36,
    width: 105,
    backgroundColor: '#F7F7F7',
  },
  signintext1: {
    color: '#2E2525',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '600',
    top: 4,
    left: 16,
    position: 'absolute',
  },

  appletext: {
    color: '#FFF',

    fontSize: hp('2%'),
    fontWeight: '600',
  },

  //   group 3 end

  //group 4 start
  group4text: {
    fontSize: hp('1.8%'),
    fontWeight: '500',
    color: '#454545',
    marginLeft: 35,
    top: -8,
  },
  signinbutton: {
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: hp('16%'),
    height: 36,
    backgroundColor: '#FF9393',
    //top: hp('45%'),
    // marginTop: 20,
    left: hp('13%'),
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
    top: 169,
    shadowColor: '#FF9393',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 5, // For Android
  },
  group5logo: {
    margin: '15%',
  },
});
export default SignIn;
