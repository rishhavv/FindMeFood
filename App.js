import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultScreen from './src/Screens/ResultScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="FindMeFood"  >
        <Stack.Screen name="FindMeFood" component={SearchScreen} title="Find me food" />
        <Stack.Screen name="ResultScreen" component={ResultScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;