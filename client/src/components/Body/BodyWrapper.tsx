import React from "react";

import { BodyWrapperStyles } from "./BodyWrapperStyles";

type BodyProps = {
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

export function BodyWrapper({
  onClick,
  children,
  name,
  variant,
  type,
  content,
  disabled,
  data,
  ...rest
}: BodyProps) {
  return (
    <>
      {/* <h1>Yello!</h1> */}
      {/* <button className={`${variant}-button`} onClick={onClick} {...rest}>
          {children}
        </button> */}
    </>
  );
}
