import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../Components/ReusableComponets/Header'
import AllScreen from './TobTopScreen/AllScreen'
import UpcoomingScreen from './TobTopScreen/UpcoomingScreen'
import TredingScreen from './TobTopScreen/TredingScreen'
import Colors from '../Components/utils/Colors';
import { heightPixel, widthPixel } from '../Components/ReusableComponets/Dimensions';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation, }) {

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header
                height={heightPixel(40)}
                width={widthPixel(40)}
                onePressIcone={() => navigation.navigate("Notifications")}
                Image={require('../assets/Ellipse.png')}
            // onPress={() => navigation.goBack('')}
            />
            <View style={{ flex: 1 }}>
                <Tab.Navigator screenOptions={{
                    tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold', },
                    tabBarStyle: { backgroundColor: 'black', },
                    // tabBarItemStyle: { width: 90 },
                    tabBarActiveTintColor: Colors.Withe,
                    tabBarIndicatorStyle: {
                        borderBottomColor: Colors.Chinesepurple,
                        borderBottomWidth: 2,
                    }

                }}>
                    <Tab.Screen name="All" component={AllScreen} />
                    <Tab.Screen name="Upcoming" component={UpcoomingScreen} />
                    <Tab.Screen name="Treding" component={TredingScreen} />
                </Tab.Navigator>

            </View>

        </SafeAreaView>
    )
}