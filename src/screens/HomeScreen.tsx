import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native'
import tw from 'twrnc'
import Counter from '../components/Counter';
import Logo from '../components/Logo'

type HomeScreenProps = {
  navigation: any
}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {

  const { navigation } = props
  const [number, setNumber] = useState(1)

  return <SafeAreaView style={tw`flex flex-1`}>
    <Logo />
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text style={tw`text-4 mb-2`}>Pick a number of your choice:</Text>
      <Counter value={number} onChange={(val) => { setNumber(val) }} minValue={1} maxValue={9} />
      <View style={tw`m-4`}>
        <Button onPress={() => { navigation.navigate('TilesScreen') }} title="Let's Go!" />
      </View>
    </View>
  </SafeAreaView>
}

export default HomeScreen
