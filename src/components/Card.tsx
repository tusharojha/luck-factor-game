import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import tw from 'twrnc'

type CardProps = {
  cardNumber: number
  width: number
  disabled: boolean
  attemptsLeft: number
  userWon: () => void
  onClick: () => void
}

const Card: React.FC<CardProps> = (props) => {
  const { cardNumber, width, disabled, userWon, onClick } = props
  const { chosenNumber } = useSelector((state: any) => state.home)
  const [isFlipped, setIsFlipped] = useState(false)

  const openCard = () => {
    if (!isFlipped && !disabled) {
      setIsFlipped(true)
      onClick()
      if (chosenNumber == cardNumber) {
        // User Won.
        userWon()
      }
    }
  }

  return <TouchableOpacity onPress={() => openCard()}>
    <View style={{
      width: width, ...styles.container
    }}>
      {isFlipped ? <Text style={tw`text-5 font-bold text-black`}>{cardNumber}</Text> : <Image style={tw`h-15 w-15`} source={require('../assets/giftbox.png')} />}
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    height: 100,
  }
})

export default Card

