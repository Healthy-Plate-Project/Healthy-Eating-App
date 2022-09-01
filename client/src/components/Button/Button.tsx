import React from "react";
import { ButtonStyles, AuthenticationButton } from "./ButtonStyles";

export default function Button() {
  return <ButtonStyles>Search</ButtonStyles>;
};

type AuthProps = {
  content: string;
}

export function AuthButton({ content }: AuthProps) {
  return <AuthenticationButton>{content}</AuthenticationButton>;
};
