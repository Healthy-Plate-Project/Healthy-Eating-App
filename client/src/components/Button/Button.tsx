import React from "react";
import { ButtonStyled, LoginButtonStyles } from "./ButtonStyles";

type Props = {
  children?: any;
  content?: string;
  name?: string;
}

export default function Button({ content, name }: Props) {
  return <ButtonStyled id={name + "-button"}>{content}</ButtonStyled >;
};