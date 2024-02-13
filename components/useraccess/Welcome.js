import {View, Text, StyleSheet, TouchableOpacity, Image,SafeAreaView} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import ScreenWrapper from '../ScreenWrapper';
import {appColors} from '../../utils/Appcolors';
import {Dimensions} from 'react-native';
import {useWindowDimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   LoginManager,
// } from "react-native-fbsdk-next";

function useStyles() {
  const {width, height} = useWindowDimensions();
}

const Welcome = ({navigation}) => {
  // const styles = useStyles();

  // const logInWIthFb = useCallback(() => {
  //   //login with facebook
  //   LoginManager.logInWithPermissions(["public_profile", "email"]).then(
  //     function (result) {
  //       if (result.isCancelled) {
  //       } else {
  //         AccessToken.getCurrentAccessToken().then((data) => {
  //           const accessToken = data.accessToken.toString();
  //           getInfoFromToken(accessToken);
  //         });
  //       }
  //     },
  //     function (error) {
  //       console.log("==> Login fail with error: " + error);
  //     }
  //   );
  // }, []);

  // const getInfoFromToken = useCallback(
  //   //login with facebook

  //   async (token) => {
  //     const role = await AsyncStorage.getItem("roleType");
  //     const PROFILE_REQUEST_PARAMS = {
  //       fields: {
  //         string: "id,name,first_name,last_name,email",
  //       },
  //     };
  //     const profileRequest = new GraphRequest(
  //       "/me",
  //       { token, parameters: PROFILE_REQUEST_PARAMS },
  //       async (error, user) => {
  //         if (error) {
  //           console.log("login info has error: " + error);
  //         } else {
  //           console.log("login info has user: " + user);
  //         }
  //       }
  //     );
  //     new GraphRequestManager().addRequest(profileRequest).start();
  //   },
  //   []
  // );

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.group1}>
            <Text style={styles.Welcometext}>Welcome to {'\n'}With ME !!</Text>
            <Text style={styles.signup_text}>
              Signup first to experience the app{' '}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 170,
            }}>
            <TouchableOpacity style={styles.button}>
              <Image
                resizeMode="cover"
                source={require('../../assets/logos/facebookButton.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                resizeMode="cover"
                source={require('../../assets/logos/googleButton.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}>
              <Image
                resizeMode="cover"
                source={require('../../assets/logos/emailButton.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={[styles.group3text]}>
            If you are a new user create an account to enter and experience the
            app
          </Text>
          <View>
            <Text style={styles.group4text}>If already have an account ?</Text>
            <TouchableOpacity
              style={styles.signinbutton}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signintext}>Sign in</Text>
              <Image
                style={styles.signinicon}
                source={require('../../assets/logos/signin-icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    height: hp('80%'), // 70% of height device screen
    width: wp('100%'),
    flex: 1, // 80% of width device screen

    // backgroundColor:"white"
  },
  // group 1 start

  group1: {
    height: hp('12.5%'),
    right: 40,
    textAlign: 'left',
  },
  Welcometext: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
    top: 50,
  },
  signup_text: {
    color: '#454545',
    fontSize: 16,
    fontWeight: '400',
    top: 65,
  },

  button: {
    height: 55,
    marginBottom: 10,
  },
  button2: {
    height: hp('1.8%'),
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#000000', // For iOS box shadow
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.11,
    shadowRadius: 1,
    width: 271,
  },
  group2text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  facebookText: {
    color: '#FFF', // White text color
  },
  facebookButton: {
    backgroundColor: '#0076FF', // Google Blue Color

    top: 180,
  },
  icon: {
    width: 21,
    height: 21,
    position: 'absolute',
    right: 236,
    top: 3,
  },
  facebookicon: {
    backgroundColor: '#EAEAEA', // Background color
    borderRadius: 10, // Border radius
  },

  googleButton: {
    top: 216,
  },
  googleText: {
    color: '#454545',
  },
  emailButton: {
    backgroundColor: '#FF9393',
    top: 252,
  },
  emailButton2: {
    backgroundColor: '#FF9343',
    top: 252,
  },
  emailText: {
    color: '#FFF',
  },

  group3text: {
    height: hp('5%'),
    width: 264,
    textAlign: 'center',
    color: '#454545',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 70,
  },

  group4text: {
    top: 70,
    fontSize: 14,
    fontWeight: '500',
    color: '#454545',
    right: 54,
  },
  signinbutton: {
    height: hp('5%'),
    borderRadius: 15, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: 140,
    backgroundColor: '#FF9393',
    top: 80,
    left: 100,
  },
  signintext: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '600',
    top: 6,
    left: 26,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
  },
  signinicon: {
    width: 20,
    height: 20,
    left: 100,
    top: 8,
  },

  //   group 4 end
});

export default Welcome;
