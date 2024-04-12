import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from '../../../Commontextinput';
import {imagePath} from '../../../../utils/imagePath';
import {useAppCommonDataProvider} from '../../../UseAppCommonDataProvider';
import {appColors} from '../../../../utils/Appcolors';

const EnterDetails = ({onPress, onDone, forMyself}) => {
  const {colorScheme} = useAppCommonDataProvider();

  const [signUpValues, setSignUpValues] = useState({
    firstName: '',
    lastName: '',
    Phone: '',
    Gender: '',
    DOB: '',
  });
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
          // marginHorizontal: 10,
          // paddingHorizontal: 20,
          // paddingVertical: 10,
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
          onChangeText={e => {
            setSignUpValues({...signUpValues, firstName: e});
          }}
          shouldShake={signUpValues?.firstName.length < 3}
        />
        <CommonTextInput
          style={{height: 60}}
          label="Last Name"
          value={signUpValues?.lastName}
          sucess={signUpValues?.lastName.length > 2}
          onChangeText={e => {
            setSignUpValues({...signUpValues, firstName: e});
          }}
          shouldShake={signUpValues?.lastName.length < 3}
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
            <CommonTextInput
              style={{height: 60}}
              label="Gender"
              value={signUpValues?.Gender}
              sucess={signUpValues?.Gender}
              onChangeText={e => {
                setSignUpValues({...signUpValues, Gender: e});
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <CommonTextInput
              style={{height: 60}}
              label="Date of Birth"
              value={signUpValues?.DOB}
              sucess={signUpValues?.DOB}
              onChangeText={e => {
                setSignUpValues({...signUpValues, DOB: e});
              }}
            />
          </View>
        </View>
        <CommonTextInput
          style={{height: 60}}
          label="Phone Number"
          value={signUpValues?.Phone}
          sucess={/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)}
          onChangeText={e => {
            setSignUpValues({...signUpValues, Phone: e});
          }}
          shouldShake={
            !/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(signUpValues?.Phone)
          }
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
            onPress={onPress}
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
