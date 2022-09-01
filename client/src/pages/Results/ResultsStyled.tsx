import styled from "styled-components";

const ResultsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 90vh;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: clamp(350px, 90vw, 800px);
  height: 70vh;
  border-radius: 50px;
  border: 1px solid;
`;

export { ResultsStyled, Main };