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
import { apiServer } from "../../utils/helpers";

export function SignUp({ setCurrentUser }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiServer()}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
        }),
      });
      const content = await response.json();
      if (content.message === "Successfully registered") {
        navigate(-1);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={(e) => submit(e)}>
      <MainContainer>
        <WelcomeText>Sign Up</WelcomeText>
        <InputContainer>
          <SignUpInput
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
  );
}
