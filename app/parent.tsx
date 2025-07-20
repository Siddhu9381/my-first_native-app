import { View, Text } from 'react-native'
import React from 'react'
import Child from './child'

const Parent = () => {
    const message: string = "Hello form parent"
  return (
    <View>
      <Text>Parent</Text>
      <Child message = {message}/>
    </View>
  )
}

export default Parent