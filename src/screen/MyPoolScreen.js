
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../Components/ReusableComponets/Header'
import Colors from '../Components/utils/Colors';
import MyPool from './TobTopScreen/MyPool';
import Myplaylist from './TobTopScreen/Myplaylist';
import Completed from './TobTopScreen/Completed';
import { heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions';

const Tab = createMaterialTopTabNavigator();

export default function MyPoolScreen({ navigation }) {

    // const textTo = (text) => text?.toLowerCase();

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header
                height={heightPixel(40)}
                width={widthPixel(40)}
                Image={require('../assets/Ellipse.png')}
                onePressIcone={() => navigation.navigate("Notifications")}

                onPress={() => navigation.goBack('')} />
            <View style={{ flex: 1 }}>
                <Tab.Navigator screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', },
                    tabBarStyle: { backgroundColor: 'black', },
                    tabBarActiveTintColor: Colors.Withe,
                    tabBarItemStyle: { width: widthPixel(120) },

                    tabBarIndicatorStyle: {
                        borderBottomColor: Colors.Chinesepurple,
                        borderBottomWidth: 2,
                    }

                }}>
                    <Tab.Screen name="My Pool" component={MyPool} />
                    <Tab.Screen name="My Playlist" component={Myplaylist} />
                    <Tab.Screen name="Completed" component={Completed} />
                </Tab.Navigator>

            </View>

        </SafeAreaView>
    )
}