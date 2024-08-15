import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { MyTitle } from '../../components/ui/MyTitle'
import { FlatList } from 'react-native-gesture-handler'
import { colors_them } from '../../../config/theme/theme'
import { MyFadeInImage } from '../../components/ui/MyFadeInImage'

export const InfiniteScrollScreen = () => {

    const [number, setNumber] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        //TODO: añaadir bumero a nuestro arreglo        
        const newArray = Array.from({ length: 5 },
            (_, i) => number.length + i)



        setTimeout(() => {
            setNumber([...number, ...newArray])
        }, 3000)



    }

    return (
        <View style={{ backgroundColor: 'black' }}>

            <FlatList data={number}
                renderItem={({ item }) =>
                    <ListItemText number={item} />
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.7}
                keyExtractor={(item) => item.toString()}


                ListFooterComponent={() => (<View>
                    <ActivityIndicator size={40} color={colors_them.primary} />
                </View>)}
            />
        </View>
    );
};

interface ListItemsProps {
    number: number;
}

const ListItemText = ({ number }: ListItemsProps) => {
    return (
        <MyFadeInImage uri={`https://picsum.photos/id/${number}/200/300`} styl={{ height: 400, width: '100%' }}
        />
        // <Image source={{ uri: `https://picsum.photos/id/${number}/200/300` }}
        //     style={{ height: 400, width: '100%' }}
        // />
    )
}
