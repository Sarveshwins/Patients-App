import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import { imagePath } from '../../utils/imagePath';
// import {imagePath} from '../../utils/imagePath';
// import {appColors} from '../../utils/appColors';
// import {useAppCommonDataProvider} from '../../navigation/AppCommonDataProvider';

const CommonButton = ({onPress, buttonText, success}) => {
  //   const {colorScheme} = useAppCommonDataProvider();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        backgroundColor: '#F9F9F9',
        borderColor: 'white',
        borderWidth: 1,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 19,
          color: 'black',
        }}>
        {buttonText}
      </Text>
      <Image
        tintColor={'black'}
         source={imagePath?.arrow}
      />
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({});
