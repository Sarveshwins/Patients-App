import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import OtpInputs from 'react-native-otp-inputs';
import {imagePath} from '../../../../utils/imagePath';

const OTP = ({onPress, onDone}) => {
  return (
    <View style={{flex: 1, padding: 30}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //   marginHorizontal: 10,
          //   paddingHorizontal: 20,
          // paddingVertical: 10,
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          Verification Details
        </Text>
        <TouchableOpacity onPress={onDone}>
          <Text
            style={{
              color: '#007AFF',
              fontSize: 17,
              fontWeight: '400',
            }}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            //   marginHorizontal: 30,
            height: 200,
            //   backgroundColor: 'red',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Enter verification code
          </Text>
          <OtpInputs
            inputContainerStyles={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: '1.8%',
              borderRadius: 10,
              borderColor: 'black',
              // top: 158,
              // right: 10,
              backgroundColor: 'rgba(247, 247, 247, 1)',
            }}
            inputStyles={{
              //   color:
              //     colorScheme === 'light' ? appColors?.black : appColors?.white,
              width: 45,
              height: 45,
              justifyContent: 'center',
              textAlign: 'center',
            }}
            keyboardType="phone-pad"
            style={{flexDirection: 'row'}}
            numberOfInputs={6}
            //   handleChange={handleOtpChange} // Call this function when OTP changes
          />
          <Text style={{width: '80%', color: '#FD962A'}}>
            Resend verification code
          </Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            width: '35%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 15,
            borderRadius: 13,
            height: 46,
            backgroundColor: '#F7F7F7',

            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: {width: 3, height: 3},
          }}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Next</Text>
          <Image
            source={imagePath.forwardVector}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({});
