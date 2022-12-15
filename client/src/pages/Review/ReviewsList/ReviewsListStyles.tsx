import styled from "styled-components/macro";

export const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 1rem;
  padding: 0.5rem;
  border: 1px white solid;
  border-radius: 10px;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  color: #a8a8a8;
  :nth-child(1) {
    text-align: right;
  }
`;

export const ReviewsListParent = styled.div`
  width: 100%;
`;
