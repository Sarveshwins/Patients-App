import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
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
import SearchList from './eventComponents/SearchList';

const timeOut = 400;
const Events = () => {
  const refDataEmergency = useRef();
  const refDataEmergency2 = useRef();
  const inputRef = useRef();
  const {colorScheme} = useAppCommonDataProvider();

  const [pageIndex, setPageIndex] = useState('UserConfirmation');
  const [forMyself, setForMyself] = useState(true);

  const onSuccess = e => {
    console.log(e, 'eeeeee');
    Linking.openURL(e.data).catch(err =>
      console.error('An error occurred', err),
    );
  };

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
        return <BookAppointment onPress={onDone} />;
      case 'SelectRelation':
        return (
          <SelectRelation
            onDone={() => setPageIndex('BookAppointment')}
            onSearch={() => {
              setPageIndex('SearchList');
              refDataEmergency?.current?.close();
              setTimeout(() => {
                refDataEmergency2?.current?.open();
              }, timeOut);
            }}
          />
        );
      default:
        return <UserConfirmation onPress={e => setPageIndex(e)} />;
    }
  };
  {
    pageIndex;
  }
  const renderRBSheet = (ref, height, content) => (
    <RBSheet
      ref={ref}
      onClose={() => {
        pageIndex !== 'SelectRelation' && setPageIndex('UserConfirmation');
      }}
      height={height}
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
      {content}
    </RBSheet>
  );
  const searchListBtn = () => {
    refDataEmergency2?.current?.close();
    setTimeout(() => {
      refDataEmergency?.current?.open();
      setPageIndex('BookAppointment');
    }, timeOut);
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

      {renderRBSheet(refDataEmergency, 410, eventView())}
      {renderRBSheet(
        refDataEmergency2,
        Dimensions.get('screen').height,
        <SearchList inputRef={inputRef} onPress={searchListBtn} />,
      )}
    </View>
  );
};

export default Events;

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
