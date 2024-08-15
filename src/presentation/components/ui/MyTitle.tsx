import React from 'react'
import { View, Text } from 'react-native'
import { colors_them, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const MyTitle = ({ text, safe = false, white = false }: Props) => {

    const { top } = useSafeAreaInsets();
    return (
        <Text style={{
            ...globalStyles.title,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            color: white ? 'white' : colors_them.text
        }}>{text}</Text>
    )
}
