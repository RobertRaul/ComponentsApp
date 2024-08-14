import React from 'react'
import { View, Text, StyleSheet, Switch, Platform } from 'react-native'
import { colors_them } from '../../../config/theme/theme'

interface Props {
    isOn: boolean;
    text: string;
    onChange: (value: boolean) => void;
}


export const MySwitch = ({ isOn, text, onChange }: Props) => {
    return (
        <View style={styles.switchRow}>
            {text && (<Text style={{ color: colors_them.text }}>{text} </Text>)}

            <Switch
                //trackColor={{ false: '#767577', true: '#81b0ff' }}
                //trackColor={Platform.OS === 'android' ? colors_them.primary : ''}
                thumbColor={Platform.OS === 'android' ? colors_them.primary : ''}
                //thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}

                ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={isOn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
})
