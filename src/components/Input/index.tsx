import React, { ReactChildren } from 'react';
import {
  Container, TextInput, LabelText
} from './styles';

interface InputProps{
  children?: ReactChildren;
  labelText?: string;
}

const Input: React.FC<InputProps> = ({children, labelText, ...rest}) => {

  return (
    <Container>
      {
        labelText && <LabelText>{labelText}</LabelText>
      }
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        autoCorrect={false}
        maxLength={50}
        blurOnSubmit={true}
        {...rest}
      />
      {children}
    </Container>
  );
};

export default Input;
