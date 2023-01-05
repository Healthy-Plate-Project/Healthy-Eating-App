import React, { FormEvent, useState } from "react";

// styled components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
} from "./LoginStyles";
import { LoginInput } from "../../components/Input/InputStyles";

// components
import { useNavigate } from "react-router-dom";
import { apiServer } from "../../utils/helpers";
import { UserData } from "../../App";

export function Login({ setCurrentUser }: any) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiServer()}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          password,
          email,
        }),
      });
      const content: UserData = await response.json();
      setCurrentUser(content);
      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={(e) => login(e)}>
      <MainContainer>
        <WelcomeText>Sign in</WelcomeText>
        <InputContainer>
          <LoginInput
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <LoginWith>
            <button type="submit">Login</button>
          </LoginWith>
        </ButtonContainer>
        <h4>
          Don't have an account? <a href="sign-up">Sign Up</a>
        </h4>
      </MainContainer>
    </form>
  );
}
