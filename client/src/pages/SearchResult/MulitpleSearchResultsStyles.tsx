import styled from "styled-components";

export const CardStyled = styled.article`
  display: flex;
  width: 100%;
  border: 1px white solid;
  border-radius: 10px;
  margin-top: 25px;
`;

export const Img = styled.img`
  width: clamp(20px, 10vw, 150px);
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  background-color: red;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;
  width: 100%;
  padding: 0.5rem;
`;

export const Title = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-weight: Medium;
  font-size: 1.5rem;
  text-align: left;
`;

export const P = styled.p`
  font-family: "Comfortaa", sans-serif;
  font-weight: Bold;
  font-size: 0.8rem;
  text-align: left;
  margin: 0;
  width: clamp(250px, 100%, 600px);
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Details = styled.div`
  display: flex;
  gap: 1rem;
  text-align: left;
`;

export const Price = styled.div`
  font-size: 0.8rem;
`;

export const Rating = styled.div`
  font-size: 0.8rem;
`;

export const Menu = styled.div`
  font-size: 0.8rem;
`;

export const Directions = styled.div`
  font-size: 0.8rem;
`;
