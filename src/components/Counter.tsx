import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'

type CounterProps = {
  maxValue: number
  minValue: number
  value: number
  onChange: (value: number) => void
}

type UpdateButtonProps = {
  title: string
  onTap: () => void
}

const Counter: React.FC<CounterProps> = (props) => {

  const { maxValue, minValue, value, onChange } = props

  return <View style={tw`flex flex-row p-2`}>
    <UpdateButton onTap={() => {
      if (value > minValue) {
        onChange(value - 1)
      }
    }} title='-' />
    <Text style={tw`text-center px-6 w-20 py-2 bg-slate-100 text-6`}>{value}</Text>
    <UpdateButton onTap={() => {
      if (value < maxValue) {
        onChange(value + 1)
      }
    }} title='+' />
  </View>
}

const UpdateButton: React.FC<UpdateButtonProps> = (props) => {

  const { title, onTap } = props
  return <View style={tw`flex p-2`}>
    <TouchableOpacity onPress={() => onTap()}>
      <Text style={tw`text-6 mx-2 hover-text-sky-100`}>{title}</Text>
    </TouchableOpacity>
  </View>
}

export default Counter
