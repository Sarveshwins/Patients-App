import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ParticipantForm from './participant';
import ISection from './isectionlist.js/isectionlist';
import Mesection from './mesection';
import HaveSection from './HaveSection';
import ImagePicker from 'react-native-image-crop-picker';
import {useTheme} from '../../ThemeContext';
import {useAppCommonDataProvider} from '../../UseAppCommonDataProvider';
import {appColors} from '../../../utils/Appcolors';

const Meprofile = ({navigation}) => {
  const {colorScheme} = useAppCommonDataProvider();

  const [participants, setParticipants] = useState([]);
  const [showParticipantForm, setShowParticipantForm] = useState(false);
  const [selectedTab, setSelectedTab] = useState('Me');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [question, setQuestion] = useState('');
  const [selectedDefaultAnswer, setSelectedDefaultAnswer] = useState(null);
  const [profile, setProfile] = useState(null);
  const [answer, setAnswer] = useState('');
  const [showHaveSection, setShowHaveSection] = useState(false);

  // mesection
  const [selectedTabme, setSelectedTabme] = useState(null);
  const [ismeModalVisible, setmeIsModalVisible] = useState(false);
  const [isHaveModalVisible, setIsHaveModalVisible] = useState(false);
  const [selectedItemme, setSelectedItemme] = useState(null);
  const [selectedItemHave, setSelectedItemHave] = useState(null);
  const [questionme, setQuestionme] = useState('');
  const [questionHave, setQuestionHave] = useState('');
  const [selectedDefaultAnswerme, setSelectedDefaultAnswerme] = useState(null);
  const [selectedDefaultAnswerHave, setSelectedDefaultAnswerHave] =
    useState(null);
  const [answerme, setAnswerme] = useState('');
  const [answerHave, setAnswerHave] = useState('');

  const [iListData, setIListData] = useState([
    {key: '1', text: 'Brush :', answer: null},
    {key: '2', text: 'Skin type :', answer: null},
    {key: '3', text: 'Hair type :', answer: null},
    {key: '4', text: 'Drinking :', answer: null},
    {key: '5', text: 'Smoking :', answer: null},
    {key: '6', text: 'Tabacco :', answer: null},
    {key: '7', text: 'Life style :', answer: null},
    {key: '8', text: 'Food preference :', answer: null},
  ]);
  const [questionMap, setQuestionMap] = useState({
    1: 'How often do you brush your teeth?',
    2: 'What is your skin type?',
    3: 'Describe your hair type:',
    4: 'How often do you drink water?',
    5: 'Do you smoke?',
    6: 'Do you use tobacco products?',
    7: 'Describe your lifestyle:',
    8: 'What are your food preferences?',
  });
  const [defaultAnswers, setDefaultAnswers] = useState({
    1: ['Twice a day', 'Once a day', 'Every other day'],
    2: ['Oily', 'Dry', 'Normal'],
    3: ['Straight', 'Wavy', 'Curly'],
    4: ['Rarely', 'Regularly', 'Daily'],
    5: ['Yes', 'No'],
    6: ['Yes', 'No'],
    7: ['Active', 'Sedentary', 'Moderate'],
    8: ['Vegetarian', 'Vegan', 'Non-vegetarian'],
  });

  // mesection
  const [meListData, setmeListData] = useState([
    {key: '5', text: 'Contact : ', answerme: null},
    {key: '6', text: 'Emergency Contact :', answerme: null},
    {key: '7', text: 'Email :', answerme: null},
    {key: '8', text: 'Gender : ', answerme: null},
    {key: '9', text: 'D.O.B :', answerme: null},
    {key: '10', text: 'Height :', answerme: null},
    {key: '11', text: 'Weight :', answerme: null},
    {key: '12', text: 'Status :', answerme: null},
    {key: '13', text: 'Occupation :', answerme: null},
    {key: '14', text: 'State :', answerme: null},
    {key: '15', text: 'City : ', answerme: null},
    {key: '16', text: 'Locality :', answerme: null},
  ]);
  const [haveListData, setHaveListData] = useState([
    {key: '15', text: 'Pain :', answerme: null},
    {key: '16', text: 'Allergies :', answerme: null},
    {key: '17', text: 'Injuries :', answerme: null},
    {key: '18', text: 'Surguries :', answerme: null},
    {key: '19', text: 'Chronic Diseases :', answerme: null},
    {key: '20', text: 'Heridatory Diseases :', answerme: null},
  ]);
  const [questionMapme, setQuestionMapme] = useState({});

  const [defaultAnswersme, setDefaultAnswersme] = useState({
    7: ['Straight', 'Wavy', 'Curly'],
    8: ['Rarely', 'Regularly', 'Daily'],
    9: ['Male', 'Female'],
    10: [
      'Maharashtra',
      'Andhra Pradesh',
      'Arunachal Pradesh',
      'Assam',
      'Bihar',
      'Chhattisgarh',
      'Goa',
      'Gujarat',
      'Haryana',
      'Himachal Pradesh',
      'Jharkhand',
      'Karnataka',
      'Kerala',
      'Madhya Pradesh',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Odisha',
      'Punjab',
      'Rajasthan',
      'Sikkim',
      'Tamil Nadu',
      'Telangana',
      'Tripura',
      'Uttar Pradesh',
      'Uttarakhand',
      'West Bengal',
      'Jammu and Kashmir',
      'Ladakh',
    ],
  });

  const [questionMapHave, setQuestionMapHave] = useState({});

  const [defaultAnswerHave, setDefaultAnswerHave] = useState({
    16: ['Anaphylaxis', 'Hemolytic Anemia', 'Anti-Thymocyte globulin'],
    19: ['Asthama', 'Cystic Fibrosis'],
    20: ['Penicillin', 'Serum B'],
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const addParticipant = () => {
    if (participants.length < 5) {
      setShowParticipantForm(true);
    }
  };

  const handleSaveParticipant = participantInfo => {
    if (participants.length < 5) {
      setParticipants(prevParticipants => [
        ...prevParticipants,
        {
          ...participantInfo,
          selectedImage: participantInfo.additionalInfo.image,
        },
      ]);
      setShowParticipantForm(false);
    }
  };

  const handleCloseParticipantForm = () => {
    setShowParticipantForm(false);
  };

  const calculateButtonLeft = () => {
    return 30 + Math.min(participants.length, 5) * 89;
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleTabClick = (tab, item) => {
    setSelectedTab(tab);
    setSelectedItem(item);

    const allowedKeys = iListData.map(item => item.key);
    if (tab === 'I' && item && allowedKeys.includes(item.key)) {
      toggleModal();
      setQuestion(questionMap[item.key]);

      const selectedAnswer = item.answer || '';
      setAnswer(selectedAnswer);

      setSelectedDefaultAnswer(selectedAnswer);
    }
  };

  const handleAnswerSubmit = () => {
    setIListData(prevList =>
      prevList.map(item =>
        item.key === selectedItem?.key ? {...item, answer} : item,
      ),
    );
    toggleModal();
  };

  // mesection
  const toggleModalme = () => {
    setmeIsModalVisible(!ismeModalVisible);
  };

  const handleTabClickme = (tab, item) => {
    setSelectedTab('Me');
    setSelectedItemme(item);

    const allowedKeys = meListData.map(item => item.key);
    if (tab === 'Me' && item && allowedKeys.includes(item.key)) {
      toggleModalme();
      setQuestionme(questionMapme[item.key]);
      const selectedAnswerme = item.answerme || '';
      setAnswerme(selectedAnswerme);

      setSelectedDefaultAnswerme(selectedAnswerme);
      if (item.key === '5') {
        navigation.navigate('MeContacts');
      }
      if (item.key === '6') {
        navigation.navigate('EmergencyContacts');
      }
    }
  };

  const handleAnswerSubmitme = () => {
    setmeListData(prevList =>
      prevList.map(item =>
        item.key === selectedItemme?.key ? {...item, answerme} : item,
      ),
    );
    toggleModalme();
  };

  //have section
  const toggleModalHave = () => {
    setIsHaveModalVisible(!isHaveModalVisible);
  };

  const handleTabClickHave = (tab, item) => {
    setSelectedTab('Have');
    setSelectedItemHave(item);

    const allowedKeysHave = haveListData.map(item => item.key);
    if (tab === 'Have' && item && allowedKeysHave.includes(item.key)) {
      toggleModalHave();
      setQuestionHave(questionMapHave[item.key]);

      const selectedAnswerHave = item.answerHave || '';
      setAnswerHave(selectedAnswerHave);

      setSelectedDefaultAnswerHave(selectedAnswerHave);
      if (item.key === '5') {
        navigation.navigate('MeContacts');
      }
      if (item.key === '6') {
        navigation.navigate('EmergencyContacts');
      }
    }
  };

  const handleAnswerSubmitHave = () => {
    setHaveListData(prevList =>
      prevList.map(item =>
        item.key === selectedItemHave?.key ? {...item, answerHave} : item,
      ),
    );
    toggleModalHave();
  };

  function handleLongPress() {
    navigation.navigate('EditSection');
  }

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
  const handleImageSelect = image => {
    setSelectedImage(image);
  };

  const {isDarkMode} = useTheme();

  const styles = StyleSheet.create({
    scrollContent: {
      //minHeight: hp('70%'),
    },
    container: {
      backgroundColor: isDarkMode ? 'black' : '#FFF',
    },
    header: {
      height: 140,
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
    },
    Addsection: {
      height: 102,
      width: '100%',
    },
    section2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    Mehavei: {
      backgroundColor:
        colorScheme === 'light' ? appColors?.white : appColors?.black,
    },
    footer: {
      height: hp('7%'),
      backgroundColor:
        colorScheme === 'light' ? appColors?.black : appColors?.white,
    },

    // header section
    imageprofile: {
      marginLeft: 15,
      borderRadius: 51,
      height: 120,
      width: 120,
      borderWidth: 10,
      borderColor: isDarkMode ? '#9E9E9E' : 'grey',
      backgroundColor: '#C4C4C4',
      overflow: 'hidden',
      shadowColor: '#CC9B66',
      shadowOffset: {width: 0, height: 2},
      shadowRadius: 25,
      shadowOpacity: 0.9,
      borderRadius: 51,
    },

    m: {
      color: '#4a90e2',
      fontSize: 18,
      fontWeight: '600',
    },
    y: {
      color: '#d0021b',
      fontSize: 18,
      fontWeight: '600',
    },
    s: {
      color: '#7ed321',
      fontSize: 18,
      fontWeight: '600',
    },
    e: {
      color: '#f8e71c',
      fontSize: 18,
      fontWeight: '600',
    },
    l: {
      color: '#f5a623',
      fontSize: 18,
      fontWeight: '600',
    },
    f: {
      color: '#b888b8',
      fontSize: 18,
      fontWeight: '600',
    },
    myself: {
      left: 27,
      flexDirection: 'row',
    },
    namesection: {
      left: 27,
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
      fontSize: 17,
      color: isDarkMode ? '#fff' : '#291E17',
    },
    // Header section over

    // Add section
    iconLayout: {
      height: 80,
      width: 80,
      position: 'absolute',
    },
    text5: {
      // left: 300,
      fontSize: 23,
      fontWeight: '500',
      textAlign: 'center',
      //verticalAlign: 'middle',
      color: '#626262',
      position: 'absolute',
      top: 5,
      borderRadius: 35,
      borderColor: '#9E9E9E',
      borderWidth: 2,
      width: 70,
      height: 70,
    },
    plussignborder: {
      borderRadius: 40,
      borderColor: '#9E9E9E',
      borderWidth: 2,
      width: 60,
      height: 60,
    },

    addfirst: {
      right: 130,
      borderRadius: 51,
      borderWidth: 4,
      borderColor: 'white',

      backgroundColor: 'lightgray',
      // Box shadow
      shadowColor: '#454545',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.45,
      shadowRadius: 10,
    },
    addsecond: {
      left: 79,
      borderRadius: 51,
      borderWidth: 4,
      borderColor: '#FFF',
      marginRight: 10,
    },
    addthird: {
      left: -10,
      borderRadius: 51,
      borderWidth: 4,
      borderColor: '#FFF',
      marginRight: 10,
    },
    partner: {
      left: 21,
      textAlign: 'center',
      alignItems: 'center',
    },
    sister: {
      left: 99,
    },
    mother: {
      left: 189,
    },
    // smp04Parent: {
    //   width: 210,
    //   height: 86,
    // },
    sisterTypo: {
      fontSize: 13,
      top: 83,
      color: '#291E17',
      position: 'absolute',
      textAlign: 'center',
    },
    // section2 start

    mesection: {
      left: 51,
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
      paddingBottom: 0,
    },
    havesection: {
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
      color: '#291E17',
    },
    isection: {
      right: 71,
      alignItems: 'center',
      borderColor: 'transparent',
      borderBottomColor: '#CC9B66',
    },
    metext: {
      fontSize: 21,
      alignContent: 'center',
      alignSelf: 'center',
      fontWeight: '400',
    },
    havetext: {
      fontSize: 21,
      color: '#291E17',
      alignContent: 'center',
      alignSelf: 'center',
      fontWeight: '300',
    },
    itext: {
      fontSize: 21,
      alignItems: 'center',
      fontWeight: '400',
      color: '#291E17',
    },
    boldText: {
      fontWeight: '600',
    },
    borderBottom: {
      width: 21,
    },
    selectedTab: {
      borderColor: '#CC9B66',
      borderBottomWidth: 5,
      height: 30,
      fontWeight: '600',
    },
    borderBottomHave: {
      width: 55,
    },
    borderBottomMe: {
      width: 38,
      alignContent: 'center',
      alignSelf: 'center',
    },

    sectiontexts: {
      fontSize: 17,
      left: 20,
      color: '#291E17',
      fontWeight: '700',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      height: hp('70%'),
      backgroundColor: '#FFF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 10,
      left: 30,
    },
    modalInput: {
      borderWidth: 1,
      borderColor: '#CCC',
      borderRadius: 8,
      padding: 8,
      marginBottom: 10,
    },
    modalButton: {
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      position: 'absolute',
      alignSelf: 'flex-end',
      right: 30,
    },
    modalButtonText: {
      color: '#2D8AE0',
      fontSize: 17,
      fontWeight: '500',
    },
    Sliderfirsttext: {
      color: '#CC9B66',
      fontSize: 28,
      fontWeight: '600',
      left: 30,
      top: 71,
    },
    listItemslider: {
      left: 30,
      marginTop: 29,
      borderBottomWidth: 0.6,
      borderBottomColor: '#CC9B66',
      height: 30,
      width: 340,
      fontWeight: '500',
      color: '#291E17',
      top: 100,
    },
    sectiontextsslider: {
      fontSize: 17,
      left: 14,
      fontWeight: '500',
      color: '#291E17',
      bottom: 5,
      paddingRight: 100,
    },

    checkmark: {
      position: 'absolute',
      right: 200,
      top: '50%',
      color: '#000000',
    },
    // powered by doc
    bottomparent: {
      height: '61.63%',
      width: '76.53%',
      top: '0%',
      right: '11.73%',
      bottom: '38.37%',
      left: '11.73%',
      position: 'absolute',
    },
    poweredbyicon: {
      height: 36,
      width: 33,
      bottom: '0%',
      left: '0%',
      borderRadius: 5,
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      overflow: 'hidden',
    },
    poweredByParent: {
      bottom: 1,
      left: 43,
      width: 69,
      height: 33,
      position: 'absolute',
    },
    poweredBy: {
      bottom: 19,
      fontSize: 12,
      lineHeight: 13,
      color: 'rgba(60, 60, 67, 0.60)',
      fontWeight: '500',
      textAlign: 'left',
      fontFamily: '500',
      left: 0,
      position: 'absolute',
    },
    withDocs: {
      bottom: 0,
      fontSize: 13,
      letterSpacing: 0,
      lineHeight: 15,
      color: '#000',
      fontWeight: '600',
      textAlign: 'left',
      fontFamily: '500',
      left: 0,
      position: 'absolute',
    },
    groupItem: {
      borderColor: '#c5c5c5',
      borderTopWidth: 1,
      width: 288,
      top: 425,
      borderStyle: 'solid',
    },
    groupItemPosition: {
      height: 1,
      left: 0,
      position: 'absolute',
    },
    scrollContainer: {
      flex: 1,
      height: '100%',
      backgroundColor: '#FFF',
    },
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:
          colorScheme === 'light' ? appColors?.white : appColors?.black,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor:
            colorScheme === 'light' ? appColors?.white : appColors?.black,
        }}>
        {showParticipantForm ? (
          <ParticipantForm
            onClose={handleCloseParticipantForm}
            onSave={handleSaveParticipant}
            defaultRelationships={[
              'Brother',
              'Sister',
              'Mother',
              'Father',
              'Friend',
              'Spouse',
              'Grandfather',
              'Grandmother',
              'Son',
              'Daughter',
              'Child',
            ]}
          />
        ) : (
          <View
            style={[
              styles?.container,
              {
                backgroundColor:
                  colorScheme === 'light' ? appColors?.white : appColors?.black,
              },
            ]}>
            <View
              style={[
                styles?.header,
                {
                  backgroundColor:
                    colorScheme === 'light'
                      ? appColors?.white
                      : appColors?.black,
                },
              ]}>
              <TouchableHighlight
                underlayColor="transparent"
                onLongPress={handleLongPress}
                onPress={imagepick}>
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
              <View style={{flex: 1}}>
                <View style={styles.myself}>
                  <Text style={styles.m}>M</Text>
                  <Text style={styles.y}>y</Text>
                  <Text style={styles.s}>s</Text>
                  <Text style={styles.e}>e</Text>
                  <Text style={styles.l}>l</Text>
                  <Text style={styles.f}>f</Text>
                </View>
                <View style={styles.namesection}>
                  <Text
                    style={[
                      styles?.fullname,
                      {
                        color:
                          colorScheme === 'light'
                            ? appColors?.black
                            : appColors?.white,
                      },
                    ]}>
                    Sarvesh Awasthi
                  </Text>
                  <Text
                    style={[
                      styles?.gender,
                      {
                        color:
                          colorScheme === 'light'
                            ? appColors?.black
                            : appColors?.white,
                      },
                    ]}>
                    F/ 23 Single
                  </Text>
                  <Text
                    style={[
                      styles?.city,
                      {
                        color:
                          colorScheme === 'light'
                            ? appColors?.black
                            : appColors?.white,
                      },
                    ]}>
                    Pune
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView horizontal={true} style={styles.Addsection}>
              {participants.map((participant, index) => (
                <View
                  key={index}
                  style={{
                    left: 20 * index,
                    height: 60,
                    height: 60,
                  }}>
                  <TouchableHighlight underlayColor="transparent">
                    <Image
                      style={{
                        borderRadius: 51,
                        borderWidth: 4,
                        borderColor: 'white',
                        height: 80,
                        width: 80,
                        backgroundColor: 'lightgray',
                        shadowColor: '#454545',
                        shadowOffset: {width: 0, height: 4},
                        shadowOpacity: 0.45,
                        shadowRadius: 10,
                      }}
                      resizeMode="cover"
                      source={{uri: participant.selectedImage}}
                    />
                  </TouchableHighlight>
                  <Text style={[styles.partner, styles.sisterTypo]}>
                    {participant.relationship.length > 7
                      ? `${participant.relationship.slice(
                          0,
                          7,
                        )}\n${participant.relationship.slice(7)}`
                      : participant.relationship}
                  </Text>
                </View>
              ))}
              {participants.length < 5 && (
                <TouchableHighlight
                  onPress={addParticipant}
                  underlayColor="transparent">
                  <>
                    <View
                      style={{
                        alignItems: 'center',
                        width: 100,
                      }}>
                      <Text
                        style={{
                          marginTop: 45,
                          fontSize: 23,
                          fontWeight: '500',
                        }}>
                        +
                      </Text>
                    </View>
                  </>
                </TouchableHighlight>
              )}
            </ScrollView>
            <ScrollView
              contentContainerStyle={{paddingBottom: 380}}
              style={{width: '100%', height: '100%'}}>
              <View style={styles.Mehavei}>
                <View style={styles.section2}>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={[
                      styles.mesection,
                      selectedTab === 'Me' ? styles.selectedTab : null,
                    ]}
                    onPress={() => handleTabClickme('Me')}>
                    <View>
                      <Text
                        style={[
                          styles.metext,
                          selectedTabme === 'Me' ? styles.boldText : null,
                          {
                            color:
                              colorScheme === 'light'
                                ? appColors?.textColor
                                : appColors?.loaderColor,
                          },
                        ]}>
                        Me
                      </Text>
                      <View style={styles.borderBottom} />
                    </View>
                  </TouchableHighlight>

                  <TouchableHighlight
                    underlayColor="transparent"
                    style={[
                      styles.havesection,
                      selectedTab === 'Have' ? styles.selectedTab : null,
                    ]}
                    onPress={() => handleTabClickHave('Have')}>
                    <View style={styles.havesection}>
                      <Text
                        style={[
                          styles.havetext,
                          selectedTab === 'Have' ? styles.boldText : null,
                          {
                            color:
                              colorScheme === 'light'
                                ? appColors?.textColor
                                : appColors?.loaderColor,
                          },
                        ]}>
                        Have
                      </Text>
                      <View style={styles.borderBottomHave} />
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor="transparent"
                    style={[
                      styles.isection,
                      selectedTab === 'I' ? styles.selectedTab : null,
                    ]}
                    onPress={() => handleTabClick('I')}>
                    <View style={styles.itext}>
                      <Text
                        style={[
                          styles.itext,
                          selectedTab === 'I' ? styles.boldText : null,
                          {
                            color:
                              colorScheme === 'light'
                                ? appColors?.textColor
                                : appColors?.loaderColor,
                          },
                        ]}>
                        {' '}
                        i
                      </Text>
                      <View style={styles.borderBottom} />
                    </View>
                  </TouchableHighlight>
                </View>
                {selectedTab === 'Me' && (
                  <Mesection
                    ismeModalVisible={ismeModalVisible}
                    toggleModalme={toggleModalme}
                    handleTabClickme={handleTabClickme}
                    meListData={meListData}
                    questionMapme={questionMapme}
                    handleAnswerSubmitme={handleAnswerSubmitme}
                    defaultAnswersme={defaultAnswersme}
                    selectedItemme={selectedItemme}
                    answer={answer}
                    setAnswerme={setAnswerme}
                    selectedDefaultAnswerme={selectedDefaultAnswerme}
                    setSelectedDefaultAnswerme={setSelectedDefaultAnswerme}
                  />
                )}

                {selectedTab === 'Have' && (
                  <HaveSection
                    isHaveModalVisible={isHaveModalVisible}
                    toggleModalHave={toggleModalHave}
                    handleTabClickHave={handleTabClickHave}
                    haveListData={haveListData}
                    questionMapHave={questionMapHave}
                    handleAnswerSubmitHave={handleAnswerSubmitHave}
                    defaultAnswersHave={defaultAnswerHave}
                    selectedItemHave={selectedItemHave}
                    answerHave={answerHave}
                    setAnswerHave={setAnswerHave}
                    selectedDefaultAnswerHave={selectedDefaultAnswerHave}
                    setSelectedDefaultAnswerHave={setSelectedDefaultAnswerHave}
                  />
                )}
                {selectedTab === 'I' && (
                  <ISection
                    isModalVisible={isModalVisible}
                    toggleModal={toggleModal}
                    handleTabClick={handleTabClick}
                    iListData={iListData}
                    questionMap={questionMap}
                    handleAnswerSubmit={handleAnswerSubmit}
                    defaultAnswers={defaultAnswers}
                    selectedItem={selectedItem}
                    answer={answer}
                    setAnswer={setAnswer}
                    selectedDefaultAnswer={selectedDefaultAnswer}
                    setSelectedDefaultAnswer={setSelectedDefaultAnswer}
                  />
                )}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Meprofile;
