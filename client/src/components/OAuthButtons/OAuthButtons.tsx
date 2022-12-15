// styled-components
import {
  HorizontalDivider,
  IconsContainer,
  OAuthLoginWith,
} from "./OAuthButtonStyles";

// react icons

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";

// components

import { Icon } from "../../components/Icon/Icon";

export function OAuthButtons() {
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #4285F4 5%, #DB4437 25%, #F4B400 75%, #0F9D58 100%)";
  return (
    <>
      <OAuthLoginWith>OR LOGIN WITH</OAuthLoginWith>
      <HorizontalDivider />
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={GoogleBackground}>
          <BsGoogle />
        </Icon>
      </IconsContainer>
    </>
  );
}
