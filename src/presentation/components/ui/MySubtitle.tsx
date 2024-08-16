import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { globalStyles } from '../../../config/theme/theme';
import { MyThemeContext } from '../../context/ThemeContext';

interface Props {
    text: string;
    safe?: boolean;
    backgroundColor: string;
}

export const MySubtitle = ({ text, safe, backgroundColor }: Props) => {
    const { top } = useSafeAreaInsets();
    
    return (
        <Text style={{
            ...globalStyles.subTitle,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor
        }}>
            {text}
        </Text>
    )
}
