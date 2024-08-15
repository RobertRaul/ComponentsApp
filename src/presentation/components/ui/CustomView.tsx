import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'

interface Properties {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Properties) => {
    return (
        <View style={[
            globalStyles.mainContainer,
            style,
            margin ? globalStyles.globalMargin : null,
        ]}>
            {children}
        </View>
    )
}
