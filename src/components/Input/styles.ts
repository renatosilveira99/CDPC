import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  border-bottom-color: #111;
  border-bottom-width: 1px;
`;

export const TextInput = styled.TextInput`
  color: #000;
  padding: 5px;
  font-size: 22px;
  max-height: 100px;
  width: 100%;
`;


export const LabelText = styled.Text`
  font-size: 18px;
  color: #111;
  text-transform: uppercase;
`;