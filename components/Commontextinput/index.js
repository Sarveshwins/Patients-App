import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {appColors} from '../../utils/Appcolors';
import PasswordError from '../Pssworderror';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useAppCommonDataProvider} from '../UseAppCommonDataProvider';
import ShakeComponent from '../ShakeComponent';

const CommonTextInput = ({
  label,
  onChangeText,
  value,
  onChangeEye,
  eyeValue,
  initvalue,
  sucess,
  passwordFocus,
  onFocus,
  onBlur,
  style,
  maxlength,
  keyboardType,
  editable,
  shouldShake,
  render,
}) => {
  const {colorScheme} = useAppCommonDataProvider();
  console.log(!passwordFocus && value?.length !== 0, passwordFocus, value);
  if (label?.includes('Password')) {
    return (
      <ShakeComponent shouldShake={shouldShake} render={render}>
        <View style={[{height: 75}, style]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomColor: sucess
                ? appColors?.green
                : appColors?.loaderColor,
              borderBottomWidth: 1,
              width: 265,
              marginTop: '10%',
            }}>
            <TextInput
              secureTextEntry={eyeValue}
              placeholder={label}
              onFocus={onFocus}
              placeholderTextColor={
                colorScheme === 'light'
                  ? appColors?.white
                  : appColors?.loaderColor
              }
              onBlur={onBlur}
              onChangeText={onChangeText}
              value={value}
              style={{
                width: '90%',
                height: 40,
                fontSize: 17,
                paddingBottom: 10,
                color:
                  colorScheme === 'light' ? appColors?.black : appColors?.white,
              }}
            />
            <TouchableOpacity
              onPress={onChangeEye}
              style={
                {
                  // backgroundColor: 'red',
                  // height: '80%',
                }
              }>
              <Image
                // source={eyeValue ? imagePath?.eyeClose : imagePath?.eyeOpen}
                style={{
                  height: 17,
                  width: 17,
                }}
              />
            </TouchableOpacity>
          </View>
          {console.log(value, '<---valuevalue')}
          {value?.length !== 0 && (
            <View>
              <PasswordError
                passwordFocus={passwordFocus}
                passwordCheck={!passwordFocus && value?.length !== 0}
                value={value}
              />
            </View>
          )}
        </View>
      </ShakeComponent>
    );
  }
  if (initvalue) {
    return (
      <ShakeComponent shouldShake={shouldShake} render={render}>
        <View
          style={[
            {
              height: 75,
              flexDirection: 'row',
              width: 265,
              height: 40,
              borderBottomColor: sucess ? appColors?.green : '#979797',
              borderBottomWidth: 0.6,
            },
            style,
          ]}>
          <Text
            style={{
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
              marginRight: 10,
              fontSize: 17,
              justifyContent: 'center',
            }}>
            {initvalue}
          </Text>
          <TextInput
            onChangeText={onChangeText}
            maxLength={maxlength}
            value={value}
            placeholder={label}
            style={{
              width: 252,
              height: 40,
              paddingBottom: 20,
              fontSize: 17,
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            }}
          />
        </View>
      </ShakeComponent>
    );
  }
  return (
    <ShakeComponent shouldShake={shouldShake} render={render}>
      <View
        style={[
          {
            height: 75,
            justifyContent: 'flex-end',
          },
          style,
        ]}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          editable={editable}
          keyboardType={keyboardType ? keyboardType : 'default'}
          placeholder={label}
          placeholderTextColor={
            colorScheme === 'light' ? appColors?.loaderColor : appColors?.white
          }
          style={[
            {
              height: 40,
              paddingBottom: 9,
              paddingLeft: 10,
              fontSize: 16,
              fontWeight: '500',
              marginTop: '10%',
              borderBottomColor: sucess
                ? appColors?.green
                : appColors?.bottomGray,

              borderBottomWidth: 3,
              color:
                colorScheme === 'light' ? appColors?.black : appColors?.white,
            },
          ]}
        />
      </View>
    </ShakeComponent>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({});
