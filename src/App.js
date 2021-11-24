import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NetworkInfo from './components/NetworkInfo';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
      </View>
      <NetworkInfo />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
});

export default App;
