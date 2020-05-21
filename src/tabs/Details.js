import React from 'react';
import {Dimensions, View, StyleSheet, ScrollView} from 'react-native';
import Carousel from './Carousal';

const {width, height} = Dimensions.get('window');

export default function DetailScreen({route}) {
  const {data} = route.params;

  const URI = [
    'https://images.unsplash.com/photo-1589133296217-ac0fb8ce36ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
    'https://i.pinimg.com/474x/da/86/f6/da86f680afafc3abb1b55bcdee36a44c.jpg',
    'https://images.unsplash.com/photo-1557995744-18c7f67f4307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  ];

  return (
    <View style={styles.main}>
      <Carousel data={URI} />
      {/* <ScrollView> */}
      {/* <Text style={styles.body}>
          {data.body}
          {data.body}
        </Text> */}
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
