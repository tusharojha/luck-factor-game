import * as React from 'react';
import { View, Text } from "react-native"
import tw from "twrnc"

const Logo: React.FC = () => {
  return <View style={tw`flex flex-row justify-center`}>
    <Text style={tw`mr-1 text-10 text-sky-600`}>Luck</Text><Text style={tw`text-10`}>Factor</Text>
  </View>
}

export default Logo