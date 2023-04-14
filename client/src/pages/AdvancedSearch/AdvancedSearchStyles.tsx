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
  cursor: pointer;
  img {
    width: 2rem;
  }
`;

export const Distance = styled.div`
  align-items: center;
  gap: 0.3rem;
`;

export const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  img {
    cursor: pointer;
    width: 2rem;
  }
`;

export const Open = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  img {
    width: 2rem;
  }
`;

export const DistanceSlider = styled.div`
  input[type="range"] {
    -webkit-appearance: none;
    height: 7px;
    background: var(--light-grey);
    border-radius: 5px;
    background-image: linear-gradient(var(--secondary), var(--secondary));
    background-repeat: no-repeat;
    padding: 0;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: var(--secondary);
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    box-shadow: var(--secondary-gradient) 0px 0px 0px 8px;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    box-shadow: var(--secondary-gradient) 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
