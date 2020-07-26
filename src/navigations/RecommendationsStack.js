import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recommendations from '../scenes/recommendationsloading';

const RecommendationsStackNavigator = createStackNavigator();

export default function HomeStack() {
  return (
    <RecommendationsStackNavigator.Navigator>
      <RecommendationsStackNavigator.Screen name="Recommendations" component={Recommendations} />
    </RecommendationsStackNavigator.Navigator>
  );
}
