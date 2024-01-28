/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import store from './components/redux/store';
import {Provider} from 'react-redux';

import Meprofile from './components/internal/meprofile/meprofile';
import ContactList from './components/demo';
import {AppCommonDataProvider} from './components/UseAppCommonDataProvider';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Mesectioncontact from './components/internal/meprofile/mesectioncontact';
import MeContacts from './components/internal/meprofile/mesectioncontact';
import EmergencyContacts from './components/internal/meprofile/emergencycontacts';
import Verifyphone from './components/verification/verifyphone/verifyphone';
import Welcome from './components/useraccess/Welcome';
import Signup from './components/useraccess/signup';
import EditSection from './components/internal/meprofile/EditSection';
import Verifyemail from './components/verification/verifyemail/verifyemail';
import MainContainer from './components/navigation/mainController';
import {ThemeProvider} from './components/ThemeContext';
import {LocationProvider} from './components/SearchComponents/LocationContext';
import {RecentSearchProvider} from './components/SearchComponents/RecentSearchContext';
import SearchHome from './components/SearchComponents/SearchHome';
import MyDoctorScreen from './components/SearchComponents/Screens/MyDoctorScreen';
import Issues from './components/SearchComponents/Screens/Issues';
import Specailist from './components/SearchComponents/Screens/Specailist';
import Parent from './components/navigation/Parent';
import Location from './components/SearchComponents/Screens/Location';
import Header from './components/SearchComponents/Components/Header';
import Search from './components/SearchComponents/Screens/Search';
import RecentSearch from './components/SearchComponents/Screens/RecentSearch';
import Doctors from './components/SearchComponents/Screens/Doctors';
import Clinics from './components/SearchComponents/Screens/Clinics';
import Crosssignnumber from './components/verification/crosssignnumber';
import Successful from './components/verification/sucessfull';
import Changepwsuccess from './components/verification/changepwsuccess';
import SignIn from './components/useraccess/signin';
import Forgetpassword from './components/useraccess/signin/forgetpassword';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode2 = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode2 ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode2 ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode2 = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode2 ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <AppCommonDataProvider>
        <ThemeProvider>
          <RecentSearchProvider>
            <LocationProvider>
              <NavigationContainer>
                {/* <Stack.Navigator initialRouteName="Welcome"> */}
                <Stack.Navigator initialRouteName="Welcome">
                  {/* <Stack.Navigator initialRouteName="EditSection"> */}
                  {/* <SafeAreaView style={backgroundStyle}> */}
                  {/* <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
                /> */}
                  {/* <Stack.Screen
                options={{headerShown: false}}
                name="MeContactsList"
                component={MeContacts}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="EditSection"
                component={EditSection}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="MeContacts"
                component={Mesectioncontact}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Meprofile"
                component={Meprofile}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="EmergencyContacts"
                component={EmergencyContacts}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="Verifyphone"
                component={Verifyphone}
              /> */}
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="SearchHome"
                    component={SearchHome}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="MyDoctorScreen"
                    component={MyDoctorScreen}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Issues"
                    component={Issues}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Specailist"
                    component={Specailist}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Location"
                    component={Location}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Header"
                    component={Header}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Search"
                    component={Search}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="RecentSearch"
                    component={RecentSearch}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Doctors"
                    component={Doctors}
                  />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Clinics"
                    component={Clinics}
                  />
                  {/* <Stack.Screen
                options={{headerShown: false}}
                name="Parent"
                component={Parent}
              /> */}
              <Stack.Screen
                options={{headerShown: false}}
                name="Welcome"
                component={Welcome}
              />
                  <Stack.Screen
                    options={{headerShown: false}}
                    name="Signup"
                    component={Signup}
                  />
                  <Stack.Screen name="SignIn" component={SignIn} />
                  <Stack.Screen name="Forgetpassword" component={Forgetpassword} />

                  <Stack.Screen
                    options={{headerShown: false}}
                    name="VerifyEmail"
                    component={Verifyemail}
                  />

                  {/* <Stack.Screen  options={{ headerShown: false }}  name="Crosssignnumber" component={Crosssignnumber} />
              <Stack.Screen  options={{ headerShown: false }} name="Successful" component={Successful} />
              <Stack.Screen name="Changepwsuccess" component={Changepwsuccess} /> */}

                  {/* </SafeAreaView> */}
                </Stack.Navigator>
              </NavigationContainer>
            </LocationProvider>
          </RecentSearchProvider>
        </ThemeProvider>
      </AppCommonDataProvider>
    </Provider>
    // <MainContainer />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
