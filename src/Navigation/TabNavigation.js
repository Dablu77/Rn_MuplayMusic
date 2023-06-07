import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../Components/utils/Colors';
import HomeStack from './StackNavigators/HomeStack';
import MyPolSatck from './StackNavigators/MyPolSatck';
import WalletSatck from './StackNavigators/WalletSatck';
import HomeIconne from '../assets/HomeIconne.png'
import trophy from '../assets/trophy.png'
import wallet from '../assets/wallet.png'
import user from '../assets/user.png'
import ProfileStack from './StackNavigators/ProfileStack';
import LabelSatck from './StackNavigators/LabelSatck';
import tag from '../assets/tag.png'

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator

            screenOptions={{
                showLabel: false,
                headerShown: true,
                tabBarActiveTintColor: Colors.Chinesepurple,
                // tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: Colors.Balck,


                },
                tabBarLabelStyle: {
                    fontWeight: '500',
                    fontSize: 12,
                    // color: Colors.Withe
                },


            }}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={HomeIconne}
                            style={{
                                height: focused ? 30 : 20,
                                width: focused ? 30 : 20,
                                tintColor: focused ? Colors.Chinesepurple : Colors.Withe,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="My Pool"
                component={MyPolSatck}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={trophy}
                            style={{
                                height: focused ? 30 : 18,
                                width: focused ? 30 : 18,
                                tintColor: focused ? Colors.Chinesepurple : Colors.Withe,
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Wallet"
                component={WalletSatck}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={wallet}
                            style={{
                                height: focused ? 30 : 20,
                                width: focused ? 30 : 20,

                                tintColor: focused ? Colors.Chinesepurple : Colors.Withe,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Label"
                component={LabelSatck}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={tag}
                            style={{
                                height: focused ? 30 : 24,
                                width: focused ? 30 : 24,

                                tintColor: focused ? Colors.Chinesepurple : Colors.Withe,
                            }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    tabBarColor: Colors.Orange,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={user}
                            style={{
                                height: focused ? 30 : 20,
                                width: focused ? 30 : 20,
                                tintColor: focused ? Colors.Chinesepurple : Colors.Withe,
                            }}
                        />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}

export default TabNavigation;