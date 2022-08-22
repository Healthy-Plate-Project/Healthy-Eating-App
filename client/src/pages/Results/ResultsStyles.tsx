import styled from "styled-components";

const ResultsStyles = styled.div`
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
  height: 40rem;
  border-radius: 50px;
  /* background-color: darkgray; */
`;

export { ResultsStyles, Main };