import React from "react";
import { ButtonStyled } from "./ButtonStyles";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  name?: string;
  variant?: string;
  type?: string;
  content?: string;
  disabled?: boolean;
  data?: object;
};

export default function Button({
  children,
  onClick,
  variant,
  type,
  content,
  disabled,
  data,
  ...rest
}: ButtonProps) {
  return (
    <>
      <ButtonStyled
        className={`button ${variant}` + (disabled ? " disabled" : "")}
        onClick={onClick}
        // disabled={disabled}
        {...rest}
      >
        {children}
      </ButtonStyled>
    </>
  );
}
