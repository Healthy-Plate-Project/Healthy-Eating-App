import styled from "styled-components";

interface IconProps {
  readonly background: string;
};

export const StyledIcon = styled.div<IconProps>`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props: any) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;