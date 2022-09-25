import React from "react";
import { ButtonStyles, LoginButtonStyles } from "./ButtonStyles";

type Props = {
  content: string;
  name: string;
  type: string;
}

export default function Button(props: Props) {
  return <ButtonStyles id={props.name + "-button"}>{props.content}</ButtonStyles >;
};