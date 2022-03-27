import React, {useState} from 'react'
import {View, TextInput} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import {styles} from '../styles/TextInputStyles'

const CustomTextInput = props => {
  const {text, onChangeText, placeholder, iconType, iconName, passwordField} =
      props,
    {textInputContainer, placeholderIcon, passwordIcon} = styles

  const [visible, setVisible] = useState(false)

  const togglePassword = () => {
    setVisible(!visible)
  }

  return (
    <View style={textInputContainer}>
      {iconType === 'FontAwesome5' && (
        <FontAwesome5
          style={placeholderIcon}
          name={iconName}
          size={18}
          color="red"
        />
      )}
      {iconType === 'Feather' && (
        <Feather
          style={placeholderIcon}
          name={iconName}
          size={18}
          color="red"
        />
      )}
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={passwordField ? (visible ? false : true) : false}
        placeholderTextColor={'#888'}
      />
      {passwordField && (
        <AntDesign
          onPress={togglePassword}
          style={passwordIcon}
          name={visible ? 'eye' : 'eyeo'}
          size={18}
          color="red"
        />
      )}
    </View>
  )
}

export default CustomTextInput
