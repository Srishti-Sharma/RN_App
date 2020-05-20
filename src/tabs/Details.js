import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function DetailScreen({route}) {
  const {data} = route.params;
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1589133296217-ac0fb8ce36ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
          }}
        />
      </View>
      <ScrollView style={styles.info}>
        <Text style={styles.body}>
          {data.body}
          {data.body}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  image: {
    width: 500,
    height: 450,
    resizeMode: 'cover',
  },
  body: {
    fontSize: 18,
    padding: 15,
  },
});
