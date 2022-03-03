import * as React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux'
import HomeScreen from './screens/HomeScreen'

const App: React.FC = () => {

  return <Router>
    <Scene key="root" hideNavBar>
      <Scene initial component={HomeScreen} />
    </Scene>
  </Router>
};

export default App;
