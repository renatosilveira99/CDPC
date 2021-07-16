import React from 'react';
import {
  Text,
  View,
} from 'react-native'
import {Feather} from '@expo/vector-icons'

import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export type HeaderProps = {
  isAdmin: boolean
}

export function Header({ isAdmin }: HeaderProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Feather
        name='menu'
        size={40}
        color={theme.colors.highlight}
      />
      </TouchableOpacity>

      <Text style={styles.title}>
        Principais notícias e projetos
      </Text>

      <Feather
        name='user'
        size={40}
        color={isAdmin ? theme.colors.highlight : 'transparent'}
      />
    </View>
  )
}
