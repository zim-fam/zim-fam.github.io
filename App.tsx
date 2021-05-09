import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function Home() {
  return <Text>Homepage</Text>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}