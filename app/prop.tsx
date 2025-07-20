import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Prop = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
        <Link href= "./parent">Parent</Link>
    </View>
  )
}

export default Prop