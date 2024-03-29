import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import { Game } from '../../screens/Game';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import { GameController} from 'phosphor-react-native'

import { styles } from './styles'

export interface DuoCardProps {
    hourEnd: string,
    hoursEnd: string,
    hoursStart: string,
    id:string,
    name: string,
    useVoiceChannel: boolean,
    weekDays: string[],
    yearsPlaying: number,
}

interface Props {
    data: DuoCardProps,
    onConnect: () => void
}

export function DuoCard({data, onConnect} : Props) {
  return (
    <View style={styles.container}>
        <DuoInfo label='Nome' value={data.name}/>

        <DuoInfo label='Tempo de jogo' value={`${data.yearsPlaying} anos`}/>

        <DuoInfo label='Disponibilidade' value={`${data.weekDays.length} dias • ${data.hoursStart}h - ${data.hoursEnd}h`}/>

        <DuoInfo label='Chamada de áudio?' value={data.useVoiceChannel ? "Sim" : "Não"} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}/>

        <TouchableOpacity style={styles.button} onPress={onConnect}>
         <GameController color={THEME.COLORS.TEXT} size={20}></GameController>
        <Text style={styles.buttonTitle}>
         Conectar
        </Text>
        </TouchableOpacity>
    </View>
  );
}