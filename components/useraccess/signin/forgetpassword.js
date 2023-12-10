import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ScreenWrapper from '../../ScreenWrapper'
import CommonTextInputsignin from '../../Commontextinput/signin'
const Forgetpassword = ({navigation}) => {
    const [signUpValues, setSignUpValues] = useState({
        Phone: '',
      });
    
      const isEmailValid = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone);
      const isButtonPink = isEmailValid;
    
      const handleSignup = () => {
        if (isButtonPink) {
          if (/^\d{10}$/.test(signUpValues?.Phone)) {
            // Navigate to verifyphoneno page if signing up with a mobile number
            navigation.navigate('Forgetphone');
          } else {
            // Navigate to verifyemail page if signing up with an email
            navigation.navigate('Forgetemail');
          }
        } else {
          console.log('Invalid email or phone number');
        }
      };
  return (
    <SafeAreaProvider>
    <ScreenWrapper 
   //  statusBarColor={colorScheme === 'light' ? appColors?.white : 'black'}
    >
 
     <View style={styles.container}>
     <View style={styles.group1}>
     <Text style={[styles.Signup, 
       // {color: colorScheme === 'light' ? 'black' : 'white',} 
        ]}>Forgot{'\n'}password</Text>
     <Text style={styles.signup_text}>Kindly verify your email or phone number{'\n'}first for the further process. </Text>
     </View> 
     </View>
     <CommonTextInputsignin style={[styles.Emailph]}
      label="Verify your email / Phone no."
      value={signUpValues?.Phone}
      sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
      onChangeText={e => {
        setSignUpValues({...signUpValues, Phone: e});
      }}
      />
       <TouchableOpacity style={{...styles.verifybutton,
        backgroundColor: isButtonPink ? '#FF9393' : '#F7F7F7',              
        shadowColor: isButtonPink ? '#FF9393' : '#FFF'
          
}} onPress={ 
  handleSignup
    }
    
>
            
            <Text style={{...styles.verifytext, 

             color: isButtonPink ? '#FFFFFF' : '#4A4A4A', 

        }}>Verify</Text>

        </TouchableOpacity>
     </ScreenWrapper>
     </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
   
      // group 1 start
  
      group1:{
         
          textAlign: "left",
  
      },
      Signup:{
          color:"#454545",
          fontSize: 40,
          fontWeight: "600",
          top: 50,
          left: 40
      },
      signup_text:{
          color:"#000000",
          fontSize:16,
          fontWeight: "400",
          top: 65,
          width: 295,
          left: 40

  
      },
      Emailph:{
        top:128,
        left: 40
      } ,
  
          // group 1 end

          verifybutton: {
            borderRadius: 7, // Adjust the border radius as needed
            paddingVertical: 0,
            elevation: 5, // For Android box shadow
            shadowColor: '#FF9393', // For iOS box shadow
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.35,
            shadowRadius: 12,
            width: 157,
            height:42,
            backgroundColor:"#F7F7F7",
          left:117,
          top:254
          },
          verifytext:{
            color: "#251E1E",
            fontSize: 24,
            textAlign: "center",
            fontWeight: "600",
            top: 4,
         
          },
    })

export default Forgetpassword;