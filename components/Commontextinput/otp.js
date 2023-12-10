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
  const CommonTextInputotp = ({
    label,
    onChangeText,
    value,
  
   
    sucess,
  
    style,
    
  }) => {
   
   
    return (
      <View style={{height: 75}}>
        <TextInput

          onChangeText={onChangeText}
          value={value}
          placeholder={label}
          keyboardType='phone-pad'
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
              fontWeight:"bold",


            },
            style,
          ]}
        />
        
      </View>
    );
  };
  
  export default CommonTextInputotp;
  
  const styles = StyleSheet.create({});
  