import React, { useState } from "react";

// styled components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  SignUp,
} from "./LoginStyles";
import { LoginInput } from "../../components/input/InputStyles";

// components
import { Navigate } from "react-router-dom";

function Login(props: any) {
  /*
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #4285F4 5%, #DB4437 25%, #F4B400 75%, #0F9D58 100%)";
    */

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: Event) => {
    e.preventDefault();

    fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        password,
        email,
      }),
    }).then((res) => {
      props.setCurrentUserEmail(email);
      setRedirect(true);
    });
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
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
        <SignUp>
          <button>Sign Up</button>
        </SignUp>
      </ButtonContainer>
    </MainContainer>
  );
}

export default Login;
