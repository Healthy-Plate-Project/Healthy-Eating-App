import React from 'react'

// styled components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  SignUp
} from "./LoginStyles";

// react icons

/*
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
*/

// components
import { LoginInput } from "../../components/Input/InputStyles";
import { AuthButton } from "../../components/Button/Button";
// import Icon from "../../components/Icon/Icon";

function Login() {
  /*
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #4285F4 5%, #DB4437 25%, #F4B400 75%, #0F9D58 100%)";
    */
  return (
    <MainContainer>
      <WelcomeText>Sign in</WelcomeText>
      <InputContainer>
        <LoginInput type="text" placeholder="Email" />
        <LoginInput type="password" placeholder="Password" />
      </InputContainer>
      <ButtonContainer>
        <AuthButton content="Login" />
      </ButtonContainer>
      {/* <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalDivider />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={GoogleBackground}>
          <BsGoogle />
        </Icon>
      </IconsContainer> */}
      <SignUp>Sign Up</SignUp>
    </MainContainer>
  )
}

export default Login