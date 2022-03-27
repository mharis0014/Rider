import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../screens/auth/LoginScreen'
import SignupScreen from '../screens/auth/SignupScreen'
import ResetPassScreen from '../screens/auth/ResetPassScreen'
import HomeScreen from '../screens/user/HomeScreen'
import ProfileScreen from '../screens/user/ProfileScreen'

const Stack = createNativeStackNavigator()

const Navigator = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Reset Password" component={ResetPassScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default Navigator
