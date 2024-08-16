import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { MyButton } from '../../components/ui/MyButton'
import { MyThemeContext } from '../../context/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setTheme, currentTheme } = useContext(MyThemeContext)

    return (
        <CustomView margin>
            <MyTitle text={`Cambiar tema: ${currentTheme}`} safe />
            <MyButton text='Light' onPress={() => setTheme('light')} />
            <MyButton text='Dark' onPress={() => setTheme('dark')} />
        </CustomView>
    )
}
