import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Button,
  Line,
  ButtonText,
} from './styles';
import { theme } from '../../global/styles/theme';

interface SidebarProps {
}

const SideBar: React.FC<SidebarProps> = ({ ...props }) => {
  const navigation = useNavigation();

  async function handleSignOut() {

  }

  return (
    <DrawerContentScrollView style={styles.containerSide} {...props}>
      <Container>
        <Button onPress={() => navigation.navigate('teste')}>
          <ButtonText>CONFIGURAÇÕES</ButtonText>
          <Feather
            name='user'
            size={40}
            color={theme.colors.highlight}
          />
        </Button>
        <Line />
        <Button onPress={() => handleSignOut()}>
          <ButtonText>SAIR DA CONTA</ButtonText>
          <Feather
            name='user'
            size={40}
            color={theme.colors.highlight}
          />
        </Button>
        <Line />
      </Container>
    </DrawerContentScrollView>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  containerSide: {
    padding: 0,
    margin: 0,
    display: 'flex',
    flex: 1,
  },
});