import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from '../Components/ReusableComponets/Dimensions';
import Colors from '../Components/utils/Colors';

export default function TermsofUse({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={{flex: 1, resizeMode: 'contain'}}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingVertical: 25,
          }}>
          <TouchableOpacity
            style={{right: widthPixel(55)}}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/back.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontPixel(30),
              fontWeight: '900',
              color: Colors.Withe,
              letterSpacing: 0.5,
            }}>
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            height: heightPixel(500),
            marginTop: '17%',
            backgroundColor: Colors.Lightgrey,
            marginHorizontal: 20,
            borderRadius: 4,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              color: Colors.Balck,
              top: 10,
              fontSize: 16,
              textAlign: 'left',
            }}>
            may include metadata that describes the size of the image, its color
            depth, resolution, when it was created, the shutter speed, and other
            data.[16] A text document's metadata may contain information about
            how long the document is, who the author is, when the document was
            written, and a short summary of the document. Metadata within web
            pages can also contain descriptions of page content, as well as key
            words linked to the content. These links are often called how long
            the document is, who the author is, when the document was written,
            and a short summary of the document. Metadata within web pages can
            also contain descriptions of page content, as well as key words
            linked to the content. These links are often called "Metatags",
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
