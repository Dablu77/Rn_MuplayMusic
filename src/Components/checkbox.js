import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {useState} from 'react';

function CheckBox({title, checked, onPress}) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsChecked(!isChecked);
        if (onPress) {
          onPress();
        }
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {isChecked ? (
          <Text style={styles.t}>✓</Text>
        ) : (
          <View
            style={{
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: 'black',
              backgroundColor: 'white',
            }}
          />
        )}
        <Text style={styles.t}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  t: {
    color: 'silver',
  },
});
export default CheckBox;
