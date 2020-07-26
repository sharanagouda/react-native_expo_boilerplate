import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../scenes/profile';

const ProfileStackNavigator = createStackNavigator();

export default function ProfileStack() {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen name="Profile" component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
}
