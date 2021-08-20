import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native';

import backgroundImage from '../../assets/background.png'
import { Button } from "../../components/Button";

import { styles } from './styles';

export function Details() {
  const { container, background, info, titleStyle, subtitleStyle, authorStyle, dateStyle, campusStyle, descriptionStyle, infoDescription } = styles;

const data = {
    id: '1',
    title: 'Fórum de Cultura do Instituto Federal do Sul de MG tem apresentações online até sábado',
    subtitle: 'Apresentações serão feitas de forma remota devido a pandemia',
    author: 'Renato Silveira',
    date: '23/12/2021',
    uri: 'https://s2.glbimg.com/JyzLxjyrMreBavvK0BpiK80m-60=/0x0:900x600/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/g/L/lenBIATnGGMq7ui57c6Q/07.jpg',
    type: 'news',
    extraLink: "https://g1.globo.com/mg/sul-de-minas/noticia/2021/06/23/forum-de-cultura-do-instituto-federal-do-sul-de-mg-tem-apresentacoes-online-ate-sabado.ghtml",
    campus: 'Poços de Caldas',
    description: 'Acontece até o dia 26 de junho o I Fórum de Cultura do Instituto Federal do Sul de Minas, campus de Poços de Caldas. O evento é 100% online, gratuito, livre e aberto a todos os interessados.\n O Fórum contará com convidados de todo o Brasil, trazendo suas visões de mundo e compartilhando saberes em oficinas, mesas, debates e mini-documentários.\n O evento é uma iniciativa da Coordenação de Cultura do IFSULDEMINAS - Campus Poços de Caldas, por meio do projeto Diálogo de Saberes, para aprofundar o debate sobre Cultura e Arte com pessoas interessadas, sobretudo, na valorização da diversidade cultural e seus saberes.'
  }

  const {title, subtitle, author, date, uri, campus, description} = data

  return (
    <ScrollView style={container}>

      <ImageBackground source={backgroundImage} resizeMode="cover" style={background}>
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={styles.image} resizeMode='cover'/>
        </View>

        <View style={info}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={subtitleStyle}>{subtitle}</Text>
          <Text style={authorStyle}>Autor: {author}</Text>
          <Text style={dateStyle}>{date}</Text>
          <Text style={campusStyle}>{campus}</Text>
        </View>

        <View style={infoDescription}>
          <Text style={descriptionStyle}>{description}</Text>
        </View>

      </ImageBackground>
    </ScrollView>
  )
}
