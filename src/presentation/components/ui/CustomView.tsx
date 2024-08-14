import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'

interface Properties {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

export const CustomView = ({ style, children }: Properties) => {
    return (
        <View style={[
            globalStyles.mainContainer,
            style
        ]}>
            {children}
        </View>
    )
}
