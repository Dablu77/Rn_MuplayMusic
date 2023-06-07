import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigation from '../TabNavigation';
import Notifications from '../../screen/Notifications';
import EditSaveScreen from '../../screen/EditSaveScreen';
import RankWinningScreen from '../../screen/RankWinningScreen';
import Signinscreen from '../../screen/Signinscreen';
import OtpVerification from '../../screen/OtpVerification';
import RegisterScreen from '../../screen/RegisterScreen';
import PrivacyPolicy from '../../screen/PrivacyPolicy';
import TermsofUse from '../../screen/TermsofUse';

const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Signinscreen"
        component={Signinscreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpVerification"
        component={OtpVerification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="EditSaveScreen"
        component={EditSaveScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RankWinningScreen"
        component={RankWinningScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TermsofUse"
        component={TermsofUse}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
