import React from 'react';
import {PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import store from './components/redux/store';
import {Provider} from 'react-redux';
import Meprofile from './components/internal/meprofile/meprofile';
import {AppCommonDataProvider} from './components/UseAppCommonDataProvider';

import {ThemeProvider} from './components/ThemeContext';
import {LocationProvider} from './components/SearchComponents/LocationContext';
import {RecentSearchProvider} from './components/SearchComponents/RecentSearchContext';

import Navigation from './src/navigations/Navigation';
('react-native-devsettings');
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppCommonDataProvider>
        <ThemeProvider>
          <RecentSearchProvider>
            <LocationProvider>
              <Navigation />
            </LocationProvider>
          </RecentSearchProvider>
        </ThemeProvider>
      </AppCommonDataProvider>
    </Provider>
  );
}

export default App;
