
import React from "react";
import backgroundSignIn from '../../assets/backgroundSignIn.png'
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground } from 'react-native';

import { Button } from "../../components/Button";

import { styles } from './styles';

export function Home() {
  const { container } = styles;

  const navigation = useNavigation()

  // function handleSignIn() {
  //   navigation.navigate('Choice')
  // }

  return (
    <View style={container}>
    </View>
  )
}
