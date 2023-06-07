import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../Components/ReusableComponets/Header';
import {
  fontPixel,
  heightPixel,
  screenWidth,
  widthPixel,
} from '../Components/ReusableComponets/Dimensions';
import Colors from '../Components/utils/Colors';
import { TextInput, RadioButton, Switch } from 'react-native-paper';

export default function ProfileScreen({ navigation }) {
  const [input, setinput] = useState('');
  const [gender, setGender] = useState('');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);


  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        height={heightPixel(40)}
        width={widthPixel(40)}
        onePressIcone={() => navigation.navigate('Notifications')}
        Image={require('../assets/Ellipse.png')}
      // onPress={() => navigation.goBack('')}
      />
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#000" }}>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: Colors.Withe,
              height: heightPixel(110),
              width: widthPixel(110),
              borderRadius: 120,
            }}>
            <Image
              source={require('../assets/man2.png')}
              style={{
                height: heightPixel(108),
                width: widthPixel(108),
                borderRadius: 100,
                resizeMode: 'center',
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: Colors.Withe,
              fontSize: fontPixel(18),
              fontWeight: '500',
            }}>
            Niraj Kumar
          </Text>
          <Text
            style={{
              color: Colors.Withe,
              fontSize: fontPixel(18),
              fontWeight: '500',
              top: 5,
            }}>
            938348748
          </Text>
        </View>

        <View style={{ paddingHorizontal: 10, marginTop: 30 }}>
          <TextInput
            label="Name"
            // value={input}
            style={{
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="Email"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="Mobile"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="Date of Birth"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <View>
            <Text style={{ color: Colors.Withe, paddingHorizontal: 5, marginTop: 20, }}>
              Gender
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  name="male"
                  value="male"
                  status={gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('male')}
                />
                <Text style={{ fontWeight: '500', color: Colors.Withe }}>
                  Male
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="female"
                  status={gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('female')}
                />
                <Text style={{ fontWeight: '500', color: Colors.Withe }}>
                  Female
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                  value="others"
                  status={gender === 'others' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('others')}
                />
                <Text style={{ fontWeight: '500', color: Colors.Withe }}>
                  Others
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10, marginTop: 20 }}>
            <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(17) }}>
              Privacy Settings
            </Text>
            <TouchableOpacity>
              <Image source={require('../assets/next.png')} style={{ height: 30, width: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10, marginTop: 20 }}>
            <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(17) }}>
              Allow SMS notifications
            </Text>
            <TouchableOpacity>
              <Switch
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
                color={Colors.Chinesepurple} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10, marginTop: 20, alignItems: 'center', }}>
            <View>
              <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(17) }}>
                Make Me Discoverable
              </Text>
              <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(14), width: widthPixel(300) }}>
                Friends can find  and follow you when they sync their phone contacts.
              </Text>
            </View>
            <TouchableOpacity >
              <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1} color={Colors.Chinesepurple} />
            </TouchableOpacity>
          </View>

          <TextInput
            label="Address"
            // value={input}
            style={{
              marginTop: 30,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="City"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="Pin code"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="State"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <TextInput
            label="Country"
            // value={input}
            style={{
              marginTop: 15,
              height: heightPixel(60),
              color: Colors.Withe,
              fontSize: 14,
              backgroundColor: Colors.Balck,
              elevation: 10,
              borderColor: Colors.Lightgrey,
            }}
          // onChangeText={text => setinput(text)}
          />
          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 10, paddingVertical: 15, alignItems: 'center' }}>
            <Text style={{ fontWeight: '500', color: Colors.Withe, fontSize: fontPixel(17) }}>
              Manage Account
            </Text>
            <TouchableOpacity>
              <Image source={require('../assets/next.png')} style={{ height: 30, width: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: heightPixel(170), backgroundColor: Colors.Balck, elevation: 10, }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: 20, marginTop: 20 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', }}>
              <Image source={require('../assets/poweroff.png')} style={{ height: heightPixel(25), width: widthPixel(25), }} tintColor='#ffffff' />
              <Text style={{ fontWeight: '900', color: Colors.Withe, fontSize: fontPixel(15), paddingLeft: 5 }}>
                LOGOUT
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={{ fontWeight: '900', color: Colors.Withe, fontSize: fontPixel(15) }}>
                SARATEGIC TIMEOUT
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', marginVertical: 30, }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.Chinesepurple,
                marginVertical: 25,
                paddingVertical: 8,
                width: widthPixel(140),
                alignItems: 'center',
                borderRadius: 7,
                justifyContent: 'center'
              }}>
              <Text style={{ color: Colors.Withe, fontSize: fontPixel(15), fontWeight: '500' }}>UPDATE PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
