// ParticipantForm.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  FlatList,
  Animated,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DatePicker from 'react-native-date-picker';
const {width} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';

const calculateAge = birthdate => {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const ParticipantForm = ({
  isVisible,
  onClose,
  onSave,
  defaultRelationships,
  onImageSelect,
}) => {
  const [selectedRelationship, setSelectedRelationship] = useState('');
  const [relationship, setRelationship] = useState('');
  const [sliderVisible, setSliderVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [question, setQuestion] = useState('');

  const [profile, setProfile] = useState(null);

  const handleSave = () => {
    if (!relationship && !selectedRelationship) {
      Alert.alert(
        'Validation Error',
        'Please select a relationship or enter a custom one.',
      );
      return;
    }

    if (selectedRelationship) {
      // Show the slider/modal for additional information
      setSliderVisible(true);
    } else {
      onSave({relationship: relationship});

      onClose();
    }
  };

  const handleSliderSave = () => {
    // Perform any validation on the additional information if needed
    // Save the additional information and close the slider/modal
    const additionalInfo = {
      firstName,
      lastName,
      phoneNo,
      Age,
      Gender,
      image: profile,
    };
    if (!firstName || !lastName) {
      Alert.alert(
        'Validation Error',
        'Please enter both first name and last name.',
      );
      return;
    }
    if (phoneNo !== '' && phoneNo.length !== 10) {
      Alert.alert(
        'Validation Error',
        'Please enter a 10-digit phone number or leave it empty.',
      );
      return;
    }

    setEnteredAge(Age);
    onSave({relationship: selectedRelationship, additionalInfo});
    onClose();
  };

  useEffect(() => {
    // Check if a default relationship is selected and save automatically
    if (selectedRelationship) {
      // Show the slider/modal for additional information
      setSliderVisible(true);
    }
  }, [selectedRelationship]);
  const imagepick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setProfile(image.path);
    });
  };
  return (
    <SafeAreaView>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Relationships</Text>
          <FlatList
            data={defaultRelationships}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => setSelectedRelationship(item)}
                style={[
                  styles.defaultRelationship,
                  selectedRelationship === item
                    ? styles.selectedRelationship
                    : null,
                ]}>
                <Text style={styles.relationshipText}>{item}</Text>
                {selectedRelationship === item && (
                  <Text style={styles.tickMark}>✓</Text>
                )}
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            style={styles.defaultRelationshipList}
          />

          {/* <TextInput
        style={styles.input}
        placeholder="Or enter a custom relationship"
        value={relationship}
        onChangeText={(text) => setRelationship(text)}
      /> */}

          {/* Slider/Modal for additional information */}
          {sliderVisible && (
            <>
              <View style={styles.overlay} />

              <View style={styles.sliderContainer}>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSliderSave}>
                  <Text style={styles.saveButtonText}>Done</Text>
                </TouchableOpacity>

                <Text style={[styles.labelbrother, {}]}>
                  {selectedRelationship}
                </Text>
                <TouchableOpacity
                  style={styles.imagepicker}
                  onPress={imagepick}>
                  <>
                    <Image
                      style={styles.imagelogo}
                      source={
                        profile
                          ? {uri: profile}
                          : require('../../../assets/isection/imagepicker.png')
                      }
                    />
                    <Text
                      style={[
                        styles.edittext,
                        {
                          textAlign: 'center',
                          top: 80,
                          color: '#212121',
                          fontWeight: '300',
                          backgroundColor: '#A5A5A5',
                          borderBottomLeftRadius: 991,
                          borderBottomRightRadius: 991,
                          paddingVertical: 0,
                          left: 13,
                          right: 13,
                          position: 'absolute',
                        },
                      ]}>
                      Edit
                    </Text>
                  </>
                </TouchableOpacity>
                {enteredAge !== '' && (
                  <Text style={styles.enteredAgeText}>{enteredAge}</Text>
                )}
                {/* First Name */}
                <TextInput
                  style={styles.sliderinput}
                  placeholder="First Name:"
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />

                {/* Last Name */}
                <TextInput
                  style={styles.sliderinput}
                  placeholder="Last Name"
                  value={lastName}
                  onChangeText={text => setLastName(text)}
                />

                {/* Phone Number */}
                <TextInput
                  style={styles.sliderinput}
                  placeholder="Phone Number"
                  value={phoneNo}
                  onChangeText={text => setPhoneNo(text)}
                  keyboardType="numeric"
                />
                <View>
                  <TextInput
                    style={styles.sliderinput}
                    placeholder="Age"
                    value={enteredAge}
                    onChangeText={text => {
                      setAge(text);
                      setEnteredAge(text); // Update enteredAge instantly
                    }}
                  />
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <AntDesign
                      style={styles.datepicker}
                      name="calendar"
                      size={25}
                      color="#D9D9D9"
                    />
                  </TouchableOpacity>
                </View>
                {/* Add the following code for the DatePicker */}

                {/* Add the following code for the DatePicker */}
                {showDatePicker && (
                  <DatePicker
                    modal
                    open={showDatePicker}
                    date={date}
                    mode="date" // Set the mode to 'date'
                    onConfirm={selectedDate => {
                      setShowDatePicker(false);
                      setDate(selectedDate);
                      const age = calculateAge(selectedDate); // Use the calculateAge function
                      setEnteredAge(age.toString());
                    }}
                    onCancel={() => setShowDatePicker(false)}
                  />
                )}

                <TextInput
                  style={[styles.sliderinput, {bottom: 30}]}
                  placeholder="Gender"
                  value={Gender}
                  onChangeText={text => setGender(text)}
                />
              </View>
            </>
          )}
        </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imagelogo: {
    alignSelf: 'center',
    top: 15,
  },
  imagepicker: {
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    borderRadius: 41,
    backgroundColor: '#C4C4C4',
    position: 'absolute',
  },
  datepicker: {
    alignSelf: 'flex-end',
    bottom: 40,
    right: 32,
  },
  enteredAgeText: {
    fontSize: 15,
    color: '#000',
    left: 20,
    marginTop: 10,
    fontWeight: '700',
  },

  formContainer: {
    padding: 20,
    height: hp('100%'),
  },
  label: {
    color: '#000',
    fontSize: 28,
    fontWeight: '500',
    left: 30,
  },
  labelbrother: {
    color: '#000',
    fontSize: 28,
    fontWeight: '500',
    left: 20,
  },
  sliderinput: {
    fontSize: 17,
    marginBottom: 5,
    color: '#291E17',
    left: 20,
    borderBottomWidth: 0.6,
    borderBottomColor: '#CC9B66',
    width: 315,
    fontWeight: '500',
    marginTop: 36,
  },
  imagePickerButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center', // Center the text
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  saveButton: {},
  saveButtonText: {
    color: '#2D8AE0',
    fontSize: 17,
    fontWeight: '500',
    left: 20,
  },
  defaultRelationshipList: {
    marginTop: 10,
    height: hp('100%'),
  },

  selectedRelationship: {
    borderRadius: 5,
  },
  relationshipText: {
    fontSize: 17,
    marginBottom: 5,
    color: '#291E17',
    left: 30,
    marginTop: 22,
    borderBottomWidth: 2,
    borderBottomColor: '#CC9B66',
    height: 30,
    width: 314,
    fontWeight: '400',
  },
  tickMark: {
    position: 'absolute',
    right: 10,
    top: 22,
    color: 'black',
    fontSize: 16,
    width: 21,
    height: 21,
  },
  sliderContainer: {
    height: hp('69%'),
    backgroundColor: '#FFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
    top: 20, // This ensures that the overflow is hidden, making the border-radius visible
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the alpha (fourth parameter) to control transparency
  },
});

export default ParticipantForm;
