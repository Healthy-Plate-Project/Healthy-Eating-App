import React from "react";
import { ButtonStyled } from "./ButtonStyles";

type Props = {
  content: string;
  name: string;
  type: string;
};

export default function Button(props: Props) {
  return (
    <ButtonStyled id={props.name + "-button"}>{props.content}</ButtonStyled>
  );
}
