import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { colors_them } from '../../../config/theme/theme';

interface Props {
    style?: StyleProp<ViewStyle>;
}

export const MySeparator = ({ style }: Props) => {
    return (
        <View style={{ backgroundColor: colors_them.cardBackground }}>
            <View style={[
                {
                    alignSelf: 'center',
                    width: '80%',
                    height: 1,
                    backgroundColor: colors_them.text,
                    opacity: 0.5,
                    marginVertical: 8
                }
            ]}>
            </View>
        </View>
    )
}

