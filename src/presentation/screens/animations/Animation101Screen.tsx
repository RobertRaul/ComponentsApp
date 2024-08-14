import React, { useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import { colors_them } from '../../../config/theme/theme'
import { useAnimation } from '../../hooks/useAnimation'

export const Animation101Screen = () => {

    const { animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTop } = useAnimation();

    return (
        <View style={styles.container}>
            <Text>Animation101Screen</Text>
            <Animated.View style={[styles.purpleBox, {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]} />

            <Pressable style={{ marginBottom: 50, backgroundColor: 'pink' }}
                onPress={() => 
                {
                    fadeIn({});
                    startMovingTop({initialPos:-100,easing:Easing.elastic(1),duration:1000})
                }
                }><Text>FadeIn</Text></Pressable>

            <Pressable onPress={() => fadeOut({})}><Text>FadeOut</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    purpleBox: {
        backgroundColor: colors_them.primary,
        width: 150,
        height: 150
    }
})