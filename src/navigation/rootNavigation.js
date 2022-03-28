import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import React, {Component} from 'react';
import HomeTab from './Tab/HomeTab';
import {stackName} from '../configs/navigationContants';

import ScreenHook from '../screensHook';
import Screen from '../screens';

export default class RootNavigation extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={stackName.homeStack} component={HomeTab} />
        <Stack.Screen
          name={stackName.detailStack}
          component={Screen.DetailScreen}
        />
      </Stack.Navigator>
    );
  }
}
