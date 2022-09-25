import styled from "styled-components";

const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const ItemStyled = styled.div`
  color: white;
  border: 1px white solid;
  padding: 1rem 1rem;
  border-radius: 20px;
  width: 85vw;
  /* height: 5rem; */
  /* background-color: aqua; */
`;

const ItemDetail = styled.div`
  display: flex;
  text-align: right;
  margin: 1rem;
  gap: 1rem;
  color: lightgrey;
`;

export { ResultStyled, ItemStyled, ItemDetail };
