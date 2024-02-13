import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../ScreenWrapper';
const Changepwsuccess = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.group1}>
            <Text style={styles.successful}>Successful</Text>
            <Text style={styles.successful_text}>
              You have successfully changed your password
            </Text>
            <Image
              style={{
                marginVertical: '35%',
                alignContent: 'center',
                alignItems: 'center',
              }}
              source={require('../../assets/logos/success.png')}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{...styles.thanksbutton}}
          onPress={() => navigation.navigate('Successful')}>
          <Text style={{...styles.thankstext}}>Thanks</Text>
        </TouchableOpacity>
      </ScreenWrapper>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor:"white"
    top: 0,
  },
  // group 1 start

  group1: {
    textAlign: 'left',
  },
  successful: {
    color: '#454545',
    fontSize: 40,
    fontWeight: '600',
    top: 50,
    left: 40,
  },
  successful_text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    top: 65,
    width: 295,
    left: 40,
  },
  thanksbutton: {
    borderRadius: 7, // Adjust the border radius as needed
    paddingVertical: 0,
    elevation: 5, // For Android box shadow
    shadowColor: '#FF9393', // For iOS box shadow
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    width: 157,
    height: 42,
    backgroundColor: '#FF9393',
    left: 117,
  },
  thankstext: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '600',
    top: 4,
  },
});
export default Changepwsuccess;
