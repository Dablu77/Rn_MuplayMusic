import {
  View,
  Text,
  Image,
  StyleSheet,
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
import {useNavigation} from '@react-navigation/native';
const Signinscreen = () => {
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const {mobile, setMobile} = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const {height} = useWindowDimensions();
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    navigation.navigate('OtpVerification');
    // Save data to Firebase

    // Clear state variables
    // setUsername('');
    // setPassword('');
    // setMobile('');

    // Navigate to next screen
    // navigation.navigate("Home");
    //  navigation.navigate("Home");
  };

  const onSignupPress = () => {
    console.warn('Sign up');
    navigation.navigate('RegisterScreen');
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

        <Costuminput
          placeholder="E-mail or Mobile no."
          value={mobile}
          setValue={setMobile}
        />

        {/* <Costuminput
          placeholder="Password"
            value={password}
             setValue={setPassword}
             secureTextEntry={true}
             /> */}

        <View style={{alignItems: 'center', paddingTop: 10, paddingBottom: 20}}>
          <CheckBox
            title="I certify that I'm above 18 years of age"
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            style={styles.c}
          />
          {isChecked ? <Text>Thank you for your certification!</Text> : null}
        </View>

        <Costumbutton text="Next" onPress={onSignInPressed} />
        {/* <Costumbutton text="Forgot Password ?" onPress={onForgotPasswordPress} type="3" /> */}
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 5,
            flexWrap: 'wrap',
            marginHorizontal: 20,
          }}>
          <Text style={styles.text}>
            By registering to this app, you accept our
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('TermsofUse')}>
            <Text style={styles.text1}> Terms of Use </Text>
          </TouchableOpacity>
          <Text style={styles.text}> and our </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.text1}> Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'grey',
          }}>
          <Text style={styles.text}>
            Not a member?
            <TouchableOpacity onPress={onSignupPress}>
              <Text style={styles.text1}> Register</Text>
            </TouchableOpacity>
          </Text>
        </View> */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <Text style={styles.text}>Not a member?</Text>
          <TouchableOpacity onPress={onSignupPress}>
            <Text style={[styles.text1, {left: 3}]}> Register</Text>
          </TouchableOpacity>
        </View>
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
    // alignItems:"center",
  },

  text: {
    color: 'silver',
    textAlign: 'center',
  },
  text1: {
    color: 'red',
    fontSize: 13,
    // paddingTop: 10,
    // top: 20,
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
    maxWidth: 400,
    alignSelf: 'center',
    marginBottom: 0,
  },
});
export default Signinscreen;
