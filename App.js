import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/rootStore';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
