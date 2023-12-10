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
import { useAppCommonDataProvider } from '../UseAppCommonDataProvider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const CommonTextInputphonenumber = ({
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
    if (label?.includes('Password') && ('Confirm Password')) {
      return (
        <View style={{top:119, left: 40 }}>
          <View
            style={{
              flexDirection: 'row',
    
              borderBottomColor: sucess ? appColors?.green : '#454545',
              borderBottomWidth: 3,
              width: 265,
              marginTop: '10%',
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
                fontWeight: "500"
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
    const getBorderColor = () => {
        if (value.length === 0) {
          return "#454545"; // Black when input is empty
        } else if (value.length < 10) {
          return 'blue'; // Blue when typing
        } else {
          return appColors?.green; // Green when there are 10 digits
        }
      };
 
      if (initvalue) {
    return (
      <View style={{height: 75}}>
        <Text
              style={{
                color: colorScheme === 'light' ? 'black' : '#454545',
                fontSize: 17,
                top:hp("13.5%"),
                left: 40,
                fontWeight:"500",
                
              }}>
              {initvalue}
            </Text>
        <TextInput

          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType='phone-pad'
          style={[
            {
                
              width: 265,
              height: 40,
              fontSize: 17,
              paddingBottom: hp("1%"),
              marginTop: '10%',
              borderBottomColor: getBorderColor(), // Dynamic border color based on input length
              color: colorScheme === 'light' ? 'black' : '#454545',

              borderBottomWidth: 3,
              fontFamily:"Roboto",
              left: 40,
              paddingLeft: 60,
              fontWeight:"500",


            },
            style,
          ]}
        />
        
      </View>
    );
  };
}
  export default CommonTextInputphonenumber;
  
  const styles = StyleSheet.create({});
  