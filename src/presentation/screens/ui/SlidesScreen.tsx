import React, { useContext, useRef, useState } from 'react'
import { View, Text, StyleSheet, ImageSourcePropType, useWindowDimensions, Image, Button, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { globalStyles } from '../../../config/theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { MyButton } from '../../components/ui/MyButton';
import { useNavigation } from '@react-navigation/native';
import { MyThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {

    const { colors } = useContext(MyThemeContext);
    const navigate = useNavigation();

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;

        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    }

    const flatListRef = useRef<FlatList>(null);

    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;
        flatListRef.current.scrollToIndex({ index: index, animated: true })
    }

    return (
        <CustomView style={{ backgroundColor: colors.background, flex: 1 }}>
            <FlatList data={items} keyExtractor={(item) => item.title}
                renderItem={({ item }) => <SlideItem item={item} />}
                horizontal
                pagingEnabled
                decelerationRate={'fast'}
                //onScroll={(event) => onScroll(event)}
                onScroll={onScroll}
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}

                scrollEnabled={false}
            />
            {
                currentSlideIndex === items.length - 1 ?
                    (<MyButton text='Finalizar' style={{
                        position: 'absolute', bottom: 60, right: 30
                    }} onPress={() => navigate.goBack()} />)
                    :
                    (<MyButton text='Siguiente' style={{
                        position: 'absolute', bottom: 60, right: 30
                    }}
                        onPress={() => scrollToSlide(currentSlideIndex + 1)}
                    />
                    )
            }
        </CustomView>
    )
}

interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { colors } = useContext(MyThemeContext);
    const { width, height } = useWindowDimensions();
    const { title, desc, img } = item;

    return (
        <CustomView style={{
            flex: 1, backgroundColor: 'white',
            borderRadius: 5, padding: 30,
            justifyContent: 'center', width: width
        }}>

            <Image source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7, resizeMode: 'center',
                    alignSelf: 'center'
                }} />

            <Text style={[
                globalStyles.title,
                { color: colors.primary }
            ]}>{title}</Text>


            <Text style={[
                {
                    color: colors.text,
                    marginTop: 20
                }
            ]}>{desc}</Text>
        </CustomView>
    )
}