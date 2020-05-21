import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

export default function ProfileScreen() {
  const {width, height} = Dimensions.get('window');
  const {userName, userId} = useSelector(state => state);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={[styles.header, {width: width}]}>Profile!</Text>
      <View style={styles.container}>
        <Text>Name: {userName}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'indianred',
    fontSize: 30,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
