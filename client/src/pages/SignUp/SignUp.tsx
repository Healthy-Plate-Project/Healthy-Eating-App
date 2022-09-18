import React, { useState } from 'react'

// styled-components
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  Login
} from "./SignUpStyles";

// components
import { SignUpInput } from '../../components/Input/InputStyles';
import { Button } from '../../components';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [redirect, setRedirect] = useState(false)

  const submit = async (e: Event) => {
    e.preventDefault();
    await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        firstName,
        lastName
      }),
    });
    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to='/login' />;
  }
  return (
    <MainContainer>
      <WelcomeText>Sign Up</WelcomeText>
      <InputContainer>
        <SignUpInput type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <SignUpInput type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
        <SignUpInput type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
        <SignUpInput type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <SignUpInput type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" name="signup" />
      </ButtonContainer>
      <Login>Have an account? <a href="login">login</a></Login>
    </MainContainer>
  )
}

export default SignUp