import React, { ReactNode, useContext } from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { globalStyles } from '../../../config/theme/theme'
import { MyThemeContext } from '../../context/ThemeContext';

interface Properties {
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Properties) => {
    
    const {colors} = useContext(MyThemeContext);

    return (
        <View style={[
            globalStyles.mainContainer,
            style,
            margin ? globalStyles.globalMargin : null,
            {backgroundColor:colors.background}
        ]}>
            {children}
        </View>
    )
}
