import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign } from '@expo/vector-icons'
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

  return (
    <DrawerContentScrollView style={styles.containerSide} {...props}>
      <Container>
        <Button onPress={() => navigation.navigate('CreateNews')}>
          <ButtonText>INFORMAR NOTÍCIA</ButtonText>
          <Feather
            name='globe'
            size={25}
            color={theme.colors.black}
          />
        </Button>
        <Line />
        <Button onPress={() => navigation.navigate('CreateProject')}>
          <ButtonText>INFORMAR PROJETO</ButtonText>
          <Feather
            name='codesandbox'
            size={25}
            color={theme.colors.black}
          />
        </Button>
        <Line />
        <Button >
          <ButtonText>SOLICITAÇÕES</ButtonText>
          <Feather
            name='check-circle'
            size={25}
            color={theme.colors.black}
          />
        </Button>
        <Line />
        <Button onPress={() => navigation.navigate('SignIn')}>
          <ButtonText>SAIR DA CONTA</ButtonText>
          <AntDesign
            name="logout"
            size={24}
            color="black"
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
