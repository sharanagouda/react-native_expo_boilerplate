import AsyncStorage from '@react-native-community/async-storage';

const HAS_LAUNCHED_STORAGE_KEY = 'HAS_LAUNCHED';

const storeFirstLaunchData = async (value) => {
  try {
    await AsyncStorage.setItem(HAS_LAUNCHED_STORAGE_KEY, value);
  } catch (e) {
    // saving error
  }
};

export default async function checkIfFirstLaunch() {
  try {
    const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED_STORAGE_KEY);
    if (hasLaunched === null) {
      storeFirstLaunchData('true');
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
