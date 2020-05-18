import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.main}>
      <Text>Profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
