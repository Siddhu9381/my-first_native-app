import { View, Text, StatusBar, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View className='flex-1 items-center justify-center bg-gray-100 p-4'>
        <StatusBar barStyle="default"/>
        <Image source={require("../assets/icon.png")} className='w-20 h-20 mb-4'/>
        <Text className='text-xl font-bold text-blue-600 mb-2'>Welcome to react native expo!</Text>
        <TouchableOpacity className='bg-blue-500 px-6 py-2 rounded-lg mb-2'>
            <Text className='text-white font-semibold'>Touchable Opacity</Text>
        </TouchableOpacity>
        
        <Link href='/' asChild>
            <Pressable className='bg-green-300 px-6 py-2 rounded-lg active:bg-green-800'>
                  <Text className='text-white font-semibold'>Go to home page</Text>
            </Pressable>
        </Link>
    </View>
  )
}

export default Contact