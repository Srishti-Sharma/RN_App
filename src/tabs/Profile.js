import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function ProfileScreen() {
  const count = useSelector(counter => counter);
  return (
    <View style={styles.main}>
      <Text>Profile!</Text>
      <Text>Count = {count}</Text>
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
