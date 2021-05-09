import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Homepage } from './page/homepage';
import { PoemPage } from './page/poem';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
      >
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Poem" component={PoemPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}