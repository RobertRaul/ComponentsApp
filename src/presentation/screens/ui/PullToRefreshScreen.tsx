import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { RefreshControl } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors_them, globalStyles } from '../../../config/theme/theme'

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const refresh = () => {
        setIsRefreshing(true)

        setTimeout(() => {
            setIsRefreshing(false)
        }, 1000);
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={refresh}
                    progressViewOffset={top}
                    colors={[colors_them.primary, 'red', 'orange', 'black']}
                />}
            style={[globalStyles.mainContainer,globalStyles.globalMargin]}

        >

            <MyTitle text='PullToRefreshScreen' safe />

        </ScrollView>
    )
}
