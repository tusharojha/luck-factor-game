import React, { useEffect } from "react"
import { SafeAreaView, Text, View, Dimensions } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from 'twrnc'
import Card from "../components/Card"
import { createRandomGrid } from "../redux/actions"
import { ScreenProps } from "./commons"

const DeviceWidth = Dimensions.get('window').width

const TilesScreen: React.FC<ScreenProps> = (props) => {

  const { navigation } = props
  const { chosenNumber, randomGrid } = useSelector((state: any) => state.home)

  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setOptions({ headerTitle: `Attempts Left: 3` })
    dispatch(createRandomGrid())
  }, [])

  return <SafeAreaView>
    <Text style={tw`flex flex-row items-center text-5 my-4 mx-2`}>Find the number {chosenNumber} in the cards: </Text>
    <View style={tw`flex flex-row flex-wrap justify-between mx-2`}>
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
    </View>
    <View style={tw`flex flex-row flex-wrap justify-between mx-2`}>
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
    </View>
    <View style={tw`flex flex-row flex-wrap justify-between mx-2`}>
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
      <Card width={DeviceWidth * 0.3} />
    </View>
  </SafeAreaView>
}

export default TilesScreen
