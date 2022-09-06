import React from 'react'

// styled-components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Login
} from "./SignUpStyles";

// components
import { SignUpInput } from '../../components/Input/InputStyles';
import { Button } from '../../components';

function SignUp() {
  return (
    <MainContainer>
      <WelcomeText>Sign Up</WelcomeText>
      <InputContainer>
        <SignUpInput type="text" placeholder="First Name" />
        <SignUpInput type="text" placeholder="Last Name" />
        <SignUpInput type="email" placeholder="Email" />
        <SignUpInput type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" name="signup" />
      </ButtonContainer>
      <Login>Have an account? <a href="login">login</a></Login>
    </MainContainer>
  )
}

export default SignUp