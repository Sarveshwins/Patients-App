import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ForWhom = ({onPress, onDone}) => {
  return (
    <View style={{flex: 1, padding: 30}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          // marginHorizontal: 10,
          // padding: 15,
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          We Welcome You! {'\n'}Select for whom?
        </Text>
        <TouchableOpacity onPress={onDone}>
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
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => onPress('EnterDetails', true)}
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
          <Text style={{fontSize: 17, fontWeight: '500'}}>Myself</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPress('EnterDetails', false)}
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
          <Text style={{fontSize: 17, fontWeight: '500'}}>Relative</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForWhom;

const styles = StyleSheet.create({});
