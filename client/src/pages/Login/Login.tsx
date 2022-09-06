import React from 'react'

// styled components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  SignUp
} from "./LoginStyles";
import { LoginInput } from "../../components/Input/InputStyles";

// components
import { Button } from '../../components';

function Login() {
  return (
    <MainContainer>
      <WelcomeText>Login</WelcomeText>
      <InputContainer>
        <LoginInput type="email" placeholder="Email" />
        <LoginInput type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <Button content="Login" name="login" />
      </ButtonContainer>
      <SignUp>Create an Account? <a href="signup">Sign Up</a> </SignUp>
    </MainContainer>
  )
}

export default Login