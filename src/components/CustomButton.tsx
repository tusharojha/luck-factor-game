import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

type CustomButtonProps = {
  onPress: () => void
  title: string
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { onPress, title } = props
  return <TouchableOpacity onPress={() => onPress()}>
    <View style={tw`flex w-80 bg-sky-600 p-3 rounded-3xl items-center`}>
      <Text style={tw`text-white shadow-2xl text-bold text-lg font-bold`}>{title}</Text>
    </View>
  </TouchableOpacity>
}

export default CustomButton
