import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from '../../../Commontextinput';
import {imagePath} from '../../../../utils/imagePath';
import {useAppCommonDataProvider} from '../../../UseAppCommonDataProvider';
import {appColors} from '../../../../utils/Appcolors';
import DatePicker from 'react-native-date-picker';
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from 'react-native-picker-select/src/index.js';
import ShakeComponent from '../../../ShakeComponent';

const EnterDetails = ({onPress, onDone, forMyself}) => {
  const [count, setCount] = useState(0);
  const {colorScheme} = useAppCommonDataProvider();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [activatePicker, setActivatePicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const newDate = new Date(date);
  const currentDate = new Date();
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const formattedDate = `${day}/${month < 10 ? '0' : ''}${month}/${year}`;

  const dateCompare = currentDate > newDate;
  const [signUpValues, setSignUpValues] = useState({
    firstName: '',
    lastName: '',
    Phone: '',
    Gender: '',
    DOB: '',
  });
  const handleChange = (key, value) => {
    setSignUpValues(prevState => ({...prevState, [key]: value}));
  };

  const validate = () => {
    setCount(count + 1);
    if (
      signUpValues?.firstName.length > 2 &&
      signUpValues?.lastName.length > 2 &&
      signUpValues?.Phone.length === 10
    ) {
      onPress();
      return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        // marginTop: 20,
        padding: 30,
        backgroundColor:
          colorScheme === 'light' ? appColors?.white : appColors?.black,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: '100%',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: '700'}}>
          {forMyself ? 'Enter Details for Myself' : 'Enter Relatives Details'}
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
      <View style={{flex: 1}}>
        <CommonTextInput
          style={{height: 60}}
          label="First Name"
          value={signUpValues?.firstName}
          sucess={signUpValues?.firstName.length > 2}
          onChangeText={text => handleChange('firstName', text)}
          shouldShake={count != 0 && signUpValues?.firstName.length < 3}
          render={count}
        />
        <CommonTextInput
          style={{height: 60}}
          label="Last Name"
          value={signUpValues?.lastName}
          sucess={signUpValues?.lastName.length > 2}
          onChangeText={text => handleChange('lastName', text)}
          shouldShake={count != 0 && signUpValues?.lastName.length < 3}
          render={count}
        />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              marginRight: 30,
            }}>
            <ShakeComponent
              render={count}
              shouldShake={count != 0 && !selectedValue}>
              <View
                style={{
                  height: 60,
                  borderBottomColor: selectedValue
                    ? appColors?.green
                    : appColors?.bottomGray,
                  borderBottomWidth: 3,
                  justifyContent: 'flex-end',
                }}>
                <RNPickerSelect
                  value={selectedValue}
                  onValueChange={value => setSelectedValue(value)}
                  items={[
                    // {label: 'Select One', value: null},
                    {label: 'Male', value: 'Male'},
                    {label: 'Female', value: 'Female'},
                  ]}
                  placeholder={{label: 'Gender', value: null}}
                  style={{
                    placeholder: {color: appColors?.loaderColor},
                    inputAndroid: {
                      height: 40,
                      fontSize: 16,
                      fontWeight: '500',
                      paddingHorizontal: 10,
                      color: 'black',
                      backgroundColor: 'white',
                      textColor: 'black',
                    },
                    inputIOS: {
                      height: 40,
                      fontSize: 16,
                      fontWeight: '500',
                      paddingHorizontal: 10,
                      color: 'black',
                      backgroundColor: 'white',
                      textColor: 'black',
                    },
                  }}
                />
              </View>
            </ShakeComponent>
          </View>

          <View
            style={{
              flex: 1,
            }}>
            <ShakeComponent
              render={count}
              shouldShake={count != 0 && !activatePicker}>
              <TouchableOpacity
                onPress={() => {
                  setOpen(true), setActivatePicker(true);
                }}>
                <View
                  style={{
                    height: 60,
                    borderBottomColor:
                      date && activatePicker
                        ? dateCompare
                          ? appColors?.green
                          : appColors?.lightRed
                        : appColors?.loaderColor,
                    borderBottomWidth: 3,
                    justifyContent: 'flex-end',
                  }}>
                  <Text
                    style={{
                      height: 40,
                      paddingLeft: 10,
                      fontSize: 16,
                      fontWeight: '500',
                      paddingTop: 10,
                      color:
                        date && activatePicker
                          ? appColors?.textColor
                          : appColors?.loaderColor,
                    }}>
                    {date && activatePicker ? formattedDate : 'Date of Birth'}
                  </Text>
                </View>
              </TouchableOpacity>
            </ShakeComponent>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
        </View>
        <CommonTextInput
          style={{height: 60}}
          label="Phone Number"
          value={count != 0 && signUpValues?.Phone}
          sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
          onChangeText={text => handleChange('Phone', text)}
          shouldShake={
            count != 0 &&
            !/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)
          }
          render={count}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {forMyself ? (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  source={imagePath.FIcon}
                  style={{height: 60, width: 60}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={imagePath.GIcon}
                  style={{height: 60, width: 60}}
                />
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )}
          <TouchableOpacity
            onPress={validate}
            style={{
              flexDirection: 'row',
              width: '35%',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              borderRadius: 13,
              height: 46,
              backgroundColor: '#F7F7F7',
              shadowColor: '#000',
              shadowOpacity: 0.2,
              shadowRadius: 4,
              shadowOffset: {width: 3, height: 3},
            }}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>Next</Text>
            <Image
              source={imagePath.forwardVector}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EnterDetails;
