import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GamesCard, GamesCardProps } from '../../components/GamesCard';
import { Background } from '../../components/background';

export function Home() {

    const navigation = useNavigation()
    const [games, setGames] = useState<GamesCardProps[]>([])

    useEffect (() => {
        fetch('http://172.18.9.71:3333/games').then(response => response.json()).then(data => {
            setGames(data)

    })
    }, [])

    function handleOpenGame({id, title, bannerUrl}: GamesCardProps){
        navigation.navigate('game', {id, title, bannerUrl})
    }

    return (
        <Background>

        <SafeAreaView style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />

            <Heading
                title="Encontre seu duo"
                subtitle='Selecione o game que deseja jogar...'
            />

            <FlatList
                contentContainerStyle={styles.contentList}
                data={games}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GamesCard
                        onPress={() => handleOpenGame(item)}
                        data={item}
                    />

                )

                }
                showsHorizontalScrollIndicator={false}
                horizontal
            >
            </FlatList>
        </SafeAreaView>
        </Background>
    );
}