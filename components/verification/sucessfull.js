import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../ScreenWrapper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Successful = ({navigation}) => {
  return (
    <SafeAreaProvider> 
    <ScreenWrapper>
    <View style={styles.container}>
    <View style={styles.group1}>
    <Text style={styles.successful  }>Successful</Text>
    <Text style={styles.successful_text}>Don’t worry! just fill in your email / phone number and we’ll send you a code to reset your password.</Text>
    <Image style={{top: hp("20%"), left: 0, alignContent:"center", alignItems:"center"}} source={require("../../assets/logos/success.png")} />

    </View> 
    </View>
    <TouchableOpacity style={{...styles.thanksbutton,           
}} onPress={() => navigation.navigate('Meprofile')}
            >
            
            <Text style={{...styles.thankstext,
        }}>Thanks</Text>

        </TouchableOpacity>
    </ScreenWrapper>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor:"white"
        top:hp("0%")
      
      },
        // group 1 start
    
        group1:{
            textAlign: "left",
    
        },
        successful:{
            color:"#454545",
            fontSize: 40,
            fontWeight: "600",
            top: 50,
            left: 40
        },
        successful_text:{
            color:"#000",
            fontSize:16,
            fontWeight: "400",
            top: 65,
            width: 295,
            left: 40

            
    
        },
        thanksbutton: {
            borderRadius: 7, // Adjust the border radius as needed
            paddingVertical: 0,
            elevation: 5, // For Android box shadow
            shadowColor: '#FF9393', // For iOS box shadow
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.35,
            shadowRadius: 12,
            width: 157,
            height:42,
            backgroundColor:"#FF9393",
          left:hp("15%"),
          top:hp("30%")

          },
          thankstext:{
            color: "#FFFFFF",
            fontSize: 24,
            textAlign: "center",
            fontWeight: "600",
            top: 4,
         
          },
        
    })
export default Successful