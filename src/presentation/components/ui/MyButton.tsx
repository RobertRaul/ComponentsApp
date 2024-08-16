import React, { useContext } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle, Pressable } from 'react-native'
import { colors_them, globalStyles } from '../../../config/theme/theme';
import { MyThemeContext } from '../../context/ThemeContext';

interface Props {
  text?: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const MyButton = ({ text = 'MyButton', style, onPress }: Props) => {
  
  const {colors} = useContext(MyThemeContext);
  return (
    <Pressable onPress={onPress} style={
      ({ pressed }) => (
        [globalStyles.btnPrimary,
          style,
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: colors.primary,
          marginTop: 10,
        }]
      )

    }>
      <Text style={[
        globalStyles.btnPrimaryText, {
          color: colors.buttonTextColor
        }
      ]}>{text}</Text>
    </Pressable>
  )
}
