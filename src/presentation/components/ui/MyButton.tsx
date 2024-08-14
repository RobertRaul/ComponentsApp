import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle, Pressable } from 'react-native'
import { colors_them, globalStyles } from '../../../config/theme/theme';

interface Props {
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const MyButton = ({ text = 'MyButton', style, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={
      ({ pressed }) => (
        [globalStyles.btnPrimary, {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: colors_them.primary
        }]
      )
    }>
      <Text style={[
        globalStyles.btnPrimaryText, {
          color: colors_them.buttonTextColor
        }
      ]}>Button</Text>
    </Pressable>
  )
}
