import * as React from 'react';
import {StyleSheet, Text, View, Animated, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Meprofile from '../internal/meprofile/meprofile';
import SearchHome from '../SearchComponents/SearchHome';
import EventScreen from './screens/events';
import SettingsScreen from './screens/settings';
import {imagePath} from '../../utils/imagePath';
const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="meProfile">
      <Tab.Screen
        name="meProfile"
        component={Meprofile}
        options={{
          tabBarLabel: 'meProfile',
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={imagePath?.profileIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SearchHome"
        component={SearchHome}
        options={{
          tabBarLabel: 'SearchHome',
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={imagePath?.calendarIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          tabBarLabel: 'EventScreen',
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={imagePath?.profileIcon}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'SettingsScreen',
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Image
                style={{width: 20, height: 20}}
                source={imagePath?.displayIcon}
              />
            </View>
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}

export default MainContainer;
