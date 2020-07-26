import React from 'react';
import {
  StyleSheet, Text, View, Image
} from 'react-native';
import Images from '../../utils/images';

export default function Home() {
  return (

    <View style={styles.container}>
      <Text>Home screen</Text>
      <Image
        source={Images.popcornImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
