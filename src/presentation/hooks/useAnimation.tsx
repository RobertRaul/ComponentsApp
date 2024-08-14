import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toVal = 1, callback = () => { } }) => {

        // Animated.timing(animatedTop, {
        //     toValue: 0,
        //     duration: 700,
        //     useNativeDriver: true,
        //     easing: Easing.elastic(1)
        // }).start(() => {
        //     console.log('termino la bajada')
        // })

        Animated.timing(animatedOpacity, {
            toValue: toVal,
            duration: duration,
            useNativeDriver: true,
        }).start(() => {
            callback
        })
    }

    const fadeOut = ({ duration = 300, toVal = 0, callback = () => { } }) => {
        Animated.timing(animatedOpacity, {
            toValue: toVal,
            duration: duration,
            useNativeDriver: true,
        }).start(() => {
            callback
        })
    }


    const startMovingTop = ({ initialPos = 0, toVal = 0, duration = 300, easing = Easing.linear, callback = () => { } }) => {
        animatedTop.setValue(initialPos);

        Animated.timing(animatedTop, {
            toValue: toVal,
            duration: duration,
            useNativeDriver: true,
            easing: easing,
        }).start(callback)
    }

    return {
        //Properties
        animatedOpacity,
        animatedTop,

        //Methods
        fadeIn,
        fadeOut,
        startMovingTop
    }
}
