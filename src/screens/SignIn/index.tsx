
import React from "react";
import backgroundSignIn from '../../assets/backgroundSignIn.png'
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground } from 'react-native';

import { Button } from "../../components/Button";

import { styles } from './styles';

export function SignIn() {
  const { container, background, title, subtitle } = styles;

  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Choice')
  }

  return (
    <View style={container}>
      <ImageBackground source={backgroundSignIn} resizeMode="cover" style={background}>
        <Text style={title}>Centro de divulgação e popularização da Ciência</Text>

        <Text style={subtitle}>As notícias e projetos mais recentes da comunidade na palma da sua mão!</Text>

        <Button title={"Acessar"} onPress={handleSignIn} />

        <View style={{ marginBottom: 94 }} />
      </ImageBackground>
    </View>
  )
}
