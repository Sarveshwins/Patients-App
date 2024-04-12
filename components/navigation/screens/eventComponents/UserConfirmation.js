import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ForWhom from './ForWhom';

const UserConfirmation = () => {
  return (
    <View style={{flex: 1, marginTop: 20}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
          padding: 15,
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          We Welcome You! {'\n'}But, are you?
        </Text>
        <Text
          style={{
            color: '#007AFF',
            fontSize: 17,
            fontWeight: '400',
          }}>
          Done
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          paddingHorizontal: 60,
        }}>
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => {
            <ForWhom />;
          }}>
          <View
            style={{
              backgroundColor: '#FFDFDF',
              paddingVertical: 15,
              borderRadius: 20,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 4,
              shadowOffset: {width: 3, height: 4},
              // marginBottom: 40,
            }}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>A New User</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: '#C7E2FF',
            paddingVertical: 15,
            borderRadius: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 4,
            shadowOffset: {width: 3, height: 4},
          }}>
          <Text style={{fontSize: 17, fontWeight: '500'}}>
            Already have an Account
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserConfirmation;

const styles = StyleSheet.create({});
