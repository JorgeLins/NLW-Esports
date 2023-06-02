import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter'; 

import { Background } from './src/components/background';
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black
  })
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor='transparent'
        translucent
      />
      {fontsLoad ? <Routes/> : <Loading/>}
    </Background>
  );
}



