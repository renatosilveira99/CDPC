import React from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { styles } from './styles'

export type CardProps = {
  id: string;
  title: string;
  author: string;
  date: string;
  uri: string;
  type: string;
}

export function Card({uri, title, author, date, type}: CardProps)  {
  return (
    <TouchableOpacity activeOpacity={0.7} style={type === 'news' ? styles.newsContainer : styles.projectContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} resizeMode='cover'/>
      </View>
      <View style={styles.content}>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.contentData}>
          <Text style={styles.subtitle}>Autor: {author}</Text>
          <Text style={styles.subtitle}>Data: {date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
