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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    sucesss
    
  }) => {

    const isPassword = label?.toLowerCase().includes('password');
    const isConfirmPassword = label?.toLowerCase().includes('confirm password');
  
    return (
      <View style={{ left: 40 }}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: sucess ? appColors?.green : '#979797',
            borderBottomWidth: 3,
            width: hp("37%"),
            paddingLeft: 10,
            marginTop:20
          }}>
          <TextInput
            secureTextEntry={isPassword && eyeValue}
            placeholder={label}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            style={{
              width: '90%',
              fontSize: 17,
              color: 'black',
            }}
          />
          {isPassword && (
            <TouchableOpacity onPress={onChangeEye}>
              {/* Add your eye icon component here */}
            </TouchableOpacity>
          )}
        </View>
        {(isPassword || isConfirmPassword) && (
          <View style={{ bottom: 0, left: 0, right: 0 }}>
            <PasswordError
              passwordCheck={!passwordFocus && value?.length !== 0}
              value={value}
            />
          </View>
        )}
      </View>
    );
    if (initvalue) {
      return (
        <View
          style={{
            height: 75,
            flexDirection: 'row',
            width: hp("37%"),
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
              width: hp("37%"),
              height: 40,
              paddingBottom: 10,
              fontSize: 17,
              marginTop: '10%',
              borderBottomColor: sucess ? appColors?.green : '#979797',
              borderBottomWidth: 3,
              color: "black",
              fontFamily:"Roboto",
              left: 40,
              paddingLeft: 20,

            },
            style,
          ]}
        />
      </View>
    );
  };
  
  export default CommonTextInput;
  
  const styles = StyleSheet.create({});
  