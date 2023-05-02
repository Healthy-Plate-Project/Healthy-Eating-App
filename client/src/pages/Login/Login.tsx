import React, { FormEvent, useState } from "react";
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
} from "./LoginStyles";
import { LoginInput } from "../../components/Input/InputStyles";
import { useNavigate } from "react-router-dom";
import { isEmail } from "../../utils/helpers";
import { apiCall, API } from "../../utils/serverCalls";
import { Header } from "../../components/Header/Header";

export function Login({ setCurrentUser }: any) {
  const [password, setPassword] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function login() {
    try {
      let response;
      isEmail(usernameOrEmail)
        ? (response = await apiCall(
            API.loginWithEmail,
            { email: usernameOrEmail, password },
            true
          ))
        : (response = await apiCall(
            API.loginWithUsername,
            { username: usernameOrEmail, password },
            true
          ));
      if (response.username) {
        setCurrentUser(response);
        navigate("/profile");
      } else {
        setError(true);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLDivElement>) {
    event.key === "Enter" ? login() : null;
  }

  return (
    <>
      {Header()}
      <MainContainer>
        <WelcomeText>Log In</WelcomeText>
        <InputContainer>
          <LoginInput
            type="text"
            placeholder="Username or Email"
            onChange={(e) => setUsernameOrEmail(e.target.value.toLowerCase())}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <LoginInput
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </InputContainer>
        {error ? (
          <h4>
            Invalid username or password
            <br></br>
            Don't have an account? Please{" "}
            <a href="sign-up" className="sign-up">
              Sign Up
            </a>
          </h4>
        ) : null}
        <ButtonContainer type="button" onClick={() => login()}>
          Login
        </ButtonContainer>
        {!error ? (
          <h4>
            Don't have an account?{" "}
            <a href="sign-up" className="sign-up">
              Sign Up
            </a>
          </h4>
        ) : null}
      </MainContainer>
    </>
  );
}
