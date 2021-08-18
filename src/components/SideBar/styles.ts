import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 15px 25px;
`;

export const Line = styled.View`
  background-color: #000;
  height: 1px;
  margin: 5px 0;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #000;
`;