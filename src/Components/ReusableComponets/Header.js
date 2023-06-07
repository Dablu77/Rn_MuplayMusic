import {Logs} from 'expo';
import React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import Colors from '../utils/Colors';

import {heightPixel, widthPixel} from './Dimensions';
const Header = props => {
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          backgroundColor: Colors.Balck,
          paddingHorizontal: '4%',
          flexDirection: 'row',
          // paddingVertical: 25,
          // marginTop: 35,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={props.Image}
            style={[
              {resizeMode: 'contain', borderRadius: 100},
              {height: props.height, width: props.width},
            ]}
          />
        </TouchableOpacity>
        <View>
          <Image
            source={require('../../assets/logoMuplay.png')}
            style={{
              resizeMode: 'contain',
              height: heightPixel(80),
              width: widthPixel(80),
            }}
          />
        </View>
        <TouchableOpacity onPress={props.onePressIcone}>
          <Image
            source={require('../../assets/bell.png')}
            style={{
              height: heightPixel(25),
              width: widthPixel(25),
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
