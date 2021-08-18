import React, {
  useCallback
} from 'react';
import {
  SafeAreaView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  Background,
  Header,
  Content,
  Section
} from './styles';
import { theme } from '../../global/styles/theme';
import backgroundImage from '../../assets/background.png'
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input'
import { Button } from '../../components/Button'

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const handleSignIn = useCallback(() => {

  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Background source={backgroundImage} resizeMode="cover">
        <Container>
          <Header>
            <Feather
              name='arrow-left'
              size={30}
              color={theme.colors.black}
              onPress={() => navigation.goBack()}
            />
          </Header>
          <Content>
            <Section>
              <Input labelText={"Email"} />
              <Input labelText={"Senha"} />
              <Button title={"Fazer login"} onPress={() => { }} />
            </Section>
          </Content>
        </Container>
      </Background>
    </SafeAreaView>
  );
};

export default SignIn;

