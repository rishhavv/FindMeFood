import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="FindMeFood"  >
        <Stack.Screen name="FindMeFood" component={SearchScreen} title="Find me food" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;