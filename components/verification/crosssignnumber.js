import { View, Text,StyleSheet, TouchableOpacity, Image } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useState } from 'react'
import ScreenWrapper from '../ScreenWrapper'
import CommonTextInputphonenumber from '../Commontextinput/phonenumber'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Crosssignnumber = ({navigation}) => {
    const [number, setnumber] = useState('');

    const handleOtpChange = (text) => {
      // Limit input to 6 characters
      if (text.length <= 10) {
        setnumber(text);
     
      }

    };
  return (
    <SafeAreaProvider>
    <ScreenWrapper>
    <TouchableOpacity>
       </TouchableOpacity>
    <View style={styles.container}>
    <View style={styles.group1}>
    <Text style={styles.Signup  }>Enter{'\n'}Phone Number</Text>
    <Text style={styles.signup_text}>You have been sent a verification code on your Mobile.</Text>
    <TouchableOpacity onPress={()=> navigation.navigate("Successful")}>
    {/* <Image style={{alignSelf:"flex-end", left: 46, bottom: 80}} source={require("../../assets/logos/facebook.png")}/>  */}
    <Text style={{alignSelf:"flex-end", left: 46, bottom: 83, fontWeight:"600", color:"#A0A0A0", fontSize:22}} >X</Text>
    </TouchableOpacity>

    </View> 
  
    <CommonTextInputphonenumber style={{
        top:hp("5%")
    }}
    initvalue={'+91'}
    label="enter your number"
    value={number}
    onChangeText={handleOtpChange}
    keyboardType='phone-pad'


    />
     
        </View>
        <TouchableOpacity>
     <Text style={styles.forgetPassword}>
     Resend verifiction code
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.verifybutton,  backgroundColor: number.length === 10 ? '#FF9393' : '#F7F7F7',          
          shadowColor: number.length === 6 ? '#FF9393' : '#fff'
}} onPress={() => navigation.navigate('Verifyphone')}
            disabled={number.length !== 10} >
            
            <Text style={{...styles.verifytext,color: number.length === 10 ? '#FFF' : '#282222',
        }}>Verify</Text>

        </TouchableOpacity>
    </ScreenWrapper>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
    container:{
        
        // backgroundColor:"white"
        top:0
      },
        // group 1 start
    
        group1:{
            left: 40,
            textAlign: "left",
    
        },
        Signup:{
            color:"#454545",
            fontSize: 40,
            fontWeight: "600",
            top: 50,
        },
        signup_text:{
            color:"#000",
            fontSize:16,
            fontWeight: "400",
            top: 65,
            width: 277,
            
    
        },
        forgetPassword:{
            left:35,
            top:hp("10%"),
            color:"#FD962A",
            fontSize:15,
            fontWeight:"500"
          },
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
                height:hp("5%"),
                backgroundColor:"#F7F7F7",
              left:hp("15%"),
              top:hp("25%")
              },
              verifytext:{
                color: "#251E1E",
                fontSize: 24,
                textAlign: "center",
                fontWeight: "600",
                top: 4,
             
              },
            
         
})
    export default Crosssignnumber