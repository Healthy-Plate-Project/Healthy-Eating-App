import { useState, useCallback } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [confirmButtonText, setConfirmButtonText] = useState("");
  const [closeButtonText, setCloseButtonText] = useState("");
  const [onConfirm, setOnConfirm] = useState<(() => void) | null | undefined>(
    null
  );

  const openModal = useCallback(
    (
      title: string,
      content: string,
      confirmButtonText?: string,
      closeButtonText?: string,
      onConfirm?: () => void
    ) => {
      setTitle(title);
      setContent(content);
      setConfirmButtonText(confirmButtonText || "Yes");
      setCloseButtonText(closeButtonText || "Close");
      setOnConfirm(() => onConfirm || null);
      setIsOpen(true);
    },
    []
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    title,
    content,
    confirmButtonText,
    closeButtonText,
    onConfirm,
    openModal,
    closeModal,
  };
}
