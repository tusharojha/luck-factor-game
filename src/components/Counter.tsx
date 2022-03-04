import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ScrollPicker from 'react-native-wheel-scrollview-picker'
import tw from 'twrnc'

type CounterProps = {
  maxValue: number
  minValue: number
  value: number
  onChange: (value: number) => void
}

const Counter: React.FC<CounterProps> = (props) => {

  const { maxValue, value, onChange } = props

  return <View style={tw`flex flex-row p-2 w-20`}>
    <ScrollPicker
      dataSource={Array.from({ length: maxValue }, (_, i) => i + 1)}
      selectedIndex={value}
      wrapperHeight={100}
      wrapperColor='transparent'
      itemHeight={30}
      highlightColor='#d8d8d8'
      highlightBorderWidth={15}
      renderItem={(data, index) => {
        return <Text style={tw`text-black`}>{data}</Text>
      }}
      onValueChange={(data, selectedIndex) => {
        onChange(Number(data))
      }}
    />
  </View>
}

export default Counter
