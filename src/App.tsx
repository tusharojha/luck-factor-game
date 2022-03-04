import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import TilesScreen from './screens/TilesScreen'
import configureStore from './redux/store'
import { Provider } from 'react-redux'

const store = configureStore()
const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  return <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TilesScreen" component={TilesScreen} options={{headerTitle: 'Test Time'}} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
};

export default App;
