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
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useRecentSearch} from '../RecentSearchContext';

import RightArrow from '../../../assets/searchSection/RightArrowIcon.png';
import LeftArrow from '../../../assets/searchSection/LeftArrowIcon.png';
import searchIcon from '../../../assets/searchSection/searchIcon.png';
import Line from '../../../assets/searchSection/TextLine.png';
import Cross from '../../../assets/searchSection/cross.png';

const Search = () => {
  const navigation = useNavigation();
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
    //

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

  const styles = StyleSheet.create({
    Container: {
      backgroundColor: '#FFF',
      flexDirection: 'column',
    },
    headerWrapper: {},
    header: {
      flexDirection: 'row',
    },
    searchBarContainer: {
      width: wp(77.3),
      flexDirection: 'row',
      borderRadius: 22,
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
      paddingHorizontal: wp(4),
      marginTop: hp(3),
    },
    CrossWrapper: {
      position: 'absolute',
    },
    CrossImage: {
      position: 'absolute',
      marginLeft: wp(92),
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
      color: '#000',
      paddingHorizontal: 20,
    },
    LocationViewWrapper: {
      marginLeft: wp(13.3),
      marginTop: hp(1.35),
      flexDirection: 'row',
      marginTop: 15,
    },
    locationSpot: {
      width: wp(4.26),
      height: hp(2),
    },
    TextLocation: {
      color: '#0B547C',
      fontFamily: 'SFProDisplay-Medium',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 20,
      marginLeft: 6,
      marginTop: -2.5,
      marginBottom: 15,
    },
    ScrollAreaContainer: {
      width: wp(100),
      alignSelf: 'center',
    },
    TopCities: {
      height: hp(5),
      backgroundColor: 'rgba(242, 242, 242, 0.9)',
      marginTop: wp(2),
      flexDirection: 'row',
    },
    TopCitiesText: {
      width: wp(30),
      marginLeft: wp(5.6),
      marginTop: hp(1),
      color: '#222',
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
      color: '#222',
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
    },
    DoctorTextView: {
      flexDirection: 'column',
      position: 'absolute',
      width: wp(80),
      marginLeft: wp(15),
      marginTop: 25,
    },
    ClinicTextView: {
      flexDirection: 'column',
      marginTop: 25,
    },
    ClinicName: {
      color: '#000',
      fontFamily: 'SFProDisplay-Semibold',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: 22,
    },
    ClinicSpecialist: {
      color: '#000',
      fontFamily: 'SFProDisplay-Regular',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 20,
    },
    ButtonView: {
      marginLeft: wp(70),
      marginTop: wp(11),
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
    <View style={styles.Container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleArrowClick}>
            <Image style={styles.ArrowImage} source={LeftArrow} />
          </TouchableOpacity>
          <View style={styles.searchBarContainer}>
            <Image source={searchIcon} style={styles.searchIcon} />
            <TextInput
              placeholder="Search my city, locality"
              placeholderTextColor="#A5A5A5"
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
              <Image style={styles.CrossImage} source={Cross} />
            </TouchableHighlight>
          )}
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isTyping && searchText.length > 0 ? (
          <>
            {filteredIssues.map(issue => (
              <View style={styles.TopCityCard} key={issue.id}>
                {issue.id ? (
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
                {filteredClinics.length > itemsPerPage && (
                  <TouchableOpacity onPress={handleClinicArrowClick}>
                    <Image style={styles.RightArrowImage} source={RightArrow} />
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
                {filteredDoctors.length > itemsPerPage && (
                  <TouchableOpacity onPress={handleDoctorArrowClick}>
                    <Image style={styles.RightArrowImage} source={RightArrow} />
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
                            {doctor.firstName} {doctor.lastName}
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
                    <Image style={styles.RightArrowImage} source={RightArrow} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {clinicsNameList.map(clinic => (
              <View style={styles.DoctorCard} key={clinic.id}>
                {clinic.id < 31 && (
                  <>
                    <TouchableOpacity onPress={() => handleClickedItem(clinic)}>
                      <Image style={styles.ClinicImage} source={clinic.image} />
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
                    <Image style={styles.RightArrowImage} source={RightArrow} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {doctorList.map(doctor => (
              <View style={styles.DoctorCard} key={doctor.id}>
                {doctor.id < 57 && (
                  <>
                    <TouchableOpacity onPress={() => handleClickedItem(doctor)}>
                      <Image style={styles.ClinicImage} source={doctor.image} />
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
  );
};

export default Search;
