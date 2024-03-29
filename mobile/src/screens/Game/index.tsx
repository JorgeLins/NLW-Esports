import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useRoute, useNavigation } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons'

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png'
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

export function Game() {

const navigation = useNavigation()
const route = useRoute()
const game = route.params as GameParams;

function handleGoBack(){
  navigation.goBack();
}

const [duos, setDuos] = useState<DuoCardProps[]>([])

useEffect (() => {
  fetch(`http://172.18.9.71:3333/games/${game.id}/ads`).then(response => response.json()).then(data => {
    setDuos(data)

})
}, [])

  return (
    <Background>
        <SafeAreaView style={styles.container}>

          <View style={styles.header}>
              <TouchableOpacity onPress={handleGoBack}>
                <Entypo
                name='chevron-thin-left'
                color={THEME.COLORS.CAPTION_300}
                size={20}/>
              </TouchableOpacity>

              <Image
              style={styles.logo}
              source={logoImg}
              resizeMode="cover"
              />

              <View style={styles.rigth}/>
          </View>

          <Image
          style={styles.gameImg}
          source={{uri:game.bannerUrl}}
          />

          <Heading title={game.title} subtitle={'Conecte-se e comece a jogar!'}>
            
          </Heading>

          <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard data={item} onConnect={() => {console.log("oi")}}/>
          )}
          style={styles.containerList}
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
          showsHorizontalScrollIndicator={false}
          horizontal
          ListEmptyComponent={() => (
            <Text style={styles.EmptyText}> Não há anuncios publicados ainda.</Text>
          )}
          />

        
    </SafeAreaView>
    </Background>

  );
}