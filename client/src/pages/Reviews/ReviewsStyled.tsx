import styled from "styled-components";


const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  width: clamp(250px, 95%, 800px);
  margin: 1rem auto;
  /* background-color: #5b5b5b; */
  
  hr {
    height:1px;
    border-width:0;
    color:gray;
    background-color:gray;
    width: 100%;
    margin-right: 17rem;
  }
  
  h2 {
    color: #d2d2d2;
    }

  h3 {
      color:#a2a2a2;
      font-size: 1rem;
    }
`

const Heading = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: .5rem;
  background-color: #5b5b5b;
  align-items: center;
  border-radius: 10px;
  img {
    border-radius: 50%;
    width: 50px;
    border: 3px #bababa solid;
  }
`

const ReviewBody = styled.div`
  
`

const Scores = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: .5rem;
  border-radius: 10px;
  padding: 0 1rem 0;
  color: #a2a2a2;
`
export const S = {
  List: styled.div`
      width: 100%;
      border: 1px solid yellow;
      border-radius: 1rem;
      display: flex;
      position: relative;
  `,
  ListImage: styled.img`
      border-radius: .5rem;
      width: 100%;
  `,
  ListBody: styled.div`
      padding: 1rem;
  `,
  ListTitle: styled.h2`
      font-size: 1.5rem;
      margin: 0 0 1rem;
  `,
  ListText: styled.p`
      font-size: 1rem;
       /* margin: 0; */
      overflow: hidden;
  `,
  ListLink: styled.a`
      font-size: 1.25rem;
      color: #d8d8d8;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.2s ease-in, border-color 0.2s ease-in;
      
      &:hover,
      &:focus {
          background-color: #0a5dd6;
          border-color: #0957c9;
      }
  `,
}


export { ReviewWrapper, ReviewBody,  Heading, Scores };
