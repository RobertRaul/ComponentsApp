import React from 'react'
import { View, Text, StyleSheet, SectionList, useWindowDimensions } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { MyCard } from '../../components/ui/MyCard'
import { houses } from './data'
import { MySubtitle } from '../../components/ui/MySubtitle'
import { colors_them } from '../../../config/theme/theme'
import { MySeparator } from '../../components/ui/MySeparator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'




export const CustomSectionListScreen = () => {

    const { height, width } = useWindowDimensions();
    const { top } = useSafeAreaInsets();
    return (
        <CustomView margin>
            <MyTitle text='Lista de Personajes' safe />
            <MyCard>
                <SectionList
                    sections={houses}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <Text style={{ marginVertical: 2 }}>{item}</Text>}
                    showsVerticalScrollIndicator={false}
                    renderSectionHeader={({ section }) => <MySubtitle text={section.title} backgroundColor={colors_them.cardBackground} />}
                    stickySectionHeadersEnabled

                    SectionSeparatorComponent={MySeparator}

                    ListHeaderComponent={() => <MyTitle text='Personajes' />}
                    ListFooterComponent={() => <MyTitle text={`Lista de ${houses.length}`} />}
                    style={{
                        height: height-top-100
                    }}
                ></SectionList>
            </MyCard>
        </CustomView>
    )
}
