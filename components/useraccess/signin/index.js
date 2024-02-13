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

const SignIn = ({navigation}) => {
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

  if (
    signUpValues?.firstName?.length >= 3 &&
    signUpValues?.lastName?.length >= 3 &&
    signUpValues?.Password?.length >= 8 &&
    signUpValues?.confirmPassword?.length >= 8
  ) {
    console.log(signUpValues, '<--signUpValuessignUpValues');
  } else {
    console.log('Validation failed. Please check the input values.');
  }

  const googleSign = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo, '<----userInfo');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.group1}>
          <Text style={styles.Welcometext}>Welcome{'\n'}Back !!</Text>
        </View>
        <View style={{marginTop: 70, height: 200}}>
          <CommonTextInput
            // sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(loginValue?.email)}
            // value={loginValue?.email}
            style={[styles.Emailph]}
            label={'Email Address / Phone Number'}
            // onChangeText={e => {
            //   setLoginValue({...loginValue, email: e});
            // }}
          />
          <CommonTextInput
            label={'Password'}
            style={[styles.password, {top: 98}]}
            onFocus={() => {
              //setLoginValue({...loginValue, passwordFocus: true});
            }}
            onBlur={() => {
              //setLoginValue({...loginValue, passwordFocus: false});
            }}
            //passwordFocus={loginValue?.passwordFocus}
            // onChangeText={e => {
            //   setLoginValue({...loginValue, password: e});
            // }}
            // onChangeEye={() => {
            //   setLoginValue({
            //     ...loginValue,
            //     passwordeye: !loginValue?.passwordeye,
            //   });
            // }}
          />
        </View>

        <View
          style={{flexDirection: 'row', backgroundColor: 'red', width: 170}}>
          <TouchableOpacity
            // onPress={() => {
            //   //loginMethod();
            // }}
            onPress={() => navigation.navigate('MainContainer')}
            style={styles.signinbutton1}>
            <Text style={styles.signintext1}>Sign In</Text>
          </TouchableOpacity>

          <Image
            style={styles.signinicon}
            source={require('../../../assets/logos/rightarrowblack.png')}
          />
        </View>
        <Image
          style={{left: 160, bottom: 22}}
          source={require('../../../assets/logos/googlelogo.png')}
        />
        <Image
          style={{left: 230, bottom: 59}}
          source={require('../../../assets/logos/facebooklogo.png')}
        />
        <TouchableOpacity style={styles.applebutton}>
          <Text style={styles.appletext}>Continue with Apple</Text>
          <Image
            style={styles.applelogo}
            source={require('../../../assets/logos/applelogo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.group4text}>
            If you are a new user create an account to{'\n'}enter and experience
            the app
          </Text>
          <TouchableOpacity
            style={styles.signinbutton}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signintext}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    top: hp('16%'),
    color: '#FD962A',
    fontSize: 15,
    fontWeight: '500',
  },
  //   group 3 start

  signinbutton1: {
    borderRadius: 15, // Adjust the border radius as needed
    width: 104,
    height: 36,
    backgroundColor: '#F7F7F7',
    //top: hp('25%'),
    left: 40,
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
    alignItems: 'center',
    textAlign: 'center',
    fontSize: hp('2%'),
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
    height: hp('4%'),
    width: 270,
    top: hp('28%'),
    left: 41,
  },
  applelogo: {
    left: 33,
    bottom: hp('2%'),
    height: hp('2.2%'),
  },

  //   group 3 end

  //group 4 start
  group4text: {
    fontSize: hp('1.8%'),
    fontWeight: '500',
    color: '#454545',
    right: hp('3.5%'),
    top: hp('42%'),
    textAlign: 'center',
  },
  signinbutton: {
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: hp('20%'),
    height: 36,
    backgroundColor: '#FF9393',
    top: hp('45%'),
    left: hp('23%'),
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
    left: 79,
    top: 8,
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
