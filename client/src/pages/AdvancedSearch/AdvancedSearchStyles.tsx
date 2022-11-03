import styled from "styled-components";

export const AdvancedSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  accent-color: var(--accent-one);

  input {
    border-radius: 50px;
    border: none;
    height: 2rem;
    background-color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    padding: 0 0 0 1rem;

    &::placeholder {
      color: #555555;
      font-weight: 100;
      font-size: 0.8rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Keyword = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  .location-radio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Distance = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  .distance-radio {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  [type="radio"] + img {
    cursor: pointer;
  }

  [type="radio"]:checked + img {
    filter: invert(1);
  }

  img {
    width: 2rem;
    filter: invert(0.7);
  }
`;

export const Open = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
