import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AllScreen from '../../screen/TobTopScreen/AllScreen';
// import HomeScreen from '../../screen/HomeScreen';
import MyPoolScreen from '../../screen/MyPoolScreen';

const Stack = createNativeStackNavigator();
function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="MyPoolScreen"
                component={MyPoolScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;
