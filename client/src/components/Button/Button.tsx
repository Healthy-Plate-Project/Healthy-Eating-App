import React from "react";
import { ButtonStyled } from "./ButtonStyles";

type Props = {
<<<<<<< HEAD
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
=======
  content: string;
  name: string;
  type: string;
}

export default function Button(props: Props) {
  return <ButtonStyled id={props.name + "-button"}>{props.content}</ButtonStyled >;
};
>>>>>>> develop
