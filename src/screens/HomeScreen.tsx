import React from 'react';
import { SafeAreaView, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc'
import Counter from '../components/Counter';
import CustomButton from '../components/CustomButton';
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
      <Text style={tw`text-4 mb-2 text-black`}>Pick a number</Text>
      <Counter value={chosenNumber} onChange={(val) => { dispatch(setChosenValue(val)) }} minValue={1} maxValue={9} />
      <View style={tw`m-4 pt-10`}>
        <CustomButton onPress={() => { navigation.navigate('TilesScreen') }} title="Let's Go!" />
      </View>
    </View>
  </SafeAreaView>
}

export default HomeScreen
