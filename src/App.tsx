import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TilesScreen from './screens/TilesScreen'

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }} initialRouteName='HomeScreen'>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="TilesScreen" component={TilesScreen} />
    </Stack.Navigator>
  </NavigationContainer>
};

export default App;
