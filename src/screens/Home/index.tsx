
import React from "react";
import { View, ImageBackground, FlatList, Text, TouchableOpacity } from 'react-native';
import backgroundImage from '../../assets/background.png';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { Card, CardProps } from "../../components/Card";
import { theme } from "../../global/styles/theme";
import { Header } from "../../components/Header";

export function Home() {
  const { container, background } = styles;

  const data: CardProps[] = [
    {
    id: '1',
    title: 'Fórum de Cultura do Instituto Federal do Sul de MG tem apresentações online até sábado',
    author: 'Renato Silveira',
    date: '23/12/2021',
    uri: 'https://s2.glbimg.com/JyzLxjyrMreBavvK0BpiK80m-60=/0x0:900x600/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/L/lenBIATnGGMq7ui57c6Q/07.jpg',
    type: 'news'
  },
    {
    id: '2',
    title: 'Projeto de energia solar IFSULDEMINAS - 2021',
    author: 'Renato Silveira',
    date: '23/12/2021',
    uri: 'https://portal.ifsuldeminas.edu.br/images/materias2017/junho/21/Logo_IFSolares.jpeg',
    type: 'project'
  },
    {
    id: '3',
    title: 'IF Sul de Minas tem vagas abertas para cursos gratuitos voltados à área de turismo',
    author: 'Renato Silveira',
    date: '23/12/2021',
    uri: 'https://s2.glbimg.com/JyzLxjyrMreBavvK0BpiK80m-60=/0x0:900x600/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/L/lenBIATnGGMq7ui57c6Q/07.jpg',
    type: 'news'
  }
]

  return (
    <View style={container}>
    <ImageBackground source={backgroundImage} resizeMode="cover" style={background}>

    <Header isAdmin={false}/>

    <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
              id={item.id}
              title={item.title}
              author={item.author}
              date={item.date}
              uri={item.uri}
              type={item.type}
          />
        )}
        contentContainerStyle={{ paddingBottom: 60}}
        style={styles.cardList}
        showsVerticalScrollIndicator={false}
      />

    </ImageBackground>
  </View>
  )
}
