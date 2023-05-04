import styled from "styled-components";

export const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBody = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 50px;
  min-width: 200px;
  max-width: 90%;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 1rem;
`;

export const ModalContent = styled.p`
  margin-bottom: 1rem;
`;
