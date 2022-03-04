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

  // isFlipped represents if a card is already tapped / oppened.
  const [isFlipped, setIsFlipped] = useState(false)

  const openCard = () => {
    if (!isFlipped && !disabled) {
      // Mark the card as flipped.
      setIsFlipped(true)

      // Decrement the attempts left by 1.
      onClick()

      // User wins when the chosenNumber eqauls to the current card number.
      if (chosenNumber == cardNumber) {
        // Invoking prop method to show the alert, saying Congratulations message.
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

