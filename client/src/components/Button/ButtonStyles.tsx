import styled from "styled-components";
import { DefaultButton } from "./DefaultButton";
import {
  CreateIcon,
  HomeIcon,
  DirectionsIcon,
  LikeIcon,
  PriceIcon,
  SearchIcon,
  StarIcon,
  TimerIcon,
  DeleteIcon,
  EditIcon,
} from "../../assets/icons/index"; // const DeleteIcon = require("../../assets/icons/Delete_icon.svg") as string;

export const Button = styled(DefaultButton)`
  cursor: pointer;
  color: var(--white);
  background-color: var(--secondary);
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 50px;
  padding: 0.7rem 1.2rem;
  border: none;
  width: fit-content;
  white-space: nowrap;
  transition: 0.3s ease-in-out;
  box-shadow: inset 0px -20px 19px -15px #48e38e;

  /* icon */
  &:before {
    width: 1.2rem;
    position: relative;
    display: inline-block;
    padding: 0 0.5rem 0 0;
    mix-blend-mode: lighten;
    filter: invert(1);
    vertical-align: middle;
  }

  &:hover {
    transition: 0.3s ease-in-out;
    box-shadow: inset 0px -20px 19px -15px #48e38e;
    transform: scale(1.02);
  }

  &:focus {
    box-shadow: inset 0px -20px 19px -15px #48e38e;
  }

  &:active {
    box-shadow: inset 0px 20px 19px -15px #44e78ecc;
    transform: scale(0.98);
    transition: 0.2s;
  }
`;

export const SearchButton = styled(Button)`
  color: var(--light-600);
  background-color: var(--primary);
  transition: all 0.3s;
  box-shadow: inset 0px -20px 19px -15px #e57676;

  /* icon */
  &:before {
    content: url(${SearchIcon});
  }

  &:hover {
    box-shadow: inset 0px -20px 19px -15px var(--primary);
  }

  &:focus {
    box-shadow: inset 0px -20px 19px -15px var(--primary-400);
  }

  &:active {
    box-shadow: inset 0px 20px 19px -15px #ff7b7b;
  }
`;

export const MenuButton = styled(Button)`
  color: var(--light-600);
  background-color: var(--primary);
  transition: all 0.3s;
  box-shadow: inset 0px -20px 19px -15px #e57676;

  /* icon */
  &:before {
    content: url(${StarIcon});
  }

  &:hover {
    box-shadow: inset 0px -20px 19px -15px var(--accent-two);
  }

  &:focus {
    box-shadow: inset 0px -20px 19px -15px var(--accent-two);
  }

  &:active {
    box-shadow: inset 0px 20px 19px -15px #ff7b7b;
  }
`;

export const DangerButton = styled(Button)`
  color: var(--light);
  background-color: var(--primary);
  transition: all 0.3s;

  &:hover {
    background-color: var(--primary-400);
    transition: all 0.3s;
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

export const PillButton = styled(Button)`
  color: var(--light);
  background-color: var(--primary);
  transition: all 0.3s;

  &:hover {
    background-color: var(--primary-400);
    transition: all 0.3s;
  }

  &:active {
    background-color: var(--primary-600);
    box-shadow: 0px 5px 10px #696969;
    transition: all 0.3s;
    transform: scale(101%);
  }
`;

export const LoginButtonStyles = styled(DefaultButton)`
  background-color: var(--primary);
  font-size: var(--sm);
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;
