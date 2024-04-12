import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {imagePath} from '../../../../utils/imagePath';
import moment from 'moment/moment';

const BookAppointment = () => {
  const days = [
    {day: 'Today'},
    {day: '22,Wed'},
    {day: '23,Thur'},
    {day: '24,Fri'},
    {day: '25,Sat'},
    {day: '26,Sun'},
  ];
  const [Dates, setDates] = useState([
    {
      id: 1,
      name: 'Today',
      isSelected: true,
    },
    {
      id: 2,
      name: `${moment().add(1, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
    {
      id: 3,
      name: `${moment().add(2, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
    {
      id: 4,
      name: `${moment().add(3, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
    {
      id: 5,
      name: `${moment().add(4, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
    {
      id: 6,
      name: `${moment().add(5, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
    {
      id: 7,
      name: `${moment().add(6, 'days').format('DD, ddd')}`,
      isSelected: false,
    },
  ]);

  const timeInterval = [
    {t1: '06:30', t2: '07:00'},
    {t1: '07:00', t2: '07:30'},
    {t1: '07:30', t2: '08:00'},
    {t1: '08:00', t2: '08:30'},
    {t1: '08:30', t2: '09:00'},
    {t1: '09:00', t2: '09:30'},
    {t1: '09:30', t2: '10:00'},
    {t1: '10:00', t2: '10:30'},
    {t1: '10:30', t2: '11:00'},
    {t1: '11:00', t2: '11:30'},
    {t1: '11:30', t2: '12:00'},
    {t1: '12:00', t2: '12:30'},
    {t1: '12:30', t2: '13:00'},
    {t1: '13:00', t2: '13:30'},
    {t1: '13:30', t2: '14:00'},
  ];
  const [icons, setIcons] = useState([
    {
      id: 1,
      name: imagePath.appoint,
      isSelected: false,
    },
    {
      id: 2,
      name: imagePath.video,
      isSelected: false,
    },
    {
      id: 3,
      name: imagePath.wave,
      isSelected: false,
    },
  ]);
  const handleIconPress = id => {
    setIcons(prevIcons => {
      return prevIcons.map(icon => {
        if (icon.id === id) {
          return {...icon, isSelected: !icon.isSelected};
        }
        return icon;
      });
    });
  };
  const [dayIndex, setDayIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'space-between',
        paddingVertical: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: '500', flex: 1}}>
          Book {'\n'}Appointment
        </Text>
        {icons.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleIconPress(item.id)}
            style={{
              backgroundColor: item.isSelected ? '#2CD31180' : '#C4C4C4',
              borderRadius: 15,
              padding: 5,
              marginHorizontal: 10,
            }}>
            <Image
              key={index}
              source={item.name}
              style={{tintColor: item.isSelected ? '#fff' : '#000'}}
            />
          </TouchableOpacity>
        ))}
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
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <Text>Swapnil Katare</Text>
          <Text>M/23</Text>
          <Text>9876543210</Text>
        </View>
        <Text
          style={{
            color: 'green',
            alignSelf: 'flex-end',
            textDecorationLine: 'underline',
          }}>
          Change user
        </Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={Dates}
          renderItem={({item, index}) => (
            <Text
              onPress={() => setDayIndex(index)}
              style={{
                marginRight: 20,
                width: 80,
                textDecorationLine: index === dayIndex ? 'underline' : 'none',
              }}>
              {item.name}
            </Text>
          )}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={timeInterval}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View
                style={{
                  marginRight: 20,
                  borderRadius: 10,
                  borderColor: '#CC9B66',
                  borderWidth: 2,
                  height: 40,
                  width: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 15,
                }}>
                <Text>{item.t1}</Text>
              </View>
              <View
                style={{
                  marginRight: 20,
                  borderRadius: 10,
                  borderColor: '#CC9B66',
                  borderWidth: 2,
                  height: 40,
                  width: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>{item.t2}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          opacity: 0.2,
          paddingHorizontal: 10,
          borderRadius: 10,
          borderWidth: 2,
          paddingVertical: 5,
        }}>
        <Text style={{fontWeight: '500', fontSize: 22}}>
          Confirm Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
