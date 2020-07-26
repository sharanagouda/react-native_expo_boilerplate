import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Watchlist from '../scenes/watchlist';

const WatchlistStackNavigator = createStackNavigator();

export default function HomeStack() {
  return (
    <WatchlistStackNavigator.Navigator>
      <WatchlistStackNavigator.Screen name="Watchlist" component={Watchlist} />
    </WatchlistStackNavigator.Navigator>
  );
}
