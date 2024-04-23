import React, {useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment/moment';
import {imagePath} from '../../../../utils/imagePath';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useAppCommonDataProvider} from '../../../UseAppCommonDataProvider';
import {appColors} from '../../../../utils/Appcolors';
const BookAppointment = ({onPress}) => {
  const [icons, setIcons] = useState([
    {id: 1, name: imagePath.appoint, isSelected: false},
    {id: 2, name: imagePath.video, isSelected: false},
    {id: 3, name: imagePath.wave, isSelected: false},
  ]);

  const [dayIndex, setDayIndex] = useState(0);

  const handleIconPress = id => {
    setIcons(prevIcons =>
      prevIcons.map(icon =>
        icon.id === id ? {...icon, isSelected: !icon.isSelected} : icon,
      ),
    );
  };

  const days = Array.from({length: 7}, (_, i) => {
    const currentDate = moment().add(i, 'days').format('YYYY-MM-DD');
    let dayName = moment().add(i, 'days').format('DD, ddd');

    if (currentDate === moment().format('YYYY-MM-DD')) {
      dayName = 'today';
    } else if (currentDate === moment().add(1, 'days').format('YYYY-MM-DD')) {
      dayName = 'tomorrow';
    }

    return dayName;
  });

  const timeInterval = Array.from({length: 15}, (_, i) => {
    const startTime = moment('06:30', 'HH:mm')
      .add(i * 30, 'minutes')
      .format('HH:mm');
    const endTime = moment('06:30', 'HH:mm')
      .add((i + 1) * 30, 'minutes')
      .format('HH:mm');
    return {t1: startTime, t2: endTime};
  });
  const timeRef = useRef();
  const [paddingList, setPaddingList] = useState(30);

  const userList = [
    {
      id: 1,
      name: 'Swapnil Katare',
      age: 23,
      phone: '9876543210',
      gender: 'Female',
      genderSyntax: 'F',
    },
    {
      id: 2,
      name: 'Puneet',
      age: 26,
      phone: '7878787878',
      gender: 'Male',
      genderSyntax: 'M',
    },
    {
      id: 3,
      name: 'Nitin',
      age: 19,
      phone: '9879879876',
      gender: 'Male',
      genderSyntax: 'M',
    },
    {
      id: 4,
      name: 'Gauri',
      age: 22,
      phone: '9874563210',
      gender: 'Female',
      genderSyntax: 'F',
    },
    {
      id: 5,
      name: 'Rajni',
      age: 30,
      phone: '5285252525',
      gender: 'Female',
      genderSyntax: 'F',
    },
  ];
  const listRef = useRef();
  const {colorScheme} = useAppCommonDataProvider();
  const [listIndex, setListIndex] = useState(0);
  const {name, age, phone, gender, genderSyntax} = userList[listIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Book {'\n'}Appointment</Text>
        {icons.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleIconPress(item.id)}
            style={[
              styles.iconButton,
              {backgroundColor: item.isSelected ? '#2CD31180' : '#C4C4C4'},
            ]}>
            <Image
              source={item.name}
              style={{tintColor: item.isSelected ? '#fff' : '#000'}}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
        <Image
          source={imagePath.user}
          style={{
            height: 60,
            width: 60,
            backgroundColor: 'gray',
            borderRadius: 20,
          }}
        />
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <Text>{name}</Text>
          <Text>
            {genderSyntax}/{age}
          </Text>
          <Text>{phone}</Text>
        </View>
        <TouchableOpacity
          style={{alignSelf: 'flex-end'}}
          onPress={() => listRef?.current.open()}>
          <Text
            style={{
              color: 'green',

              textDecorationLine: 'underline',
            }}>
            Change user
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{paddingHorizontal: 30}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={days}
            renderItem={({item, index}) => (
              <Text
                onPress={() => {
                  setDayIndex(index),
                    timeRef.current.scrollToIndex({index: 0}),
                    setPaddingList(30);
                }}
                style={{
                  marginRight: 20,
                  width: 80,
                  textDecorationLine: index === dayIndex ? 'underline' : 'none',
                }}>
                {item}
              </Text>
            )}
          />
        </View>

        <View style={{paddingHorizontal: paddingList}}>
          <FlatList
            ref={timeRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={timeInterval}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View style={styles.timeInterval}>
                  <Text>{item.t1}</Text>
                </View>
                <View style={styles.timeInterval}>
                  <Text>{item.t2}</Text>
                </View>
              </TouchableOpacity>
            )}
            onScrollBeginDrag={() => setPaddingList(0)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
        <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
      </TouchableOpacity>
      <RBSheet
        ref={listRef}
        height={478}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor:
              colorScheme === 'light' ? appColors?.white : appColors?.black,
          },
        }}>
        <View style={{width: '100%', flex: 1, padding: 30}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
              Select User
            </Text>
            <TouchableOpacity onPress={() => listRef?.current.close()}>
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
          <FlatList
            data={userList}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={index}
                style={{
                  borderColor: index == listIndex ? 'green' : 'gray',
                  borderBottomWidth: 1,
                  padding: 10,
                }}
                onPress={() => {
                  listRef?.current.close(), setListIndex(index);
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    flex: 1,
  },
  iconButton: {
    borderRadius: 15,
    padding: 5,
    marginHorizontal: 10,
  },
  confirmButton: {
    alignSelf: 'center',
    opacity: 0.2,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    paddingVertical: 5,
  },
  confirmButtonText: {
    fontWeight: '500',
    fontSize: 22,
  },
  timeInterval: {
    marginRight: 20,
    borderRadius: 10,
    borderColor: '#CC9B66',
    borderWidth: 2,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default BookAppointment;
