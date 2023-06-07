import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Header from '../Components/ReusableComponets/Header';
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from '../Components/ReusableComponets/Dimensions';
import Colors from '../Components/utils/Colors';
import * as Progress from 'react-native-progress';
import AllScreen from './TobTopScreen/AllScreen';
import UpcoomingScreen from './TobTopScreen/UpcoomingScreen';
import Reward from './TobTopScreen/Reward';
import Leaderboard from './TobTopScreen/Leaderboard';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createMaterialTopTabNavigator();

export default function RankWinningScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>
      <Header
        height={heightPixel(30)}
        width={widthPixel(30)}
        Image={require('../assets/leftarrow2.png')}
        onePressIcone={() => navigation.navigate('Notifications')}
        onPress={() => navigation.goBack('')}
      />
      <View
        style={{
          height: heightPixel(170),
          backgroundColor: '#212121',
          margin: 20,
          borderRadius: 10,
        }}>
        <View
          style={{
            paddingHorizontal: 15,
            backgroundColor: '#2a2a2a',
            paddingVertical: 5,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <Text
            style={{
              color: '#d3d3d3',
              fontSize: fontPixel(22),
              fontWeight: '500',
            }}>
            #BLRO123
          </Text>
        </View>
        <Text
          style={{
            color: Colors.Withe,
            fontSize: fontPixel(25),
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          10,000
        </Text>
        <View style={{ alignItems: 'center' }}>
          {/* <Progress.Bar progress={0.5} width={widthPixel(325)} height={6} color={Colors.Chinesepurple} /> */}
          <View style={{ height: heightPixel(7), width: widthPixel(321), backgroundColor: Colors.Withe, borderRadius: 25 }}>
            <LinearGradient
              colors={['#962fec', '#d62abc']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: heightPixel(7),
                width: widthPixel(190),
                backgroundColor: 'red',
                borderRadius: 25,
              }}>
              {/* <View style={{  height: heightPixel(7), width: widthPixel(340), backgroundColor: Colors.Withe }}> */}
              {/* </View> */}
            </LinearGradient>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 22,
            marginTop: 5,
          }}>
          <Text style={{ color: Colors.Lightgrey, fontWeight: '500' }}>
            5,000 Left
          </Text>
          <Text style={{ color: Colors.Lightgrey, fontWeight: '500' }}>
            10,000 Slots
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View
            style={{
              paddingHorizontal: 15,
              backgroundColor: '#2a2a2a',
              paddingVertical: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems: 'center',
            }}>
            <Text style={{ color: '#5c5c5c', fontWeight: '500' }}>20 Min Left</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: Colors.Chinesepurple,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 22,
          marginVertical: 10,
        }}>
        <Text
          style={{
            fontSize: fontPixel(20),
            fontWeight: '500',
            color: Colors.Withe,
          }}>
          Join 1,000
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: 'black' },
            tabBarItemStyle: { width: 120 },
            tabBarActiveTintColor: Colors.Withe,
            tabBarIndicatorStyle: {
              borderBottomColor: Colors.Chinesepurple,
              borderBottomWidth: 2,
              width: widthPixel(100),
              marginHorizontal: 18
            },
          }}>
          <Tab.Screen name="Reward" component={Reward} />
          <Tab.Screen name="Leaderboard" component={Leaderboard} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
