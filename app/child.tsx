import { View, Text } from 'react-native'
import React from 'react'
import GrandChild from './grandChild'

const Child = ({message} : {message: string}) => {
  return (
    <View>
      <Text>Child</Text>
      <GrandChild message= {message}/>
    </View>
  )
}

export default Child