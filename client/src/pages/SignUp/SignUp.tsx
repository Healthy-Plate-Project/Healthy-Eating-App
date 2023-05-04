import React, { FormEvent, useState } from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Login,
} from "./SignUpStyles";
import { SignUpInput } from "../../components/Input/InputStyles";
import { LoginButtonStyles } from "../../components/Button/ButtonStyles";
import { useNavigate } from "react-router-dom";
import { apiCall, API } from "../../utils/serverCalls";
import { Header } from "../../components/Header/Header";
import { Modal } from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";

export function SignUp({ setCurrentUser }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const {
    isOpen,
    title,
    content,
    confirmButtonText,
    closeButtonText,
    onConfirm,
    openModal,
  } = useModal();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = {
        username,
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      };
      const { message, ...userData } = await apiCall(API.signup, body, true);
      if (message === "Successfully signed up") {
        setCurrentUser(userData);
        openModal(
          "All Set!",
          "You have successfulyl signed up for DragonFruit, continue to login",
          "Login",
          "",
          () => navigate("/login")
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        title={title}
        content={content}
        confirmButtonText={confirmButtonText}
        closeButtonText={closeButtonText}
        onConfirm={onConfirm}
      />
      {Header()}
      <form onSubmit={(e) => submit(e)}>
        <MainContainer>
          <WelcomeText>Sign Up</WelcomeText>
          <InputContainer>
            <SignUpInput
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
            />
            <SignUpInput
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <SignUpInput
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <SignUpInput
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
            <SignUpInput
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ButtonContainer>
            <LoginButtonStyles type="submit" content="Sign Up" name="signup">
              Sign Up
            </LoginButtonStyles>
          </ButtonContainer>
          <Login>
            Have an account? <a href="login">Login</a>
          </Login>
        </MainContainer>
      </form>
    </>
  );
}
