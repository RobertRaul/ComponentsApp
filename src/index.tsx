import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { MyStackNavigator } from './presentation/navigator/MyStackNavigator'

export const IndexComponent = () => {
    return (
        <NavigationContainer>
            <MyStackNavigator />
        </NavigationContainer>
    )
}
