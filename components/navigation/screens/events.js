import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
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
import SelectRelation from './eventComponents/SelectRelation';

const events = () => {
  const refDataEmergency = useRef();
  const {colorScheme} = useAppCommonDataProvider();

  const onSuccess = e => {
    console.log(e, 'eeeeee');
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  const [pageIndex, setPageIndex] = useState('UserConfirmation');
  const [forMyself, setForMyself] = useState(true);

  const onDone = () => {
    refDataEmergency?.current?.close();
    setPageIndex('UserConfirmation');
  };

  const eventView = () => {
    switch (pageIndex) {
      case 'UserConfirmation':
        return <UserConfirmation onPress={setPageIndex} onDone={onDone} />;

      case 'ForWhom':
        return (
          <ForWhom
            onPress={(index, myself) => {
              setPageIndex(index), setForMyself(myself);
            }}
            onDone={onDone}
          />
        );
      case 'EnterDetails':
        return (
          <EnterDetails
            onPress={() => {
              forMyself ? setPageIndex('OTP') : setPageIndex('SelectRelation');
            }}
            onDone={onDone}
            forMyself={forMyself}
          />
        );
      case 'OTP':
        return (
          <OTP
            onPress={() => setPageIndex('BookAppointment')}
            onDone={onDone}
          />
        );
      case 'BookAppointment':
        return <BookAppointment onPress={() => console.log('22')} />;
      case 'SelectRelation':
        return (
          <SelectRelation
            onDone={() => setPageIndex('BookAppointment')}
            onSearch={() => {
              setPageIndex('SearchList'), refDataEmergency?.current?.close();
              console.log(pageIndex);
            }}
          />
        );

      default:
        <UserConfirmation onPress={e => setPageIndex(e)} />;
    }
  };
  {
    console.log(pageIndex);
  }
  return (
    <View style={styles.container}>
      {pageIndex == 'SearchList' ? (
        <View style={{flex: 1, paddingHorizontal: 30, marginTop: 50}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',

              width: '100%',
            }}>
            <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
              Select Relations
            </Text>

            <TouchableOpacity
              onPress={() => {
                setPageIndex('BookAppointment'),
                  refDataEmergency?.current?.open();
              }}>
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
        </View>
      ) : (
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
      )}

      <RBSheet
        ref={refDataEmergency}
        onClose={() => {
          pageIndex != 'SelectRelation' && setPageIndex('UserConfirmation');
        }}
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
        {eventView()}
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
