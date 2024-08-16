import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { globalStyles } from '../../../config/theme/theme'
import { MyButton } from '../../components/ui/MyButton'
import prompt from 'react-native-prompt-android';
import { myShowPrompt } from '../../../config/theme/adapters/prompt.adapter'
import { MyThemeContext } from '../../context/ThemeContext'

export const AlertScreen = () => {

    const { isDark } = useContext(MyThemeContext);
    const createTwoButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            userInterfaceStyle: isDark ? 'dark' : 'light'
        }
        );

    const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ], {
            userInterfaceStyle: isDark ? 'dark' : 'light'
        });

    const showPrompt = () => {
        Alert.prompt(
            'Cual es tu correo', 'Ingresa tu correo',
            (valor: string) => console.log(valor),
            'plain-text',
            'Soy el valor default',
            'number-pad'
        )
    }

    //react-native-prompt-android
    //npm i react-native-prompt-android
    const MyPrompt = () => {

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'email-address',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    const myPropertyPromt = () => {
        myShowPrompt({
            title: 'Title',
            subTitle: 'Subtitlo',
            buttons: [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive' },
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'default' },
            ],
            promptType: 'plain-text',
            placeHolder: 'PlaceHolder'
        })
    }




    return (
        <CustomView style={globalStyles.globalMargin}>
            <MyTitle text='Alo' safe />
            <MyButton text="Alerta 2 botones" onPress={() => createTwoButtonAlert()} />
            <MyButton text="Alerta 3 botones" onPress={() => createThreeButtonAlert()} />
            <MyButton text="Prompt - Input" onPress={() => showPrompt()} />
            <MyButton text="Prompt - Android" onPress={() => MyPrompt()} />
            <MyButton text="myPropertyPromt" onPress={() => myPropertyPromt()} />
        </CustomView>
    )
}
