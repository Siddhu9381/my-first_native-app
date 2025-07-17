import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'expo-router'

const Hooks = () => {
    const [count, setCount] = useState(0)
    const router = useRouter()

    useEffect(() =>{
        console.log("Component mounted")

        return (()=>{
            console.log("component unmounted")
        })
    }, [])

    useEffect(()=>{
        console.log(`count incremented: ${count}`)
    }, [count])


  return (
    <View className='flex-1 justify-center items-center bg-white'>
      <Text className='text-xl text-blue-400 font-semibold'>Hooks</Text>
      <Text>Count : {count}</Text>
      <Button title="Increment" onPress={()=> setCount(count + 1)}/>
          <Button title="Increment" onPress={() => router.push("/")} />
    </View>
  )
}

export default Hooks