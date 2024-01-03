import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  Text,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Line from '../../../assets/mesection/Line.png';
import EditIcon from '../../../assets/mesection/icons8.png';
import {useTheme} from '../../ThemeContext';

function EditSection({navigation}) {
  const [profile, setProfile] = useState(null);
  const [firstName, setFirstName] = useState('Gauri');
  const [lastName, setLastName] = useState('Kannurkar');
  const [contacts, setContacts] = useState('9892271863');
  const [emails, setEmails] = useState('test@gmail.com');
  //const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleSwitch = () => {
  //   setIsDarkMode(prev => !prev);
  // };

  const {isDarkMode, toggleDarkMode} = useTheme();

  const toggleSwitch = () => {
    toggleDarkMode();
  };

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

  function handleImagePress() {
    navigation.navigate('Meprofile');
  }

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: isDarkMode ? '#212121' : '#FFF',
      paddingTop: hp('1%'), // Adjust the percentage as needed
    },
    InputWrapper: {
      height: hp('75%'),
      width: hp('80%'),
    },
    editIcon: {
      position: 'absolute',
      overflow: 'visible',
      marginLeft: hp('18%'),
      marginTop: hp('5%'),
      flex: 2,
      width: hp('3%'),
      height: hp('3%'),
      backgroundColor: '#fff',
      borderRadius: 10,
    },
    image1: {
      overflow: 'visible',
      position: 'relative',
      display: 'flex',
      marginLeft: 31,
      flexDirection: 'column',
      width: hp('41%'),
      height: hp('5%'),
    },
    viewtext: {
      color: '#212121',
      //marginTop: 48,
      font: '700 15px SF Pro Display, sans-serif ',
      marginLeft: 50,
      flexDirection: 'row',
    },
    viewtextlogout: {
      color: '#D0021B',
      //marginTop: 48,
      font: '700 15px SF Pro Display, sans-serif ',
      marginLeft: hp('21%'),
      flexDirection: 'row',
    },
    text: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Bold', // Replace 'SFProDisplay-Bold' with the actual font family you're using
      fontWeight: '700',
      color: isDarkMode ? '#FFF' : '#212121',
    },
    logout: {
      fontSize: 17,
      fontFamily: 'SFProDisplay-Bold', // Replace 'SFProDisplay-Bold' with the actual font family you're using
      fontWeight: '700',
      color: '#D0021B',
      textAlign: 'center',
    },
    scrollContent: {
      minHeight: hp('70%'),
    },
    container: {
      backgroundColor: isDarkMode ? '#212121' : '#FFF',
    },
    header: {
      height: hp('25%'),
      backgroundColor: isDarkMode ? '#212121' : '#FFF',
    },
    Addsection: {
      height: hp('15%'),
      backgroundColor: isDarkMode ? '#212121' : '#FFF',
    },
    section2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textInput: {
      color: isDarkMode ? '#FFF' : '#291E17',
      fontWeight: '500',
      fontSize: 17,
      marginLeft: 5,
      bottom: 12,
      marginBottom: -25,
    },

    imageprofile: {
      top: 41,
      left: 30,
      borderRadius: 51,
      width: hp(17),
      height: hp(17),
      position: 'absolute',
      borderWidth: 10,
      borderColor: isDarkMode ? '#9E9E9E' : '#fff',
      backgroundColor: '#C4C4C4',
      overflow: 'hidden', 
      margin: 10,       
      //elevation: 50, 
      shadowColor: '#CC9B66',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 25,
      shadowOpacity: 10,
      borderRadius: 51,
    },
    m: {
      color: '#4a90e2',
    },
    y: {
      color: '#d0021b',
    },
    s: {
      color: '#7ed321',
    },
    e: {
      color: '#f8e71c',
    },
    l: {
      color: '#f5a623',
    },
    f: {
      color: '#b888b8',
    },
    myself: {
      fontSize: 18,
      fontWeight: '600',
      top: hp('9%'),
      left: 187,
    },
    namesection: {
      left: 187,
      position: 'absolute',
      top: 103,
    },

    fullname: {
      fontSize: 17,
      color: isDarkMode ? '#fff' : '#291E17',
    },
    age: {
      fontWeight: '200',
      left: 206,
      position: 'absolute',
      top: 126,
      fontSize: 17,
      color: isDarkMode ? '#fff' : '#291E17',
    },
    status: {
      left: 235,
      position: 'absolute',
      fontSize: 17,
      top: 126,
      color: isDarkMode ? '#fff' : '#291E17',
    },
    gender: {
      fontSize: 17,
      color: isDarkMode ? '#fff' : '#291E17',
    },
    city: {
      left: 187,
      position: 'absolute',
      fontSize: 17,
      top: 148,
      fontWeight: '100',
      color: isDarkMode ? '#fff' : '#291E17',
    },
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.editIcon} source={EditIcon} />
          <TouchableHighlight
            underlayColor="transparent"
            onPress={handleImagePress}>
            <Image
              style={styles.imageprofile}
              resizeMode="cover"
              source={
                profile
                  ? {uri: profile}
                  : require('../../../assets/isection/emptyavator.png')
              }
            />
          </TouchableHighlight>
          <Text style={styles.myself}>
            <Text style={styles.m}>M</Text>
            <Text style={styles.y}>y</Text>
            <Text style={styles.s}>s</Text>
            <Text style={styles.e}>e</Text>
            <Text style={styles.l}>l</Text>
            <Text style={styles.f}>f</Text>
          </Text>
          <View style={styles.namesection}>
            <Text style={styles.fullname}>{`${firstName} ${lastName}`}</Text>
            <Text style={styles.gender}>F/</Text>
          </View>
          <Text style={styles.age}>23</Text>
          <Text style={styles.status}>Single</Text>
          <Text style={styles.city}>Pune</Text>
        </View>
        <View style={styles.InputWrapper}>
          <View style={styles.wrapper}>
            <View style={styles.viewtext}>
              <Text style={styles.text}>First Name : </Text>
              <TextInput
                style={styles.textInput}
                value={firstName}
                onChangeText={text => setFirstName(text)}
              />
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Last Name : </Text>
              <TextInput
                style={styles.textInput}
                value={lastName}
                onChangeText={text => setLastName(text)}
              />
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Change Contact : </Text>
              <TextInput
                style={styles.textInput}
                value={contacts}
                onChangeText={text => setContacts(text)}
              />
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Change Email : </Text>
              <TextInput
                style={styles.textInput}
                value={emails}
                onChangeText={text => setEmails(text)}
              />
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Theme : </Text>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isDarkMode}
                style={{marginLeft: 10}}
              />
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Share With Friends & Fam : </Text>
              {/* <TextInput
                style={styles.textInput}
                value={theme}
                onChangeText={text => setFirstName(ture)}
              /> */}
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtext}>
              <Text style={styles.text}>Rate Us : </Text>
              {/* <TextInput
                style={styles.textInput}
                value={theme}
                onChangeText={text => setFirstName(ture)}
              /> */}
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
            <View style={styles.viewtextlogout}>
              <Text style={styles.logout}>Logout</Text>
              {/* <TextInput
                style={styles.textInput}
                value={theme}
                onChangeText={text => setFirstName(ture)}
              /> */}
            </View>
            <Image resizeMode="contain" source={Line} style={styles.image1} />
          </View>
        </View>
      </View>
    </>
  );
}

export default EditSection;
