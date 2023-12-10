/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Meprofile from './components/internal/meprofile/meprofile';
import Demo from './components/demo';
import Contact from './components/cont';
import ContactList from './components/demo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native"
import Stacknavigator from './components/navigation/Stacknavigator';
import Mesectioncontact from './components/internal/meprofile/mesectioncontact';
import MeContacts from './components/internal/meprofile/mesectioncontact';
import EmergencyContacts from './components/internal/meprofile/emergencycontacts';
import Verifyphone from './components/verification/verifyphone/verifyphone';
import Mesection from './components/internal/meprofile/mesection';
import Welcome from './components/useraccess/Welcome';
import Signup from './components/useraccess/signup';
import Verifyemail from './components/verification/verifyemail/verifyemail';
import Crosssignnumber from './components/verification/crosssignnumber';
import Successful from './components/verification/sucessfull';
import Changepwsuccess from './components/verification/changepwsuccess';
import SignIn from './components/useraccess/signin';
import Forgetpassword from './components/useraccess/signin/forgetpassword';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
    {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <Stack.Screen   options={{ headerShown: false }} name='MeContactsList' component={MeContacts}/>
      <Stack.Screen  options={{ headerShown: false }}  name='MeContacts' component={Mesectioncontact}/>
      <Stack.Screen  options={{ headerShown: false }}  name='Meprofile' component={Meprofile}/>
      <Stack.Screen  options={{ headerShown: false }}  name='EmergencyContacts' component={EmergencyContacts}/>
      <Stack.Screen  options={{ headerShown: false }}  name='Verifyphone' component={Verifyphone}/>

      <Stack.Screen  options={{ headerShown: false }}  name='Welcome' component={Welcome}/>
      <Stack.Screen  options={{ headerShown: false }} name="Signup" component={Signup} />
    {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
    {/* <Stack.Screen name="Forgetpassword" component={Forgetpassword} /> */}

    <Stack.Screen  options={{ headerShown: false }} name="VerifyEmail" component={Verifyemail} />


    {/* <Stack.Screen  options={{ headerShown: false }}  name="Crosssignnumber" component={Crosssignnumber} />
    <Stack.Screen  options={{ headerShown: false }} name="Successful" component={Successful} />
    <Stack.Screen name="Changepwsuccess" component={Changepwsuccess} /> */}
  


    {/* </SafeAreaView> */}
    </Stack.Navigator>
        </NavigationContainer>
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
