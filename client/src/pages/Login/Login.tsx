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

    <form>
      <MainContainer>
        <WelcomeText>Login</WelcomeText>
        <InputContainer>
          <LoginInput type="email" name="login-email-input" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <LoginInput type="password" name="login-password-input" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </InputContainer>
        <ButtonContainer>
          <button type="submit" content="Login" name="login" />
        </ButtonContainer>
        <SignUp>Create an Account? <a href="signup">Sign Up</a> </SignUp>
      </MainContainer>
    </form>
  )

}

export default Login;
