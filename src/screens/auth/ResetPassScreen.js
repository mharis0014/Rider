import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import CustomTextInput from '../../components/CustomTextInput'
import CustomButton from '../../components/CustomButton'
import {styles} from '../../styles/LoginStyles'

const ResetPassScreen = ({navigation}) => {
  const {container, heading} = styles

  const [password, setPassword] = useState('')
  const [repeatPass, setRepeatPass] = useState('')

  return (
    <View style={container}>
      <View style={{margin: 100}}>
        <FontAwesome5 name="shopping-basket" size={90} color="red" />
        <Text style={heading}>RIDER</Text>
      </View>
      <View style={{flex: 1}}>
        <CustomTextInput
          text={password}
          onChangeText={setPassword}
          passwordField
          iconType="Feather"
          placeholder="New Password"
          iconName="lock"
        />
        <CustomTextInput
          text={repeatPass}
          onChangeText={setRepeatPass}
          passwordField
          iconType="Feather"
          placeholder="Repeat New Password"
          iconName="lock"
        />
      </View>
      <View style={{flex: 1}}>
        <CustomButton name="Reset" />
      </View>
    </View>
  )
}

export default ResetPassScreen
