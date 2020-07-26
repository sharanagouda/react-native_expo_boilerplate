import React, { useEffect, useState } from 'react';
import {
  Text, View, Image, StyleSheet, SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle';
import Images from '../../utils/images';
import CustomText from '../../components/CustomText';

const textContent = {
  popCornText: 'Find movies and shows to watch on your favourite OTT channels',
  proceedText: "To proceed, we need you to rate a few blockbusters. It won't take more than 30 seconds",
  privacyText: 'By sign up you are agreeing to our Privacy Policy. and Terms  Conditions'
};

const PreOnboarding = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [percentToCover, setPercentToCover] = useState(0);

  useEffect(() => {
    if (counter < 10) {
      setTimeout(() => setCounter(counter + 1),
        1000);
    }
    setPercentToCover(counter * 10);
    if (counter === 10) {
      navigateToNextPage();
    }
  }, [counter]);

  const navigateToNextPage = () => {
    navigation.navigate('LanguageSelectionScreen');
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <LinearGradient
        colors={['#680FAA', '#100721']}
        style={{
          flex: 1,
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 0.2 }}
      >
        <View style={[styles.subContainerOne]}>
          <View style={[styles.popCornImageView]}>
            <Image style={[styles.popCornImage]} source={Images.popcornImage} />
          </View>
          <CustomText text={textContent.popCornText} style={styles.popCornText} fontStyle="bold" />
        </View>
        <View style={[styles.subContainerTwo]}>
          <CustomText text={textContent.proceedText} style={styles.proceedText} fontStyle="regular" />
          <View style={[styles.spinnerView]}>
            <ProgressCircle
              percent={percentToCover}
              radius={40}
              borderWidth={5}
              color="#32CD32"
              shadowColor="#999"
              bgColor="#100721"
              containerStyle={{ height: 60, width: 60 }}
            >
              <Text style={styles.counterText}>{counter}</Text>
            </ProgressCircle>
          </View>
          <CustomText text={textContent.privacyText} style={styles.privacyText} fontStyle="medium" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default PreOnboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100721',
  },
  subContainerOne: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '12%'
  },
  popCornImageView: {
    padding: '5%'
  },
  popCornImage: {
    height: 178,
    width: 178,
    borderRadius: 178 / 2
  },
  popCornText: {
    color: '#FFFFFF',
    fontSize: 22,
    paddingHorizontal: '12%',
    textAlign: 'center'
  },
  subContainerTwo: {
    flex: 0.6,
    alignItems: 'center'
  },
  proceedText: {
    color: '#BEB4D6',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: '15%'
  },
  spinnerView: {
    paddingBottom: '12%',
    paddingTop: '8%'
  },
  spinnerImageIcon: {
    height: 64,
    width: 64,
    borderRadius: 64 / 2
  },
  privacyText: {
    color: '#9080AD',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: '18%'
  },
  counterText: {
    fontSize: 30,
    color: '#fff'
  }
});
