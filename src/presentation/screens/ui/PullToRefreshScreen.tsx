import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { RefreshControl } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { globalStyles } from '../../../config/theme/theme'
import { MyThemeContext } from '../../context/ThemeContext'

export const PullToRefreshScreen = () => {
    const { colors } = useContext(MyThemeContext);
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
                    colors={[colors.primary, 'red', 'orange', 'black']}
                    progressBackgroundColor={colors.cardBackground}
                    tintColor={colors.primary}
                />}
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}

        >

            <MyTitle text='PullToRefreshScreen' safe />

        </ScrollView>
    )
}
