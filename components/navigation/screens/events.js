import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import RBSheet from 'react-native-raw-bottom-sheet';
import UserConfirmation from './eventComponents/UserConfirmation';
import ForWhom from './eventComponents/ForWhom';
import EnterDetails from './eventComponents/EnterDetails';
import OTP from './eventComponents/OTP';
import BookAppointment from './eventComponents/BookAppointment';
import {useAppCommonDataProvider} from '../../UseAppCommonDataProvider';
import {appColors} from '../../../utils/Appcolors';

const events = () => {
  const refDataEmergency = useRef();
  const {colorScheme} = useAppCommonDataProvider();

  const onSuccess = e => {
    console.log(e, 'eeeeee');
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => {
              refDataEmergency?.current?.open();
            }}>
            <Text style={styles.buttonText}>done</Text>
          </TouchableOpacity>
        }
      />

      <RBSheet
        ref={refDataEmergency}
        height={410}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor:
              colorScheme === 'light' ? appColors?.white : appColors?.black,
          },
        }}>
        {/* <UserConfirmation /> */}
        {/* <ForWhom /> */}
        <EnterDetails />
        {/* <OTP /> */}
        {/* <BookAppointment /> */}
      </RBSheet>
    </View>
  );
};

export default events;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
