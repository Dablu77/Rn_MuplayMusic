import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

const Costuminput = ({value, setValue, placeholder, secureTextEntry}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        style={styles.TextInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    maxHeight: '100%',
    justifyContent: 'center',

    paddingHorizontal: 10,
    // marginBottom: 15,
    // marginVertical: 10,
    marginTop: 10,
  },
  TextInput: {
    color: '#000',
  },
});
export default Costuminput;
