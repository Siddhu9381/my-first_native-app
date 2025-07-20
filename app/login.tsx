import { View, Text, Button, TextInput, Alert, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('email is required'),
    password: yup.string().min(6, 'Password must at least 6 characters').required('Password is required')
})

type FormData = {
    name: string,
    email: string,
    password: string
}


const Login = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset 
    } = useForm<FormData>({resolver: yupResolver(schema)})

    const onSubmit = (data: FormData) => {
        Alert.alert('Form Submitted', `Name: ${data.name}\nEmail: ${data.email}`, [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
        reset()
    }

  return (
    <View className='flex-1 justify-center items-center'>
        <Controller 
        control={control}
        name= 'name'
        render={({field: {onChange, onBlur, value}}) => (
            <TextInput 
            style = {styles.input}
            placeholder='Name'
            onBlur={onBlur}
            onChangeText={onChange}
            value= {value}
            />
        )}
        />
          {errors.name && <Text>{errors.name.message}</Text>}

          <Controller
              control={control}
              name='email'
              render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                      style={styles.input}
                      placeholder='Email'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                  />
              )}
          />
          {errors.email && <Text>{errors.email.message}</Text>}

        <Controller
            control={control}
            name='password'
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                     secureTextEntry
                />
            )}
          />
          {errors.password && <Text>{errors.password.message}</Text>}

        <Pressable className='bg-green-300 px-6 py-2 rounded-lg active:bg-green-800' onPress={handleSubmit(onSubmit)}>
            <Text className='text-white font-semibold'>Submit</Text>
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 5, borderRadius: 5, width: '80%', margin: 10, boxSizing: 'border-box'},
});

export default Login