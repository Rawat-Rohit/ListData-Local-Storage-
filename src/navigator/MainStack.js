import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/Home';
import Details from '../screens/Details';

const Stack = createStackNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash'
      screenOptions={{
        gestureEnabled:false
      }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
