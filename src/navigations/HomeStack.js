import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../scenes/home';
import SearchStack from './SearchStack';
import WatchListStack from './WatchListStack';
import ProfileStack from './ProfileStack';

const Tabs = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={SearchStack} />
      <Tabs.Screen name="Watchlist" component={WatchListStack} />
      <Tabs.Screen name="Profile" component={ProfileStack} />
    </Tabs.Navigator>
  );
}
