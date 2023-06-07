import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CheckBox from '../Components/checkbox';
import Costuminput from '../Components/Costuminput';
import Costumbutton from '../Components/Costumbutton';
import Logo from '../assets/logoMuplay.png';
import image from '../assets/BackgroundforApp.jpg';
// import axios from 'axios';

import {useNavigation} from '@react-navigation/native';
const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const {email, setEmail} = useState('');
  const {mobile, setMobile} = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const {height} = useWindowDimensions();
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const onSignupPressed = () => {
    // setIsSubmitting(true);
    navigation.navigate('TabNavigation');
  };

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }
    const name = firstName + lastName;
    fetch('/api/items', {
      method: 'POST',
      body: JSON.stringify({mobile, name, email}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setIsSubmitting(false);
      })
      .catch(error => {
        setError(error);
        setIsSubmitting(false);
      });
  }, [isSubmitting]);

  const login = () => {
    // console.warn('Sign up');
    // navigation.navigate('SignIn');
    navigation.navigate('Signinscreen');
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

        <View style={styles.oneline}>
          <View style={styles.one}>
            <Costuminput
              placeholder="First Name"
              value={firstName}
              setValue={setFirstName}
            />
          </View>
          <View style={styles.one}>
            <Costuminput
              placeholder="Last Name"
              value={lastName}
              setValue={setLastName}
            />
          </View>
        </View>

        <Costuminput
          placeholder="Phone no."
          value={mobile}
          setValue={setMobile}
        />

        <Costuminput
          placeholder="Email address"
          value={email}
          setValue={setEmail}
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
          {isChecked ? (
            <Text style={{color: 'white'}}>Thank you for Verification!</Text>
          ) : (
            <Text style={{color: 'white'}}>Verify that you are 18+</Text>
          )}
        </View>

        <Costumbutton text="Next" onPress={onSignupPressed} />
        {/* <Costumbutton text="Forgot Password ?" onPress={onForgotPasswordPress} type="3" /> */}
        <View style={{alignSelf: 'center'}}>
          <Text style={styles.text}>
            Already a member
            <TouchableOpacity onPress={login}>
              <Text style={styles.text1}> log in </Text>
            </TouchableOpacity>
          </Text>
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

    padding: 0,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  costuminput: {
    flex: 1,
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
  oneline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    alignSelf: 'center',
  },
  one: {
    flex: 0.438,
    width: '20%',
    margin: -6,
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
export default RegisterScreen;
