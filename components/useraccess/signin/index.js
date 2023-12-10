import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import ScreenWrapper from '../../ScreenWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { appColors } from '../../../utils/Appcolors'
import CommonTextInputsignin from '../../Commontextinput/signin'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



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
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId: '112069212219-tk7odcavp85d9gpiv9kpll6ot055r027.apps.googleusercontent.com',
  //   });
  // },[])


  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }
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

  return (
    <SafeAreaProvider>
    <ScreenWrapper>
    <View style={styles.container}>
    <View style={styles.group1}>
    <Text style={styles.Welcometext}>Welcome{'\n'}Back !!</Text>
    </View>
    <CommonTextInputsignin style={[styles.Emailph,]}
      label="Email/Phone number"
      value={signUpValues?.Phone}
      sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
      onChangeText={e => {
        setSignUpValues({...signUpValues, Phone: e});
      }}
      />
    <CommonTextInputsignin style={[styles.password,{top:98}]}
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
      
    
     </View>
     <TouchableOpacity onPress={()=> navigation.navigate('Forgetpassword')}>
     <Text style={styles.forgetPassword}>
          Forget Password
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signinbutton1}>
            <Text style={styles.signintext1}>Sign In</Text>
            <Image style={styles.signinicon} source={require("../../../assets/logos/rightarrowblack.png")}/>
            <Image style={{left: 160, bottom: 22}} source={require("../../../assets/logos/googlelogo.png")}/>
            <Image style={{left: 230, bottom: 59}} source={require("../../../assets/logos/facebooklogo.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applebutton}>
            
            <Text style={styles.appletext}>Continue with Apple</Text>
            <Image style={styles.applelogo} source={require("../../../assets/logos/applelogo.png")}/>
       
        </TouchableOpacity>
        <View>
        <Text style={styles.group4text}>If you are a new user create an account to{'\n'}enter and experience the app</Text>
        <TouchableOpacity style={styles.signinbutton} onPress={()=> navigation.navigate('Signup')}>
            
            <Text style={styles.signintext}>Sign up</Text>

        </TouchableOpacity>
       
      </View>
    </ScreenWrapper>
    </SafeAreaProvider>

  )
}
const styles = StyleSheet.create({
  container:{
  },
     // group 1 start

     group1:{
      left: 40,
      textAlign: "left",
      top:hp("5%")

  },
  Welcometext:{
    color:"#454545",
    fontSize: 40,
    fontWeight: "600",
},


      // group 1 end

      // group 2 start
      Emailph:{
        top:hp("10%"),
      } ,
      password:{
        top:64
      },
       confirmpw:{
        top:52
      }, 
      forgetPassword:{
        left:40,
        top:hp("16%"),
        color:"#FD962A",
        fontSize:15,
        fontWeight:"500"
      },
       //   group 3 start
    
       signinbutton1: {
        borderRadius: 15, // Adjust the border radius as needed
        width: 104,
        height:36,
        backgroundColor:"#F7F7F7",
      top:hp("25%"),
    left: 40
      
      },
      signintext1:{
        color: "#2E2525",
        fontSize: 18,
        textAlign: "left",
        fontWeight: "600",
        top: 4,
        left:16,
        position: "absolute",
      },
   
      appletext:{
        color:"#FFF",
        alignItems:"center",
        textAlign:"center",
        fontSize: hp("2%"),
        fontWeight:"600",
        left:17,
        top:3
      },
      applebutton:{
       
          backgroundColor: "#454545",
          shadowColor: "rgba(0, 0, 0, 0.15)",
          shadowRadius: 11,
          elevation: 11,
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          borderRadius: 15,
          height: hp("4%"),
          width: 270,
          top:hp("28%"),
          left:41

   
      },
      applelogo:{
        left:33,
        bottom:hp("2%"),
        height:hp("2.2%")

      }, 

    //   group 3 end

    //group 4 start
    group4text:{
      fontSize: hp("1.8%"),
      fontWeight: "500",
      color:"#454545",
      right:hp("3.5%"),
      top:hp("42%"),
      textAlign:"center"

      },
      signinbutton: {
          borderRadius: 15, // Adjust the border radius as needed
          paddingVertical: 0,
          elevation: 5, // For Android box shadow
          shadowColor: '#FF9393', // For iOS box shadow
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.35,
          shadowRadius: 12,
          width: hp("20%"),
          height:36,
          backgroundColor:"#FF9393",
        top:hp("45%"),
        left:hp("23%")
        },
        signintext:{
          color: "#FFF",
          fontSize: 18,
          textAlign: "center",
          fontWeight: "600",
          top: 4,
        },
        signinicon:{
          width: 20,
          height: 20,
          left:79,
          top:8,
        },
        leftbutton: {
          borderRadius: 15, // Adjust the border radius as needed
          paddingVertical: 0,
          elevation: 5, // For Android box shadow
          shadowColor: '#FF9393', // For iOS box shadow
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.35,
          shadowRadius: 12,
          width: 33,
          height:33,
          backgroundColor:"#FF9393",
        left:41,
        top:169,
        shadowColor: '#FF9393',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6,
        elevation: 5, // For Android
        
        
        },
        group5logo:{
         margin:"15%"
         }
})
  export default SignIn