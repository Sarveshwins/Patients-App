import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditSection from '../../components/internal/meprofile/EditSection';
import Mesectioncontact from '../../components/internal/meprofile/mesectioncontact';
import Meprofile from '../../components/internal/meprofile/meprofile';
import EmergencyContacts from '../../components/internal/meprofile/emergencycontacts';
import Verifyphone from '../../components/verification/verifyphone/verifyphone';
import SearchHome from '../../components/SearchComponents/SearchHome';
import MyDoctorScreen from '../../components/SearchComponents/Screens/MyDoctorScreen';
import Issues from '../../components/SearchComponents/Screens/Issues';
import Specailist from '../../components/SearchComponents/Screens/Specailist';
import Location from '../../components/SearchComponents/Screens/Location';
import Header from '../../components/SearchComponents/Components/Header';
import Search from '../../components/SearchComponents/Screens/Search';
import RecentSearch from '../../components/SearchComponents/Screens/RecentSearch';
import Doctors from '../../components/SearchComponents/Screens/Doctors';
import Clinics from '../../components/SearchComponents/Screens/Clinics';
import Parent from '../../components/navigation/Parent';
import Welcome from '../../components/useraccess/Welcome';
import MainContainer from '../../components/navigation/mainController';
import Signup from '../../components/useraccess/signup';
import SignIn from '../../components/useraccess/signin';
import Forgetpassword from '../../components/useraccess/signin/forgetpassword';
import Verifyemail from '../../components/verification/verifyemail/verifyemail';
import Crosssignnumber from '../../components/verification/crosssignnumber';
import Successful from '../../components/verification/sucessfull';
import Changepwsuccess from '../../components/verification/changepwsuccess';
import PreviewScreen from '../../components/previewScreen/PreviewScreen';
import MeContacts from '../../components/internal/meprofile/mesectioncontact';

const Stack = createNativeStackNavigator();

const routes = [
  {
    name: 'MeContactsList',
    component: MeContacts,
  },
  {
    name: 'EditSection',
    component: EditSection,
  },
  {
    name: 'MeContacts',
    component: Mesectioncontact,
  },
  {
    name: 'Meprofile',
    component: Meprofile,
  },
  {
    name: 'EmergencyContacts',
    component: EmergencyContacts,
  },
  {
    name: 'Verifyphone',
    component: Verifyphone,
  },
  {
    name: 'SearchHome',
    component: SearchHome,
  },
  {
    name: 'MyDoctorScreen',
    component: MyDoctorScreen,
  },
  {
    name: 'Issues',
    component: Issues,
  },
  {
    name: 'Specailist',
    component: Specailist,
  },
  {
    name: 'Location',
    component: Location,
  },
  {
    name: 'Header',
    component: Header,
  },
  {
    name: 'Search',
    component: Search,
  },
  {
    name: 'RecentSearch',
    component: RecentSearch,
  },
  {
    name: 'Doctors',
    component: Doctors,
  },
  {
    name: 'Clinics',
    component: Clinics,
  },
  {
    name: 'Parent',
    component: Parent,
  },
  {
    name: 'Welcome',
    component: Welcome,
  },
  {
    name: 'MainContainer',
    component: MainContainer,
  },
];
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="MeContactsList" component={MeContacts} /> */}
        {/* <Stack.Screen name="EditSection" component={EditSection} /> */}
        {/* <Stack.Screen name="MeContacts" component={Mesectioncontact} /> */}
        {/* <Stack.Screen name="Meprofile" component={Meprofile} /> */}
        {/* <Stack.Screen name="EmergencyContacts" component={EmergencyContacts} /> */}
        {/* <Stack.Screen name="Verifyphone" component={Verifyphone} /> */}
        {/* <Stack.Screen name="SearchHome" component={SearchHome} /> */}
        {/* <Stack.Screen name="MyDoctorScreen" component={MyDoctorScreen} /> */}
        {/* <Stack.Screen name="Issues" component={Issues} /> */}
        {/* <Stack.Screen name="Specailist" component={Specailist} /> */}
        {/* <Stack.Screen name="Location" component={Location} /> */}
        {/* <Stack.Screen name="Header" component={Header} /> */}
        {/* <Stack.Screen name="Search" component={Search} /> */}
        {/* <Stack.Screen name="RecentSearch" component={RecentSearch} /> */}
        {/* <Stack.Screen name="Doctors" component={Doctors} /> */}
        <Stack.Screen name="Clinics" component={Clinics} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgetpassword" component={Forgetpassword} />

        <Stack.Screen name="VerifyEmail" component={Verifyemail} />

        <Stack.Screen name="Crosssignnumber" component={Crosssignnumber} />
        <Stack.Screen name="Successful" component={Successful} />
        <Stack.Screen name="Changepwsuccess" component={Changepwsuccess} />
        <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
