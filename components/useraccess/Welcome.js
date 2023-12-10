import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import ScreenWrapper from '../ScreenWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { appColors } from '../../utils/Appcolors'
import { Dimensions } from 'react-native'
import { useWindowDimensions } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
function useStyles(){
const {width, height}= useWindowDimensions();
}
const Welcome = ({navigation}) => {
  // const styles = useStyles();

  return (
    <SafeAreaProvider>
    <ScreenWrapper>
    <View style={styles.container}>

    <View style={styles.group1}>
    <Text style={styles.Welcometext}>Welcome to {'\n'}With ME !!</Text>
    <Text style={styles.signup_text}>Signup first to experience the app </Text>
    </View>

    <TouchableOpacity style={[styles.facebookButton, styles.button]} >
        <Text style={[styles.group2text, styles.facebookText]}>     Continue with facebook</Text>
        <Image             resizeMode="cover"
 style={[styles.facebookicon, styles.icon]} source={require("../../assets/logos/facebook.png")}/>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.googleButton, styles.button]} >
        <Text style={[styles.group2text, styles.googleText]}>Continue with google</Text>
        <Image             resizeMode="cover"
 style={styles.icon} source={require("../../assets/logos/google.png")}/>

      </TouchableOpacity>
      <TouchableOpacity style={[styles.emailButton, styles.button]} onPress={()=> navigation.navigate('Signup')}>
        <Text style={[styles.group2text, styles.emailText]}>     Continue with Email/Ph</Text>
        <Image             resizeMode="cover"
 style={styles.icon} source={require("../../assets/logos/gmaill.png")}/>

      </TouchableOpacity>
      <Text
        style={[
          styles.group3text,
        ]}
      >
        If you are a new user create an account to enter and experience the app
      </Text>
      <View>
        <Text style={styles.group4text}>If already have an account ?</Text>
        <TouchableOpacity style={styles.signinbutton} onPress={()=> navigation.navigate('SignIn')}>
            
            <Text style={styles.signintext}>Sign in</Text>
            <Image style={styles.signinicon} source={require("../../assets/logos/signin-icon.png")}/>

        </TouchableOpacity>
      </View>
      </View>
    </ScreenWrapper>
    </SafeAreaProvider>
  
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
display:"flex"    ,
height: hp('80%'), // 70% of height device screen
width: wp('100%') ,
flex:1  // 80% of width device screen

    // backgroundColor:"white"

  },
    // group 1 start

    group1:{
      height: hp('12.5%'), 
        right: 40,
        textAlign: "left",

    },
    Welcometext:{
        color:"#454545",
        fontSize: 40,
        fontWeight: "600",
        top: 50,
    },
    signup_text:{
        color:"#454545",
        fontSize:16,
        fontWeight: "400",
        top: 65,
    },

        // group 1 end
        
        // group 2 start
        button: {
          height: hp('3.8%'), 
            borderRadius: 15, // Adjust the border radius as needed
            paddingVertical: 0,
            elevation: 5, // For Android box shadow
            shadowColor: '#000000', // For iOS box shadow
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.11,
            shadowRadius: 1,
            width: 271,

        
          },
          group2text: {
            fontSize: 18,
            fontWeight: "600",
            textAlign: 'center',
          },
          facebookText:{
            color: '#FFF', // White text color
          },
          facebookButton:{
            backgroundColor: '#0076FF', // Google Blue Color

            top:180
          },
          icon:{
            width: 21,
            height: 21,
            position: "absolute",
            right:236,
            top:3
          },
          facebookicon:{
            backgroundColor: '#EAEAEA', // Background color
    borderRadius: 10, // Border radius
          },

          googleButton:{
            backgroundColor: '#FCFCFE',
             // Google Blue Color

            top:216
          },
          googleText:{
            color:"#454545"
          },
          emailButton:{
            
            backgroundColor:"#FF9393",

            top: 252
          },
          emailText:{
            color:"#FFF"
          },
        //   group 2 end

        //   group 3 start
          group3text: {
            height: hp('5%'), 
            width: 264,
            textAlign:"center",
            color: "#454545",
            fontSize: 14,
            fontWeight:"500",
            top: hp('50%')
          },
         //   group 3 end
        //   group 4 start
        group4text:{
          top: hp("60%"),
            fontSize: 14,
            fontWeight: "500",
            color:"#454545",
          right: 54
            },
            signinbutton: {
              height: hp('5%'), 
                borderRadius: 15, // Adjust the border radius as needed
                paddingVertical: 0,
                elevation: 5, // For Android box shadow
                shadowColor: '#FF9393', // For iOS box shadow
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.35,
                shadowRadius: 12,
                width: 140,
                backgroundColor:"#FF9393",
                top: hp("61%"),
                left: 80,

            
              },
              signintext:{

                color: "#FFF",
                fontSize: 18,
                textAlign: "left",
                fontWeight: "600",
                top: 4,
                left:26,
                position: "absolute",
                alignContent:"center",
                alignItems:"center"

              },
              signinicon:{
                width: 20,
                height: 20,
                left:100,
                top:8,
              },

            //   group 4 end
  
});


export default Welcome