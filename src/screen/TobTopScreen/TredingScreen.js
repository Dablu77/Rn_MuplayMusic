import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from '../../Components/ReusableComponets/Dimensions';
import Colors from '../../Components/utils/Colors';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

export default function TredingScreen({ navigation }) {
  const SrtData = [
    {
      PoolSize: '10,000',
      Reward: '5,000',
      Slots: '10,000',
      StartTime: '8 Pm',
      EndTime: '10 Am',
      Date: '04-Jan-2023',
      Generic: 'Garhwali',
    },
    {
      PoolSize: '10,000',
      Reward: '5,000',
      Slots: '10,000',
      StartTime: '8 Pm',
      EndTime: '10 Am',
      Date: '04-Jan-2023',
      Generic: 'Garhwali',
    },
    {
      PoolSize: '10,000',
      Reward: '5,000',
      Slots: '10,000',
      StartTime: '8 Pm',
      EndTime: '10 Am',
      Date: '04-Jan-2023',
      Generic: 'Garhwali',
    },
    {
      PoolSize: '10,000',
      Reward: '5,000',
      Slots: '10,000',
      StartTime: '8 Pm',
      EndTime: '10 Am',
      Date: '04-Jan-2023',
      Generic: 'Garhwali',
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.Balck }}>
      <View
        style={{
          height: heightPixel(50),
          backgroundColor: '#40444a',
          borderWidth: 1,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: Colors.Withe, fontWeight: '500' }}>
              Sort By:
            </Text>
            <Text style={{ color: Colors.Withe, left: 10, fontWeight: '500' }}>
              ENRTY
            </Text>
            <Image
              source={require('../../assets/download.png')}
              style={{ height: heightPixel(15), width: widthPixel(15), left: 12 }}
            />
          </View>
          <Text
            style={{
              color: Colors.Lightgrey,
              fontSize: fontPixel(17),
              fontWeight: 'bold',
            }}>
            Pool Size
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{ color: Colors.Lightgrey, fontWeight: 'bold', right: 13 }}>
              Start Date
            </Text>
            <Image
              source={require('../../assets/filterfilledtoolsymbol.png')}
              style={{ height: heightPixel(17), width: widthPixel(17) }}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 5,
        }}>
        <Text style={{ color: Colors.Withe }}>50 Result Found</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: Colors.Withe, right: 10 }}>1 Sort Applied</Text>
          <Text style={{ color: Colors.Withe }}>CLEAR</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}>
        {SrtData.map((value, index) => (
          <View
            key={index}
            style={{
              height: heightPixel(215),
              marginTop: 20,
              marginHorizontal: 15,
              borderRadius: 10,
              backgroundColor: '#1D1D1D',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                backgroundColor: '#504F4F',
                paddingVertical: 5,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <Text style={{ color: '#d3d3d3' }}>#BLRO123</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#d3d3d3', right: 6 }}>Generic:-</Text>
                <Text style={{ color: '#d3d3d3' }}>Garhwali</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                top: 10,
                alignItems: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: Colors.Withe, fontSize: fontPixel(18) }}>
                  Pool Size:-
                </Text>
                <Text
                  style={{
                    color: Colors.Withe,
                    left: 10,
                    fontSize: fontPixel(18),
                  }}>
                  10,000
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('RankWinningScreen')}
                style={{
                  paddingVertical: 6,
                  backgroundColor: "#3259f6",
                  width: widthPixel(80),
                  alignItems: 'center',
                  borderRadius: 4,
                }}>
                <Text style={{ color: Colors.Withe }}>Details</Text>
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <View style={{ height: heightPixel(7), width: widthPixel(343), backgroundColor: Colors.Withe, borderRadius: 25 }}>
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

                </LinearGradient>
              </View>


            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 17,
                marginTop: 5,
                top: 3
              }}>
              <Text style={{ color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(12) }}>
                5,000 Left
              </Text>
              <Text style={{ color: Colors.Lightgrey, fontWeight: '500', fontSize: fontPixel(12) }}>
                10,000 Slots
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                marginTop: 7,
              }}>
              <View style={{ alignItems: 'flex-start', }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                  <Text style={{ color: Colors.Withe, fontSize: fontPixel(14), }}>
                    Reward
                  </Text>
                  <Text
                    style={{
                      color: Colors.Withe,
                      fontSize: fontPixel(15),
                      left: 5,
                    }}>
                    5,000
                  </Text>
                </View>
                <Text style={{ color: Colors.Withe, fontSize: fontPixel(14) }}>
                  1st: 5,000,2nd: 3,00
                </Text>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{ color: Colors.Withe, fontWeight: '500', right: 12 }}>
                  Entry
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditSaveScreen')}
                  style={{
                    paddingVertical: 5,
                    backgroundColor: "#3259f6",
                    width: widthPixel(65),
                    alignItems: 'center',
                    borderRadius: 4,
                  }}>
                  <Text style={{ color: Colors.Withe, fontWeight: '500' }}>
                    5,000
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 15,
                  backgroundColor: '#504F4F',
                  paddingVertical: 6,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,

                }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: Colors.Withe, fontSize: fontPixel(15) }}>
                    Start at: 8 Pm
                  </Text>
                  <Text
                    style={{
                      color: Colors.Withe,
                      left: 15,
                      fontSize: fontPixel(15),
                    }}>
                    End at: 10 Am
                  </Text>
                </View>

                <Text style={{ color: Colors.Withe, fontSize: fontPixel(15) }}>
                  04-Jan-2023
                </Text>
              </View>
            </View>
          </View>

        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
