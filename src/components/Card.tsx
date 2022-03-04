import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import tw from 'twrnc'

type CardProps = {
  width: number
}

const Card: React.FC<CardProps> = (props) => {
  const { width } = props
  return <View style={{
    width: width, ...styles.container
  }}>
    <Image style={tw`h-10 w-10`} source={require('../assets/giftbox.png')} />
  </View>
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
    marginBottom: 20,
    height: 100,
  }
})

export default Card

