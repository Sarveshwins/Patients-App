import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {imagePath} from '../../../../utils/imagePath';

const SearchList = ({onPress, inputRef}) => {
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
    <View style={{flex: 1, paddingHorizontal: 30, marginTop: 50}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          Select Relations
        </Text>

        <TouchableOpacity onPress={onPress}>
          <Text style={{color: '#007AFF', fontSize: 17, fontWeight: '400'}}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#F4F4F4',
          paddingVertical: 10,
          borderRadius: 20,
          justifyContent: 'center',
        }}
        onPress={() => inputRef.current.focus()}>
        <Image
          source={imagePath.search}
          style={{
            width: 20,
            height: 20,
            tintColor: 'gray',
            marginHorizontal: 10,
            opacity: 0.5,
          }}
        />
        <TextInput ref={inputRef} placeholder="Quick Search a Relation" />
      </TouchableOpacity>
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
  );
};

export default SearchList;

const styles = StyleSheet.create({});
