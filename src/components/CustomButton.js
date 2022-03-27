import React from 'react'
import {View, Text} from 'react-native'

const CustomButton = props => {
  const {name} = props

  return (
    <View
      style={{
        width: 200,
        height: 45,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', letterSpacing: 1, fontSize: 18}}>
        {name}
      </Text>
    </View>
  )
}

export default CustomButton
