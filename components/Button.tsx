import { View, Text, TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import COLORS from '../constants/colors'


const Button = (props) => {

      const filledBgColor    = props.color || COLORS.primary
      const outlinedColor    = COLORS.white
      const bgColor          = props.filled ? filledBgColor : outlinedColor
      const textColor        = props.filled ? COLORS.white  : COLORS.primary

      return (
            <TouchableOpacity 
                  style={tw.style(
                        'pb-4 py-3 rounded-xl items-center justify-center ', 
                        {borderColor : COLORS.primary , borderWidth: 2, backgroundColor : bgColor , ...props.style }
                  )}
                  onPress={props.onPress} >

                  <Text style={tw.style('text-2xl', {color : textColor})}>{ props.title }</Text>

            </TouchableOpacity>
      )
}


const styles = StyleSheet.create({
      button : {
            paddingBottom : 16,
            paddingVertical : 10,
            borderColor : COLORS.primary,
            borderWidth : 2,
            borderRadius : 12,
            alignItems: "center",
            justifyContent: "center"
      }
})

export default Button