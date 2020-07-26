import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreOnBoarding from '../scenes/preOnboarding';
import LanguageSelection from '../scenes/languageSelection/languageSelection';
import OnBoarding from '../scenes/onboarding';
import ProviderSelection from '../scenes/providerselection';
import RecommendationsLoading from '../scenes/recommendationsloading';
import HomeStack from './HomeStack';

const OnBoardingStackNavigator = createStackNavigator();

export default function OnBoardingStack() {
  return (
    <OnBoardingStackNavigator.Navigator
      initialRouteName="PreOnBoardingScreen"
      screenOptions={{
        headerShown: false
      }}
    >
      <OnBoardingStackNavigator.Screen name="PreOnBoardingScreen" component={PreOnBoarding} />
      <OnBoardingStackNavigator.Screen name="LanguageSelectionScreen" component={LanguageSelection} />
      <OnBoardingStackNavigator.Screen name="OnBoardingScreen" component={OnBoarding} />
      <OnBoardingStackNavigator.Screen name="ProviderSelectionScreen" component={ProviderSelection} />
      <OnBoardingStackNavigator.Screen name="RecommendationsLoadingScreen" component={RecommendationsLoading} />
      <OnBoardingStackNavigator.Screen name="HomeScreen" component={HomeStack} />

    </OnBoardingStackNavigator.Navigator>
  );
}
