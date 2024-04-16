import React, {useState} from 'react';
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
          data={days}
          renderItem={({item, index}) => (
            <Text
              onPress={() => setDayIndex(index)}
              style={{
                marginRight: 20,
                width: 80,
                textDecorationLine: index === dayIndex ? 'underline' : 'none',
              }}>
              {item}
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
                  marginVertical: 10,
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
                  marginVertical: 10,
                }}>
                <Text>{item.t2}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Appointment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
});

export default BookAppointment;
