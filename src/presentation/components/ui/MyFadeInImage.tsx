import React, { useState } from 'react'
import { View, Text, StyleSheet, StyleProp, ImageStyle, Animated, ActivityIndicator } from 'react-native'
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    styl?: StyleProp<ImageStyle>
}

export const MyFadeInImage = ({ uri, styl }: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [loading, setLoading] = useState(true)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator
                style={{ position: 'absolute' }}
                color={'grey'}
                size={30}
            />
            <Animated.Image source={{ uri }} style={[styl, {
                opacity: animatedOpacity
            }]}
                onLoadEnd={() => {
                    fadeIn({ duration: 1000 });
                    setLoading(false)
                }}

            />
        </View>
    )
}
