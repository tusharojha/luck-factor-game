import * as React from 'react';
import { View, Text } from "react-native"
import tw from "twrnc"

const Logo: React.FC = () => {
  return <View style={tw`flex items-center`}>
    <View style={tw`flex mt-4 flex-row justify-center`}>
      <Text style={tw`mr-1 text-10 text-sky-600`}>Luck</Text><Text style={tw`text-10`}>Factor</Text>
    </View>
    <Text style={tw`my-1 text-4`}>The Ultimate Luck Test</Text>
  </View>
}

export default Logo