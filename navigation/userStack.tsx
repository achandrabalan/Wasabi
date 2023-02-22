import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import ChatScreen from '../screens/ChatScreen';
import { Image } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerMode: 'false' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{headerMode: 'false' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}