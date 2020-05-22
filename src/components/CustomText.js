import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {defaultFont} from '../asset/font';

const CustomText = ({style, title, ...other}) => {
  return (
    <Text style={[styles.text, {...style}]} {...other}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: defaultFont,
  },
});

export default CustomText;
