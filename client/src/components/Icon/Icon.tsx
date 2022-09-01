import * as React from 'react';
import StyledIcon from "./IconStyles"

export default function Icon({ color, children }: any) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}