import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decrement} from '../store/action';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const count = useSelector(counter => counter);

  const increment = () => {
    dispatch(Increment());
  };

  const decrement = () => {
    dispatch(Decrement());
  };

  return (
    <View style={styles.main}>
      <Text>Home!</Text>
      <Text>Counter = {count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          increment();
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          decrement();
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  button: {
    width: 'auto',
    height: 'auto',
    padding: 5,
    backgroundColor: 'lightblue',
    margin: 5,
    borderColor: 'blue',
    borderWidth: 1,
  },
});
