import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native'
import React, { PropsWithChildren, useContext } from 'react'
import { View, Text } from 'react-native'
import { MyStackNavigator } from './presentation/navigator/MyStackNavigator'
import { MyThemeContext, MyThemeProvider } from './presentation/context/ThemeContext'


export const IndexComponent = () => {
    return (
        <MyThemeProvider>
            <MyStackNavigator />
        </MyThemeProvider>
    )
}
