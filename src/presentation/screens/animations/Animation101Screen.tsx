import React, { useContext, useRef } from 'react'
import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'

import { useAnimation } from '../../hooks/useAnimation'
import { MyThemeContext } from '../../context/ThemeContext'
import { CustomView } from '../../components/ui/CustomView'
import { MyButton } from '../../components/ui/MyButton'

export const Animation101Screen = () => {
    const { colors } = useContext(MyThemeContext);
    const { animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTop } = useAnimation();

    return (
        <CustomView style={styles.container}>
            <Text>Animation101Screen</Text>
            <Animated.View style={[styles.purpleBox, {
                backgroundColor: colors.primary,
            }, {
                opacity: animatedOpacity,
                transform: [{
                    translateY: animatedTop
                }]
            }]} />

            <MyButton text='Fade In' style={{ marginBottom: 50, backgroundColor: 'pink' }}
                onPress={() => {
                    fadeIn({});
                    startMovingTop({ initialPos: -100, easing: Easing.elastic(1), duration: 1000 })
                }
                } />

            <MyButton text='Fade Out' onPress={() => fadeOut({})} />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    purpleBox: {
        width: 150,
        height: 150
    }
})