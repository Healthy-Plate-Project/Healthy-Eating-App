import React, { FormEvent, useState } from "react";
// styled components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  // LoginWith,
} from "./LoginStyles";
import { LoginInput } from "../../components/Input/InputStyles";
// components
import { useNavigate } from "react-router-dom";
import { isEmail } from "../../utils/helpers";
import { apiCall, API } from "../../utils/serverCalls";

export function Login({ setCurrentUser }: any) {
  const [password, setPassword] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const navigate = useNavigate();
  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setCurrentUser(
        isEmail(usernameOrEmail)
          ? await apiCall(
              API.loginWithEmail,
              { email: usernameOrEmail, password },
              true
            )
          : await apiCall(
              API.loginWithUsername,
              { username: usernameOrEmail, password },
              true
            )
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form onSubmit={(e) => login(e)}>
      <MainContainer>
        <WelcomeText>Log In</WelcomeText>
        <InputContainer>
          <LoginInput
            type="text"
            placeholder="Username or Email"
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer type="submit">Login</ButtonContainer>
        <h4>
          Don't have an account?{" "}
          <a href="sign-up" className="sign-up">
            Sign Up
          </a>
        </h4>
      </MainContainer>
    </form>
  );
}
