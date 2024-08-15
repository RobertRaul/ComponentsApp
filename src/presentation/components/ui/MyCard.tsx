import React, { PropsWithChildren } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { colors_them } from '../../../config/theme/theme';

interface Prop extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const MyCard = ({ style, children }: Prop) => {
    return (
        <View style={[
            {
                backgroundColor: colors_them.buttonTextColor,
                borderRadius: 10,
                padding: 10,
                
            },
            style
        ]}>
            {children}
        </View>
    )
}
