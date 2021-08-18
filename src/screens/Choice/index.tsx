import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background.png'
import { Button } from "../../components/Button";

import { styles } from './styles';

export function Choice() {
  const { container, background } = styles;

  const navigation = useNavigation();

  function handleNavigateToHome() {
    navigation.navigate('Home')
  }

  function handleNavigateToLogin() {
    navigation.navigate('Login')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View style={container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={background}>
        <Button title={"Acessar como leitor"} onPress={handleNavigateToHome}/>
        <Button title={"Acessar como administrador"} onPress={handleNavigateToLogin}/>
        <Button title={"Cadastrar como administrador"} />
      </ImageBackground>
    </View>
  )
}
