
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Signup, Welcome } from "./screens"


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>

        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
        />

        <Stack.Screen 
          name="Login" 
          component={Login} 
        />

        <Stack.Screen 
          name="Signup" 
          component={Signup} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;