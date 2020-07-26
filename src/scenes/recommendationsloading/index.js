import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, ImageBackground,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Images from '../../utils/images';
import CustomText from '../../components/CustomText';

const generateText = 'Generating recommendations for you…';

const RecommendationsLoading = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [parcentToCover, setPercentToCover] = useState(0);

  useEffect(() => {
    if (counter < 100) {
      setTimeout(() => setCounter(counter + 5), 1000);
    }
    setPercentToCover(counter * 1);
    if (counter === 100) {
      navigateToHome();
    }
  }, [counter]);

  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <CustomText text={generateText} style={styles.generateText} fontStyle="bold" />
      </View>
      <ImageBackground source={Images.recommendationLoader} style={styles.imageBackgroundView}>
        <View style={[styles.spinnerView]}>
          <ProgressCircle
            percent={parcentToCover}
            radius={90}
            borderWidth={5}
            color="#32CD32"
            shadowColor="#999"
            bgColor="#100721"
            containerStyle={{ height: 150, width: 150 }}
          >
            <Text style={styles.counterText}>{`${counter}%`}</Text>
          </ProgressCircle>
        </View>
      </ImageBackground>
      <View style={styles.freeView} />
    </View>
  );
};

export default RecommendationsLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100721',
  },
  textView: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingBottom: '10%'
  },
  generateText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: '10%'
  },
  imageBackgroundView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'
  },
  freeView: {
    flex: 0.6
  },
  counterText: {
    fontSize: 30,
    color: '#fff'
  }
});
