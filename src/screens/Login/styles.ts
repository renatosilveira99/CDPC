import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const statusBarHeight = getStatusBarHeight();

export const Container = styled.View`
  width: 100%;
  flex: 1;
  margin-top: ${`${statusBarHeight}`};
`;

export const Background = styled.ImageBackground`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Header = styled.View`
  width: 100%;
  padding: 10px 15px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Section = styled.View`
  width: 100%;
  height: 100%;
  max-height: 400px;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #fff;
`;