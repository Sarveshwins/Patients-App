import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';

  import { appColors } from '../../utils/Appcolors';
import PasswordError from '../Pssworderror';
//import { useAppCommonDataProvider } from '../useAppCommonDataProvider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const CommonTextInputsignin = ({
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
    
  }) => {
    const {colorScheme} = useAppCommonDataProvider();
    console.log(!passwordFocus && value?.length !== 0, passwordFocus, value);
    if (label?.includes('Password')) {
      return (
        <View style={{top:hp("15%"), left: 40, }}>
          <View
            style={{
              flexDirection: 'row',
    
              borderBottomColor: sucess ? appColors?.green : '#454545',
              borderBottomWidth: 3,
              width: 265,
              paddingLeft: 10,
              
              

            }}>
            <TextInput
        secureTextEntry={eyeValue}
              placeholder={label}
              onFocus={onFocus}
              onBlur={onBlur}
              onChangeText={onChangeText}
              value={value}
              style={{
                width: '90%',
                height: 40,
                fontSize: 17,
                paddingBottom: 10,
                color: "black",
                fontWeight: "bold"
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
      );
    }
    if (initvalue) {
      return (
        <View
          style={{
            height: 75,
            flexDirection: 'row',
            width: 265,
            height: 40,
            borderBottomColor: sucess ? appColors?.green : '#979797',
            borderBottomWidth: 0.6,
            
          }}>
          <Text
            style={{
              color: "black",
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
            style={[
              {
                width: 252,
                height: 40,
                paddingBottom: 20,
                fontSize: 17,
  
                color: "black",

              },
              style,
            ]}
          />
        </View>
      );
    }
    return (
      <View style={{height: 75}}>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          style={[
            {
              width: 265,
              height: 40,
              paddingBottom: 10,
              fontSize: 17,
              marginTop: '10%',
              borderBottomColor: sucess ? appColors?.green : '#454545',
              borderBottomWidth: 3,
              color: "black",
              fontFamily:"Roboto",
              left: 40,
              paddingLeft: 10,
              fontWeight:"bold"



            },
            style,
          ]}
        />
      </View>
    );
  };
  
  export default CommonTextInputsignin;
  
  const styles = StyleSheet.create({});
  