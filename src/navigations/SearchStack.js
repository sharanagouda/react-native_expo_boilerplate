import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../scenes/search';

const SearchStackNavigator = createStackNavigator();

export default function HomeStack() {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name="Search" component={Search} />
    </SearchStackNavigator.Navigator>
  );
}
