import React, { PropsWithChildren, useContext } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { MyThemeContext } from '../../context/ThemeContext';

interface Prop extends PropsWithChildren {
    style?: StyleProp<ViewStyle>;
}

export const MyCard = ({ style, children }: Prop) => {


    const {colors} = useContext(MyThemeContext);

    return (
        <View style={[
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10,
                
            },
            style
        ]}>
            {children}
        </View>
    )
}
