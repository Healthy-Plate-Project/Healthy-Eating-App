import React from "react";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  name?: string;
  className?: string;
  id?: string;
  variant?: string;
  type?: string;
  content?: string;
  disabled?: boolean;
  data?: object;
};

export function DefaultButton({
  onClick,
  children,
  name,
  variant,
  type,
  content,
  disabled,
  data,
  ...rest
}: ButtonProps) {
  return (
    <>
      <button className={`${variant}-button`} onClick={onClick} {...rest}>
        {children}
      </button>
    </>
  );
}
