import React from "react";
import { ButtonStyles, LoginButtonStyles } from "./ButtonStyles";

type Props = {
  content: string;
  name: string;
}

export default function Button({ content, name }: Props) {
  return <ButtonStyles id={name + "-btn"}>{content}</ButtonStyles >;
};