import * as React from 'react';
import StyledIcon from "./IconStyles"

export default function Icon({ color, name }: any) {
  return <StyledIcon background={color}>{name}</StyledIcon>;
}