import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {imagePath} from '../../../../utils/imagePath';

const BookAppointment = () => {
  return (
    <View style={{flex: 1, width: '100%', paddingHorizontal: 30}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: '500', flex: 1}}>
          Book {'\n'}Appointment
        </Text>
        <Image source={imagePath.FIcon} style={{height: 30, width: 30}} />
        <Image source={imagePath.FIcon} style={{height: 30, width: 30}} />

        <Image source={imagePath.FIcon} style={{height: 30, width: 30}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={imagePath.user}
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'gray',
            borderRadius: 20,
          }}
        />
        <View style={{flex: 1}}>
          <Text>Swapnil Katare</Text>
          <Text>M/23</Text>
          <Text>9876543210</Text>
        </View>
        <Text style={{color: 'green', alignSelf: 'flex-end'}}>Change user</Text>
      </View>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
