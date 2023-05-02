import styled from "styled-components";

export const CardStyled = styled.article`
  display: flex;
  width: 100%;
  border: 1px white solid;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 10px;
  height: 121px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
`;

export const Title = styled.div`
  font-family: "Comfortaa", sans-serif;
  font-weight: Medium;
  font-size: 1.3rem;
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
  gap: 0.2rem;
  text-align: left;
`;

export const Price = styled.div`
  font-size: 0.8rem;
  width: 3.8rem;
  display: flex;
  align-items: center;
`;

export const Rating = styled.div`
  font-size: 0.8rem;
  cursor: auto;
`;

export const Favorite = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Directions = styled.span`
  height: 20px;
  width: 1.4rem;
  cursor: pointer;
`;

export const Review = styled.span`
  height: 20px;
  width: 1.4rem;
  cursor: pointer;
`;
