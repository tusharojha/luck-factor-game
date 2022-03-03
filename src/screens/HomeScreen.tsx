import * as React from 'react';
import { SafeAreaView, View, Text } from 'react-native'
import tw from 'twrnc'
import Logo from '../components/Logo'

const HomeScreen: React.FC = () => {
  return <SafeAreaView>
    <Logo />
    <Text>hi</Text>
  </SafeAreaView>
}

export default HomeScreen
