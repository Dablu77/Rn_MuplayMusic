import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AllScreen from '../../screen/TobTopScreen/AllScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const Stack = createNativeStackNavigator();
function ProfileStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default ProfileStack;
