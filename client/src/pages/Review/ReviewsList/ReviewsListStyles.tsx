import styled from "styled-components";

const ReviewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  padding: 0.5rem;
  border: 1px white solid;
  border-radius: 10px;
`;

const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  color: #a8a8a8;

  h2 {
    color: #f2f2f2;
    line-height: 1.5rem;
  }
  h3 {
    line-height: 1.5rem;
  }
  p {
    color: #f2f2f2;
    font-size: 1.2rem;
  }
`;

const ReviewsListParent = styled.div`
  width: 100%;
  color: white;
`;

export { ReviewsWrapper, ReviewList, ReviewsListParent };
