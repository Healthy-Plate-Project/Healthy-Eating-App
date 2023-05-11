import React from "react";
import { Button } from "../Button/ButtonStyles";
import {
  ModalStyles,
  ModalContent,
  ModalBody,
  ModalTitle,
} from "./ModalStyles";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onConfirm?: (() => void) | null | undefined;
  onClose?: (() => void) | null | undefined;
  closeButtonText?: string;
  confirmButtonText?: string;
}

export function Modal({
  isOpen,
  title,
  content,
  onConfirm,
  onClose,
  confirmButtonText,
  closeButtonText,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalStyles>
      <ModalBody>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        {onConfirm && <Button onClick={onConfirm}>{confirmButtonText}</Button>}
        {onClose && <Button onClick={onClose}>{closeButtonText}</Button>}
      </ModalBody>
    </ModalStyles>
  );
}
