import React, { useState, useEffect } from "react"
import { SafeAreaView, Text, View, Dimensions, Alert } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from 'twrnc'
import Card from "../components/Card"
import { MAX_ATTEMPTS } from "../constants"
import { createRandomGrid } from "../redux/actions"
import { ScreenProps } from "./commons"

const DeviceWidth = Dimensions.get('window').width

const TilesScreen: React.FC<ScreenProps> = (props) => {

  const { navigation } = props
  const { chosenNumber, randomGrid } = useSelector((state: any) => state.home)
  const [attemptsLeft, setAttemptsLeft] = useState(MAX_ATTEMPTS)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(createRandomGrid())
  }, [])

  useEffect(() => {
    if (attemptsLeft == 0) {
      // User Lost.
      Alert.alert('You lost!', 'Better luck next time.', [{ text: 'OK', onPress: () => { navigation.navigate('HomeScreen') } }])
      return;
    }
    navigation.setOptions({ headerTitle: `Attempts Left: ${attemptsLeft}` })
  }, [attemptsLeft])

  return <View style={tw`flex flex-1 justify-center items-center`}>
    <Text style={tw`flex flex-row items-center text-8 my-4 mx-2 text-black`}> Flip a tile </Text>
    <View style={tw`flex flex-row flex-wrap justify-between mx-2 mt-4`}>
      {randomGrid.map((cardNumber: number) =>
        <Card userWon={() =>
          Alert.alert('Congratulations, You won!', `It took just ${MAX_ATTEMPTS - attemptsLeft + 1} attempt${attemptsLeft < (MAX_ATTEMPTS - 1) ? 's' : ''}.`, [{ text: 'OK', onPress: () => { navigation.navigate('HomeScreen') } }])} onClick={() =>
            setAttemptsLeft(attemptsLeft - 1)} disabled={attemptsLeft == 0} attemptsLeft={attemptsLeft} cardNumber={cardNumber} width={DeviceWidth * 0.3} />
      )}
    </View>
  </View>
}

export default TilesScreen
