import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Platform } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { MyButton } from '../../components/ui/MyButton'

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <CustomView margin>
            <MyTitle text='Modal' safe />

            <MyButton text='Abrir Modal' onPress={() => setIsVisible(true)} />

            <Modal visible={isVisible}
                animationType='fade'>
                <View style={{ flex: 1, backgroundColor: 'grey' }}>
                    <View style={{ paddingHorizontal: 20 }}>
                        <MyTitle text='MyModal s' safe />
                    </View>
                    <View style={{ flex: 1 }} />
                    <MyButton text='Cerrar Modal' onPress={() => setIsVisible(false)}
                        style={{
                            marginBottom: Platform.OS === 'android' ? 40 : 50,
                            marginHorizontal: 50,
                            borderRadius: 5
                        }} />

                </View>
            </Modal>
        </CustomView >
    )
}
