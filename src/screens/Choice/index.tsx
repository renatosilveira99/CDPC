import React from "react";
import { View, Text, ImageBackground } from 'react-native';

import backgroundImage from '../../assets/background.png'
import { Button } from "../../components/Button";

import { styles } from './styles';

export function Choice() {
  const { container, background } = styles;
  return (
    <View style={container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={background}>
        <Button title={"Acessar como leitor"} />
        <Button title={"Acessar como administrador"} />
        <Button title={"Cadastrar como administrador"} />
      </ImageBackground>
    </View>
  )
}
