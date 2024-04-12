import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {imagePath} from '../../../../utils/imagePath';

const SelectRelation = ({onDone, onSearch}) => {
  const relation = [
    'Father',
    'Mother',
    'Son',
    'Daughter',
    'Brother',
    'Sister',
    'Friend',
    'Parent',
    'Cousin',
    'Other',
  ];
  return (
    <View style={{flex: 1, padding: 30}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          //   marginHorizontal: 10,
          //   padding: 15,
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          Select Relations
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '25%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onSearch}>
            <Image
              source={imagePath?.search}
              style={{width: 20, height: 20, tintColor: '#007AFF'}}
            />
          </TouchableOpacity>
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
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff9',
        }}>
        <FlatList
          data={relation}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View key={index}>
              <Text style={{padding: 15}}>{item}</Text>
              <View style={{flex: 1, borderBottomWidth: 1.5}} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SelectRelation;

const styles = StyleSheet.create({});
