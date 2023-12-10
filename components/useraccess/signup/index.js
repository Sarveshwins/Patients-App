import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Appearance, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React, {useState, useEffect} from 'react'
import ScreenWrapper from '../../ScreenWrapper'
import CommonTextInput from '../../Commontextinput'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { appColors } from '../../../utils/Appcolors'
import { useAppCommonDataProvider } from '../../UseAppCommonDataProvider'


// import { useAppCommonDataProvider } from '../../../useAppCommonDataProvider'

const Signup = ({navigation}) => {
  
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

 
  const handleSignup = () => {
    if (
      signUpValues?.firstName?.length >= 3 &&
      signUpValues?.lastName?.length >= 3 &&
      signUpValues?.Password?.length >= 8 &&
      signUpValues?.confirmPassword?.length >= 8
    ) {
      if (/^\d{10}$/.test(signUpValues?.Phone)) {
        // Navigate to verifyphoneno page if signing up with mobile number
        navigation.navigate('Verifyphone');
      } else {
        // Navigate to verifyemail page if signing up with email
        navigation.navigate('VerifyEmail');
      }
    } else {
      console.log('Validation failed. Please check the input values.');
    }
  };
  return (
    <SafeAreaProvider>
   <ScreenWrapper 
   statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}
   >
 {/* <KeyboardAwareScrollView
       > */}
    <View style={styles.container}>
    <View style={styles.group1}>
    <Text style={[styles.Signup, 
      {color: colorScheme === 'light' ? 'black' : 'white',} 
       ]}>Sign Up</Text>
    <Text style={styles.signup_text}>Sign up to register yourself on this{'\n'}Platform </Text>
    </View> 
    <View  style={styles.group2}>
    <View style={styles.inputs}>
    <CommonTextInput style={[styles.Firstname]}
              label="First Name"
              value={signUpValues?.firstName}
              sucess={signUpValues?.firstName?.length >= 3}
              onChangeText={e => {
                setSignUpValues({...signUpValues, firstName: e});
              }}
            />    
            <CommonTextInput style={styles.Lastname}
            label="Last Name"
            value={signUpValues?.lastName}
            sucess={signUpValues?.lastName?.length >= 3}
            onChangeText={e => {
              setSignUpValues({...signUpValues, lastName: e});
            }}
                  />
    <CommonTextInput style={styles.Emailph}
      label="Email/Phone number"
      value={signUpValues?.Phone}
      sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
      onChangeText={e => {
        setSignUpValues({...signUpValues, Phone: e});
      }}
      />
    <CommonTextInput style={styles.password}
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
    <CommonTextInput style={styles.confirmpw}
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
     }}
     />
     </View>
  {/* <View>
        <Text style={styles.group4text}>If already have an account ?</Text>
        <TouchableOpacity style={styles.signinbutton}>
            
            <Text style={styles.signintext}>Sign in</Text>
            <Image style={styles.signinicon} source={require("../../../../assets/logos/signin-icon.png")}/>

        </TouchableOpacity>
      </View> */}
    </View>
    </View>
    <View style={styles.group3}>
    <TouchableOpacity style={[styles.signinbutton1, ]} onPress={handleSignup}>
            
            <Text style={styles.signintext1}>Sign up</Text>
            <Image style={styles.signinicon} source={require("../../../assets/logos/rightarrowblack.png")}/>

            <Image style={{left: hp("22%"), bottom: 16, height:30}} source={require("../../../assets/logos/googlelogo.png")}/>
            <Image style={{left: hp("34%"), bottom: 50,height:35}} source={require("../../../assets/logos/facebooklogo.png")}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applebutton}>
            
            <Text style={styles.appletext}>Continue with Apple</Text>
            <Image style={styles.applelogo} source={require("../../../assets/logos/applelogo.png")}/>
       
        </TouchableOpacity>
  <View>
  </View>
  <View style={styles.group4}>
        <Text style={styles.group4text}>If already have an account ?</Text>
        <TouchableOpacity style={styles.signinbutton} onPress={()=> navigation.navigate('SignIn')}>
            
            <Text style={styles.signintext}>Sign in</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.leftbutton} onPress={()=> navigation.navigate('Welcome')}>
        <Image style={styles.group5logo} source={require("../../../assets/logos/leftlogo.png")}/>

        </TouchableOpacity>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </ScreenWrapper>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container:{
    // backgroundColor:"white"

  },
    // group 1 start
    group2:{
      height:hp("55%"),
      top:44,
    },
    group3:{
      height:hp("20%"),
      top:42
    },
    group1:{
        left: 40,
        textAlign: "left",
        height:hp("10%")

    },
    group4:{
      height:hp("15%"),
      top:30
    },
    Signup:{
        color:"#454545",
        fontSize: 40,
        fontWeight: "600",
    },
    signup_text:{
        color:"#C0C0C0",
        fontSize:16,
        fontWeight: "400",
        top: 10,
        width: 277,
        

    },

        // group 1 end

        // group2 start
        inputs:{
        },
        
         //   group 3 start
    
            signinbutton1: {
                borderRadius: 15, // Adjust the border radius as needed
                width: hp("15%"),
                height: hp("4%"),
                backgroundColor:"#F7F7F7",
            left: hp("4%")
              
              },
              signintext1:{
                color: "#2E2525",
                fontSize: hp("2%"),
                textAlign: "left",
                fontWeight: "600",
                top: 4,
                left:hp("2%"),
                position: "absolute",
              },


            //   group 3 end

            //group 4 start

            appletext:{
              color:"#FFF",
              alignItems:"center",
              textAlign:"center",
              fontSize: 18,
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
                height: 36,
                width: hp("38%"),
                left:41,
                marginTop:30

         
            },
            applelogo:{
              left:33,
              bottom:17,
              height:18
            }, 
             group4text:{
              fontSize: 14,
              fontWeight: "500",
              color:"#454545",
              left:54,

              },
              signinbutton: {
                  borderRadius: 15, // Adjust the border radius as needed
                  paddingVertical: 0,
                  elevation: 5, // For Android box shadow
                  shadowColor: '#FF9393', // For iOS box shadow
                  shadowOffset: { width: 0, height: 5 },
                  shadowOpacity: 0.35,
                  shadowRadius: 12,
                  width: 140,
                  height:36,
                  backgroundColor:"#FF9393",
                left:192,
                top:10
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
                  height:20,
                  alignSelf:"flex-end",
                  right:10,
                  top:4

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
                shadowColor: '#FF9393',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.35,
                shadowRadius: 6,
                elevation: 5, 
                top:-22// For Android
                
                
                },
                group5logo:{
                 margin:"15%"
                 }
      });
        export default Signup
