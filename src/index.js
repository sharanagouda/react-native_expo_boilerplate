import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import checkIfFirstLaunch from './utils/onBoardingHelper';
import OnBoardingStack from './navigations/OnBoardingStack';
import HomeStack from './navigations/HomeStack';

// import CheckConnection from './components/CheckConnection';
// import Store from './redux/store';
// import { Provider } from 'react-redux';

// TODO:: Use Hooks for Redux set up.

const regular = require('./assets/fonts/Montserrat-Regular.ttf');
const light = require('./assets/fonts/Montserrat-Light.ttf');
const medium = require('./assets/fonts/Montserrat-Medium.ttf');
const bold = require('./assets/fonts/Montserrat-Bold.ttf');
const semiBold = require('./assets/fonts/Montserrat-SemiBold.ttf');
const extraBold = require('./assets/fonts/Montserrat-ExtraBold.ttf');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appIsReady: false,
      isFirstLaunch: false
    };
  }

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    await SplashScreen.preventAutoHideAsync();
    checkIfFirstLaunch().then((value) => {
      this.setState({ isFirstLaunch: value });
    });
    this.prepareResources();
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    // await performAPICalls(...);
    // await downloadAssets(...);
    await this.loadFonts();
    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  }

  loadFonts=async () => {
    await Font.loadAsync({
      // This'll be used in font-family
      'Montserrat-Regular': regular,
      'Montserrat-Light': light,
      'Montserrat-Medium': medium,
      'Montserrat-Bold': bold,
      'Montserrat-SemiBold': semiBold,
      'Montserrat-ExtraBold': extraBold,
    });
  }

  render() {
    const { appIsReady, isFirstLaunch } = this.state;
    if (!appIsReady) {
      return null;
    }
    return (
      <NavigationContainer>
        { !isFirstLaunch

          ? <OnBoardingStack />

          : <HomeStack />}

      </NavigationContainer>
    );
  }
}

// TODO:: Migrate to functional component using hooks
// export default function App() {
//   const [appIsReady, setAppIsReady] = useState(false);

//   useEffect(async () => {
//     // Prevent native splash screen from autohiding
//     await SplashScreen.preventAutoHideAsync();
//     prepareResources();
//   });

//   /**
//    * Method that serves to load resources and make API calls
//    */
//   const prepareResources = async () => {
//     // await performAPICalls(...);
//     // await downloadAssets(...);
//     setTimeout(async () => {
//       await SplashScreen.hideAsync();
//     }, 2000);
//     setAppIsReady(true);

//     // await SplashScreen.hideAsync();
//   };

//   if (!appIsReady) {
//     return null;
//   }

//   return (
//     <NavigationContainer>
//       <Tabs.Navigator initialRouteName="Home">
//         <Tabs.Screen name="Home" component={HomeStack} />
//         <Tabs.Screen name="Search" component={SearchStack} />
//         <Tabs.Screen name="For You" component={RecommendationsStack} />
//         <Tabs.Screen name="Watchlist" component={WatchListStack} />
//         <Tabs.Screen name="Profile" component={ProfileStack} />
//       </Tabs.Navigator>
//     </NavigationContainer>

//   );
// }
