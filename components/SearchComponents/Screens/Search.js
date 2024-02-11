import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRecentSearch} from '../RecentSearchContext';
import {useTheme} from '../../ThemeContext';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import RightArrowDark from '../../../assets/searchSection/RightArrowIconDark.png';
import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import LeftArrowDark from '../../../assets/searchSection/LeftArrowIconDark.png';
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import searchIconDark from '../../../assets/searchSection/searchIconDark.png';
import Line from '../../../assets/searchSection/TextLine.png';
import Cross from '../../../assets/searchSection/cross.png';
import CrossDark from '../../../assets/searchSection/crossDark.png';

const Search = () => {
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();
  const {handleItemClicked, issueDataList, clinicsNameList, doctorList} =
    useRecentSearch();
  const [isTyping, setIsTyping] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [filteredClinics, setFilteredClinics] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isBookPressed, setBookPressed] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const [clinicIndex, setClinicIndex] = useState(0);
  const [doctorIndex, setDoctorIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const filteredTopIssues = issueDataList.filter(issue =>
      issue.issue.toLowerCase().includes(searchText.toLowerCase()),
    );

    const filteredTopClinics = clinicsNameList.filter(clinic =>
      clinic.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    const filteredTopDoctors = doctorList.filter(doctor =>
      doctor.firstName.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredIssues([...filteredTopIssues]);
    setFilteredClinics([...filteredTopClinics]);
    setFilteredDoctors([...filteredTopDoctors]);
  }, [searchText]);

  function handleArrowClick() {
    if (userClicked === true) {
      navigation.navigate('RecentSearch');
    } else {
      navigation.navigate('SearchHome');
    }
  }

  function handleClinicArrowClick() {
    setClinicIndex(prevIndex => prevIndex + itemsPerPage);
    if (isTyping) {
      navigation.navigate('Clinics', {filteredClinics});
    } else {
      navigation.navigate('Clinics', {clinicsNameList});
    }
  }

  function handleDoctorArrowClick() {
    setDoctorIndex(prevIndex => prevIndex + itemsPerPage);
    if (isTyping) {
      navigation.navigate('Doctors', {filteredDoctors});
    } else {
      navigation.navigate('Doctors', {doctorList});
    }
  }
  function handleClickedItem(item) {
    handleItemClicked(item);
    setUserClicked(true);
  }

  const handleCrossPress = () => {
    setSearchText('');
    setIsTyping(false);
  };

  function boldMatchedText(text, searchText) {
    const index = text.toLowerCase().indexOf(searchText.toLowerCase());
    if (index !== -1) {
      const preMatched = text.substring(0, index);
      const matched = text.substring(index, index + searchText.length);
      const postMatched = text.substring(index + searchText.length);
      return (
        <>
          {preMatched}
          <Text style={{fontWeight: '900'}}>{matched}</Text>
          {postMatched}
        </>
      );
    }
    return <>{text}</>;
  }

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: isDarkMode ? '#000' : '#FFF',
      flexDirection: 'column',
    },
    headerWrapper: {},
    header: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(86),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: isDarkMode
        ? 'rgba(183, 183, 183, 0.26)'
        : 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    CrossWrapper: {
      position: 'absolute',
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(86),
      marginTop: hp(4.8),
    },
    ArrowImage: {
      marginLeft: wp(1),
      marginRight: wp(1.5),
      marginTop: hp(4.3),
    },
    searchIcon: {
      width: wp(5),
      height: hp(2.46),
      marginRight: wp(0.6),
      marginTop: hp(1.6),
    },
    input: {
      flex: 1,
      fontSize: 15,
      color: isDarkMode ? '#fff' : '#000',
    },
    ScrollAreaStyle: {
      height: hp(100),
    },
    ScrollAreaContainer: {
      width: wp(100),
      alignSelf: 'center',
    },
    TopCities: {
      height: hp(5),
      backgroundColor: isDarkMode
        ? 'rgba(183, 183, 183, 0.30)'
        : 'rgba(242, 242, 242, 0.9)',
      marginTop: 26,
      flexDirection: 'row',
    },
    TopCitiesText: {
      width: wp(30),
      marginLeft: wp(5.6),
      marginTop: hp(1),
      color: isDarkMode ? '#fff' : '#222',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 25,
    },
    ImageWrapper: {
      marginLeft: wp(54.5),
      position: 'absolute',
    },
    RightArrowImage: {
      position: 'absolute',
      marginLeft: wp(55),
      marginTop: wp(2),
    },
    TopCityCard: {
      marginLeft: wp(5.6),
    },
    TopCityText: {
      color: isDarkMode ? '#fff' : '#222',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 21,
      marginTop: hp(2.2),
      marginBottom: 4,
    },
    TopCityLine: {
      width: wp(89.5),
    },
    DoctorCard: {
      flexDirection: 'row',
      marginLeft: wp(5),
    },
    ClinicCard: {
      flexDirection: 'row',
      marginLeft: wp(5),
    },
    ClinicImage: {
      marginTop: hp(2.4),
      marginRight: 6,
      borderRadius: 10,
    },
    DoctorTextView: {
      flexDirection: 'column',
      position: 'absolute',
      width: wp(80),
      marginLeft: wp(15),
      marginTop: 25,
      textAlignVertical: 'center',
    },
    ClinicTextView: {
      flexDirection: 'column',
      marginTop: 22,
    },
    ClinicName: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 22,
    },
    ClinicSpecialist: {
      color: isDarkMode ? '#fff' : '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 20,
      marginTop: 4,
    },
    ButtonView: {
      marginLeft: wp(70),
      marginTop: wp(12),
      flexDirection: 'row',
      position: 'absolute',
    },
    DoctorButton: {
      borderRadius: 31,
      borderWidth: 1,
      borderColor: '#1A936F',
      height: hp(3),
      width: wp(19),
    },
    DoctorButtonHovered: {
      backgroundColor: '#147e5a',
    },
    buttonText: {
      color: '#1A936F',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 16,
      textAlign: 'center',
      marginTop: 3,
    },
  });

  return (
    <SafeAreaView style={{height: hp(100)}}>
      <View style={styles.Container}>
        <View style={styles.headerWrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleArrowClick}>
              {isDarkMode ? (
                <Image style={styles.ArrowImage} source={LeftArrowDark} />
              ) : (
                <Image style={styles.ArrowImage} source={LeftArrow} />
              )}
            </TouchableOpacity>
            <View style={styles.searchBarContainer}>
              {isDarkMode ? (
                <Image source={searchIconDark} style={styles.searchIcon} />
              ) : (
                <Image source={searchIcon} style={styles.searchIcon} />
              )}
              <TextInput
                placeholder="Search my city, locality"
                placeholderTextColor={isDarkMode ? '#fff' : '#4A4A4A'}
                clearButtonMode="always"
                style={styles.input}
                value={searchText}
                onChangeText={text => {
                  setSearchText(text);
                  if (!isTyping) setIsTyping(true);
                }}
              />
            </View>
            {isTyping && (
              <TouchableHighlight
                style={styles.CrossWrapper}
                onPress={handleCrossPress}>
                {isDarkMode ? (
                  <Image style={styles.CrossImage} source={CrossDark} />
                ) : (
                  <Image style={styles.CrossImage} source={Cross} />
                )}
              </TouchableHighlight>
            )}
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ScrollAreaStyle}>
          {isTyping && searchText.length > 0 ? (
            <>
              {filteredIssues.map(issue => (
                <View style={styles.TopCityCard} key={issue.id}>
                  {issue.id ? (
                    <>
                      <TouchableOpacity>
                        <Text style={styles.TopCityText}>
                          {boldMatchedText(issue.issue, searchText)}
                        </Text>
                      </TouchableOpacity>
                      <Image source={Line} style={styles.TopCityLine} />
                    </>
                  ) : undefined}
                </View>
              ))}
              <View style={styles.ScrollAreaContainer}>
                <View style={styles.TopCities}>
                  <Text style={styles.TopCitiesText}>Cilincs</Text>
                  {filteredClinics.length > itemsPerPage && (
                    <TouchableOpacity onPress={handleClinicArrowClick}>
                      {isDarkMode ? (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrowDark}
                        />
                      ) : (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrow}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {filteredClinics
                .slice(clinicIndex, clinicIndex + itemsPerPage)
                .map(clinic => (
                  <View style={styles.DoctorCard} key={clinic.id}>
                    {clinic.id && (
                      <>
                        <TouchableOpacity
                          onPress={() => handleClickedItem(clinic)}>
                          <Image
                            style={styles.ClinicImage}
                            source={clinic.image}
                          />
                          <View style={styles.DoctorTextView}>
                            <Text style={styles.ClinicName}>
                              {boldMatchedText(clinic.name, searchText)}
                            </Text>
                            <Text style={styles.ClinicSpecialist}>
                              {clinic.field} | {clinic.location}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                ))}
              <View style={styles.ScrollAreaContainer}>
                <View style={styles.TopCities}>
                  <Text style={styles.TopCitiesText}>Doctors</Text>
                  {filteredDoctors.length > itemsPerPage && (
                    <TouchableOpacity onPress={handleDoctorArrowClick}>
                      {isDarkMode ? (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrowDark}
                        />
                      ) : (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrow}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {filteredDoctors
                .slice(doctorIndex, doctorIndex + itemsPerPage)
                .map(doctor => (
                  <View style={styles.DoctorCard} key={doctor.id}>
                    {doctor.id && (
                      <>
                        <TouchableOpacity
                          onPress={() => handleClickedItem(doctor)}>
                          <Image
                            style={styles.ClinicImage}
                            source={doctor.image}
                          />
                          <View style={styles.DoctorTextView}>
                            <Text style={styles.ClinicName}>
                              {boldMatchedText(doctor.firstName, searchText)}
                              {' '}
                              {boldMatchedText(doctor.lastName, searchText)}
                            </Text>
                            <Text style={styles.ClinicSpecialist}>
                              {doctor.field}
                            </Text>
                          </View>
                        </TouchableOpacity>
                        <View style={styles.ButtonView}>
                          <TouchableOpacity
                            onPress={() => setBookPressed(true)}
                            style={[
                              styles.DoctorButton,
                              isBookPressed && styles.DoctorButtonHovered,
                            ]}>
                            <Text style={styles.buttonText}>Book a call</Text>
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                  </View>
                ))}
            </>
          ) : (
            <>
              {issueDataList.map(issue => (
                <View style={styles.TopCityCard} key={issue.id}>
                  {issue.id < 10 ? (
                    <>
                      <TouchableOpacity>
                        <Text style={styles.TopCityText}>{issue.issue}</Text>
                      </TouchableOpacity>
                      <Image source={Line} style={styles.TopCityLine} />
                    </>
                  ) : undefined}
                </View>
              ))}
              <View style={styles.ScrollAreaContainer}>
                <View style={styles.TopCities}>
                  <Text style={styles.TopCitiesText}>Cilincs</Text>
                  {clinicsNameList.length > itemsPerPage && (
                    <TouchableOpacity onPress={handleClinicArrowClick}>
                      {isDarkMode ? (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrowDark}
                        />
                      ) : (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrow}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {clinicsNameList.map(clinic => (
                <View style={styles.DoctorCard} key={clinic.id}>
                  {clinic.id < 31 && (
                    <>
                      <TouchableOpacity
                        onPress={() => handleClickedItem(clinic)}>
                        <Image
                          style={styles.ClinicImage}
                          source={clinic.image}
                        />
                        <View style={styles.DoctorTextView}>
                          <Text style={styles.ClinicName}>{clinic.name}</Text>
                          <Text style={styles.ClinicSpecialist}>
                            {clinic.field} | {clinic.location}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              ))}
              <View style={styles.ScrollAreaContainer}>
                <View style={styles.TopCities}>
                  <Text style={styles.TopCitiesText}>Doctors</Text>
                  {doctorList.length > itemsPerPage && (
                    <TouchableOpacity onPress={handleDoctorArrowClick}>
                      {isDarkMode ? (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrowDark}
                        />
                      ) : (
                        <Image
                          style={styles.RightArrowImage}
                          source={RightArrow}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              {doctorList.map(doctor => (
                <View style={styles.DoctorCard} key={doctor.id}>
                  {doctor.id < 57 && (
                    <>
                      <TouchableOpacity
                        onPress={() => handleClickedItem(doctor)}>
                        <Image
                          style={styles.ClinicImage}
                          source={doctor.image}
                        />
                        <View style={styles.DoctorTextView}>
                          <Text style={styles.ClinicName}>
                            {doctor.firstName} {doctor.lastName}
                          </Text>
                          <Text style={styles.ClinicSpecialist}>
                            {doctor.field}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      <View style={styles.ButtonView}>
                        <TouchableOpacity
                          style={[
                            styles.DoctorButton,
                            isBookPressed && styles.DoctorButtonHovered,
                          ]}>
                          <Text style={styles.buttonText}>Book a call</Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  )}
                </View> 
              ))}
            </>
          )}
          <View style={{padding: 60}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
