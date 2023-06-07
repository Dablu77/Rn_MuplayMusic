import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const Costumbutton = ({onPress, text, type = 'primary', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '60%',

    marginVertical: 9,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 1,
    padding: 10,
  },
  container_primary: {
    backgroundColor: '#56efe0',
  },
  container_2: {
    borderColor: '#3871F3',
    borderWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_3: {
    color: 'grey',
  },
  text_2: {
    color: '#3871F3',
  },
});

export default Costumbutton;
