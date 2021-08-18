import React from 'react';
import {
  Text,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';

export type HeaderProps = {
  isAdmin: boolean
  title: string;
}

export function Header({ isAdmin, title }: HeaderProps) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Feather
          name='menu'
          size={40}
          color={theme.colors.highlight}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        {title}
      </Text>

      <Feather
        name='user'
        size={40}
        color={isAdmin ? theme.colors.highlight : 'transparent'}
      />
    </View>
  )
}
