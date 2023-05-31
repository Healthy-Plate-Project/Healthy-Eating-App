import styled from "styled-components";

export const AdvancedSearchWrapper = styled.div`
  /* accent-color: var(--accent-one); */
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10% 0 0;
  text-align: center;

  fieldset {
    /* background-color: var(--secondary-200); */
    border: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  legend {
    /* border-bottom: 4px var(--primary-600) solid; */
    padding: 0.5rem 0rem 1rem;
    /* border-radius: 8px; */
    margin: 3rem 0;
  }

  input {
    background-color: #f0f5ff;
    border-radius: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    text-align: center;
    height: 2.2rem;

    &::placeholder {
      color: #6a6a6a;
      font-weight: 300;
      font-size: 1rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

export const Keyword = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;

export const Location = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  cursor: pointer;
  img {
    width: 2rem;
  }
`;

export const Distance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const Price = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;

  img {
    cursor: pointer;
    width: 2rem;
  }
`;

export const Open = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  cursor: pointer;

  img {
    width: 2rem;
  }
`;

export const DistanceSlider = styled.div`
  input[type="range"] {
    -webkit-appearance: none;
    background: var(--light-grey);
    border-radius: 5px;
    background-image: linear-gradient(var(--secondary), var(--secondary));
    background-repeat: no-repeat;
    height: 7px;
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
