import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { globalStyles } from '../../../config/theme/theme'
import { MyTitle } from '../../components/ui/MyTitle'
import { MyCard } from '../../components/ui/MyCard'
import { MyThemeContext } from '../../context/ThemeContext'

export const TextInputScreen = () => {
    const { colors } = useContext(MyThemeContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        direccion: '',
        numero: '',
    })

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView>
                <CustomView margin>
                    <MyTitle text='Inputs' safe></MyTitle>
                    <MyCard>
                        <TextInput style={[globalStyles.myInput,
                        {
                            color: colors.text,
                            borderColor: colors.text,
                            borderBlockColor: colors.text
                        }
                        ]}
                            placeholder='name'
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={value => setForm({ ...form, name: value })}

                        />

                        <TextInput style={[globalStyles.myInput, {
                            color: colors.text,
                            borderColor: colors.text,
                            borderBlockColor: colors.text
                        }]}
                            placeholder='email'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='email-address'
                            onChangeText={value => setForm({ ...form, email: value })}
                        />

                        <TextInput style={[globalStyles.myInput, {
                            color: colors.text,
                            borderColor: colors.text,
                            borderBlockColor: colors.text
                        }]}
                            placeholder='direccion'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='default'
                            onChangeText={value => setForm({ ...form, direccion: value })}
                        />

                        <TextInput style={[globalStyles.myInput, {
                            color: colors.text,
                            borderColor: colors.text,
                            borderBlockColor: colors.text
                        }]}
                            placeholder='numero'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='number-pad'
                            onChangeText={value => setForm({ ...form, numero: value })}
                        />

                    </MyCard>
                    <View style={{ height: 10 }} />
                    <MyCard>

                        <Text style={{
                            color:colors.text
                        }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                        <Text>{JSON.stringify(form, null, 2)}</Text>
                    </MyCard>
                    <View style={{ height: 10 }} />
                    <MyCard>
                        <TextInput style={globalStyles.myInput}
                            placeholder='numero'
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType='number-pad'
                            onChangeText={value => setForm({ ...form, numero: value })}
                        />
                    </MyCard>
                </CustomView>
                <View style={{ height: 20 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
