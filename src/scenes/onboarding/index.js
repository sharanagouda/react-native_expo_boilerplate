import React from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

export default function OnBoarding({ navigation }) {
  return (

    <View style={styles.container}>
      <Text>OnBoarding Screen</Text>
      <Button
        title="Proceed to next screen"
        onPress={() => navigation.navigate('ProviderSelectionScreen')}
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
