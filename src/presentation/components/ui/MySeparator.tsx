import React, { useContext } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { MyThemeContext } from '../../context/ThemeContext';

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const MySeparator = ({ style }: Props) => {

    const {colors} = useContext(MyThemeContext);
    return (
        <View style={{ backgroundColor: colors.cardBackground }}>
            <View style={[
                {
                    alignSelf: 'center',
                    width: '80%',
                    height: 1,
                    backgroundColor: colors.text,
                    opacity: 0.5,
                    marginVertical: 8
                }
            ]}>
            </View>
        </View>
    )
}

