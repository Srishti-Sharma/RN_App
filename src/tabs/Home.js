import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';

import List from '../components/List';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <List />
      <Text>Home! </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
});
