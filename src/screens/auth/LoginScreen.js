import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import {styles} from '../../styles/LoginStyles'

const LoginScreen = ({navigation}) => {
  const {container, heading, text} = styles,
    {navigate} = navigation

  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={container}>
      <View style={{margin: 100}}>
        <FontAwesome5 name="shopping-basket" size={90} color="red" />
        <Text style={heading}>RIDER</Text>
      </View>
      <View style={{flex: 1}}>
        <CustomTextInput
          text={userId}
          onChangeText={setUserId}
          placeholder="UserId"
          iconType="FontAwesome5"
          iconName="user-alt"
        />
        <CustomTextInput
          text={password}
          onChangeText={setPassword}
          passwordField
          iconType="Feather"
          placeholder="Password"
          iconName="lock"
        />
      </View>
      <View style={{flex: 1}}>
        <CustomButton name="Sign In" />
        <TouchableOpacity onPress={() => navigate('Reset Password')}>
          <Text style={text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen
