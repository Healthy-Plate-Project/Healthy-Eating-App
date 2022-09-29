import React from "react";
import { ButtonStyled, LoginButtonStyles } from "./ButtonStyles";

type Props = {
  children?: any;
  content?: string;
  name?: string;
  onClick?: any;
};

export default function Button({ content, name, onClick }: Props) {
  return (
    <ButtonStyled onClick={onClick} id={name + "-button"}>
      {content}
    </ButtonStyled>
  );
}
