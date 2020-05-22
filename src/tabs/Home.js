import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import List from '../components/List';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <List navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    color: 'indianred',
    fontSize: 30,
    marginTop: 15,
    borderBottomColor: 'indianred',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
});
