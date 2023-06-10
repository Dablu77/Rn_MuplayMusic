import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '../Components/checkbox';
import Costuminput from '../Components/Costuminput';
import Costumbutton from '../Components/Costumbutton';
import Logo from '../assets/logoMuplay.png';
import image from '../assets/BackgroundforApp.jpg';

// import {useNavigation} from '@react-navigation/native'
const OtpVerification = ({navigation}) => {
  const [otpCode, setOTPCode] = useState('');

  const {height} = useWindowDimensions();
  const {width} = useWindowDimensions();
  // const navigation =useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    navigation.navigate('TabNavigation');

    //  navigation.navigate("Home");
  };
  const handleChange = text => {
    setOTPCode(text);
  };
  const onSignupPress = () => {
    console.warn('Sign up');
    // navigation.navigate("SignUp");
  };
  const Terms_of_use = () => {
    console.warn('toc');
  };
  const onForgotPasswordPress = () => {
    console.warn('FORGOT');
    // navigation.navigate("ForgotPassword");
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.images}>
      <ScrollView contentContainerStyle={styles.images}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 1}, {width: width * 1}]}
          resizeMode="contain"
        />
        <Text style={styles.text}>
          {' '}
          OTP Send on your registered E-Mail or Mobile No
        </Text>

        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={otpCode.slice(0, 1)}
              onChangeText={text => handleChange(text + otpCode.slice(1))}
              keyboardType="number-pad"
              maxLength={1}
              placeholderTextColor={'grey'}
              autoFocus
            />
            <TextInput
              style={styles.input}
              value={otpCode.slice(1, 2)}
              placeholderTextColor={'grey'}
              onChangeText={text =>
                handleChange(otpCode.slice(0, 1) + text + otpCode.slice(2))
              }
              keyboardType="number-pad"
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              value={otpCode.slice(2, 3)}
              placeholderTextColor={'grey'}
              onChangeText={text =>
                handleChange(otpCode.slice(0, 2) + text + otpCode.slice(3))
              }
              keyboardType="number-pad"
              maxLength={1}
            />
            <TextInput
              style={styles.input}
              value={otpCode.slice(3, 4)}
              placeholderTextColor={'grey'}
              onChangeText={text => handleChange(otpCode.slice(0, 3) + text)}
              keyboardType="number-pad"
              maxLength={1}
            />
          </View>
        </KeyboardAvoidingView>
        <Text style={styles.text}>
          You Should receive the OTP in 30 Seconds
        </Text>

        <Costumbutton text="Register" onPress={onSignInPressed} />
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  images: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    alignSelf: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    textAlign: 'center',
    marginHorizontal: 10,
    color: '#000',
  },
  text: {
    color: 'silver',
    textAlign: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  text1: {
    color: 'red',
    fontSize: 13,
    paddingTop: 10,
  },
  c: {
    alignSelf: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  check: {
    backgroundColor: 'white',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    alignItems: 'center',
    padding: 20,
  },
  r: {
    color: 'grey',
    paddingTop: 0,
    marginTop: 0,
    paddingBottom: 20,
  },
  logo: {
    maxHeight: 300,
    maxWidth: 400, //marginTop:100,

    alignSelf: 'center',

    marginBottom: 0,
  },
  button: {
    paddingHorizontal: 100,
  },
});
export default OtpVerification;
