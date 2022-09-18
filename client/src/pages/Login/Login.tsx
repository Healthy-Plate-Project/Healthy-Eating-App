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
    <form>
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <InputContainer>
          <LoginInput type="email" name="login-email-input" placeholder="Email" />
          <LoginInput type="password" name="login-password-input" placeholder="Password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" content="Login" name="login" />
        </ButtonContainer>
        <SignUp>Create an Account? <a href="signup">Sign Up</a> </SignUp>
      </MainContainer>
    </form>
  )
}

export default Login