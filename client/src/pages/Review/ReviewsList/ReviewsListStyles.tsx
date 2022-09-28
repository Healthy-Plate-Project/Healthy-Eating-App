import styled from "styled-components";

const ReviewsWrapper = styled.div`
  margin: 1rem 1rem;
  padding: 0.5rem;
  border: 1px white solid;
  border-radius: 10px;
`;

const ReviewList = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2.5fr 1fr;
  grid-template-rows: 1fr 2fr 0.5fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  border: 1px #e7e7e7 solid;
  margin: 1rem auto;

  .text {
    grid-area: 2 / 2 / 3 / 4;
    background-color: #979797;
    padding: 0.5rem 0.7rem;
    border-radius: 3px;
    height: fit-content;
  }
  .rating {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    border: 1px #e7e7e7 solid;
    color: black;
    height: 4rem;
    width: 4rem;
    border-radius: 100%;
  }
  .rating-number {
    margin: 0 auto;
    font-size: 3.1rem;
    color: #e7e7e7;
    /* background-color: antiquewhite; */
  }
  .profile {
    padding: 0.5rem 0.4rem;
    grid-area: 1 / 2 / 2 / 3;
  }
  .footer {
    grid-area: 3 / 2 / 4 / 3;
  }
`;

export { ReviewsWrapper, ReviewList };
