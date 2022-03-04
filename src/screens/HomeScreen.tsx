import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc'
import Counter from '../components/Counter';
import Logo from '../components/Logo'
import { setChosenValue } from '../redux/actions';
import { ScreenProps } from './commons';

const HomeScreen: React.FC<ScreenProps> = (props) => {

  const { navigation } = props
  const { chosenNumber } = useSelector((state: any) => state.home)
  const dispatch = useDispatch()

  return <SafeAreaView style={tw`flex flex-1`}>
    <Logo />
    <View style={tw`flex flex-1 items-center justify-center`}>
      <Text style={tw`text-4 mb-2`}>Pick a number of your choice:</Text>
      <Counter value={chosenNumber} onChange={(val) => { dispatch(setChosenValue(val)) }} minValue={1} maxValue={9} />
      <View style={tw`m-4`}>
        <Button onPress={() => { navigation.navigate('TilesScreen') }} title="Let's Go!" />
      </View>
    </View>
  </SafeAreaView>
}

export default HomeScreen
