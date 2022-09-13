import styled from "styled-components";

const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: black;
  line-height: 1.5rem;
  gap: 1rem;
`;

const ItemStyled = styled.div`
  gap: 0.5rem;
  color: white;
  border: 1px white solid;
  padding: 0 1rem;
  border-radius: 20px;
  width: 85vw;
`;
const ItemDetail = styled.div`
  display: flex;
  gap: 1rem;
  color: lightgrey;
`;

export { ResultStyled, ItemStyled, ItemDetail };
