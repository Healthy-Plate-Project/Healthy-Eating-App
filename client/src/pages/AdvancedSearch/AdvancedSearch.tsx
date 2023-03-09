import React, { useState } from "react";
import { useForm } from "./useForm";
import {
  AdvancedSearchWrapper,
  Keyword,
  Location,
  Price,
  Open,
  Distance,
  Form,
} from "./AdvancedSearchStyles";
import { PriceIcon, LikeIcon, DirectionsIcon } from "../../assets/icons";
import { Button } from "../../components/Button/ButtonStyles";
import { PrimaryInput, SmallInput } from "../../components/Input/InputStyles";
import { API, apiCall } from "../../utils/serverCalls";
import { FullPageSpinner } from "../../components/Spinner/Spinner";

export function AdvancedSearch() {
  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(advancedSearchCallback);
  // a submit function that will execute upon form submission
  async function advancedSearchCallback() {
    console.log(values);
  }

  const [response, setResponse] = useState("");
  console.log(response);
  const [messageInput, setMessageInput] = useState("");

  const [spinner, setSpinner] = useState(false);
  if (spinner) {
    return <FullPageSpinner />;
  }
  return (
    <>
      <AdvancedSearchWrapper>
        <Form onSubmit={onSubmit}>
          <fieldset>
            <legend>
              <h3>Advanced Search</h3>
            </legend>
            <Keyword>
              <h2>Keyword</h2>
              <PrimaryInput
                onChange={onChange}
                className="keyword-input keyword"
                placeholder="vegan, gluten-free, etc."
              />
            </Keyword>

            <Location>
              <h2>Location</h2>
              <SmallInput
                onChange={onChange}
                className="location-input location"
                placeholder="city, state, zip"
              />
              <Button>Use Current Location</Button>
            </Location>

            <Distance>
              <h2>Distance</h2>
              <input
                onChange={onChange}
                type="radio"
                name="distance"
                id="one"
                value={1}
              />
              <label htmlFor="five">5</label>
              <input
                onChange={onChange}
                type="radio"
                name="distance"
                id="ten"
                value={10}
              />
              <label htmlFor="ten">10</label>
              <input
                onChange={onChange}
                type="radio"
                name="distance"
                id="twenty"
                value={20}
              />
              <label htmlFor="twenty">20</label>
            </Distance>

            <Price>
              <h2>Price</h2>
              <label>
                <input type="radio" name="price" value={1} />
                <img src={PriceIcon} />
              </label>
              <label>
                <input type="radio" name="price" value={2} />
                <img src={PriceIcon} />
              </label>
              <label>
                <input type="radio" name="price" value={3} />
                <img src={PriceIcon} />
              </label>
              <label>
                <input type="radio" name="price" value={4} />
                <img src={PriceIcon} />
              </label>
            </Price>

            <Open>
              <h2>Open Now</h2>
              <input
                type="radio"
                onChange={onChange}
                name="open"
                value="true"
              />
              <label htmlFor="open" />
            </Open>
            <Button type="submit">Search</Button>
          </fieldset>
        </Form>
      </AdvancedSearchWrapper>

      <input onChange={(e) => setMessageInput(e.target.value)}></input>
      <br></br>
      <Button
        type="button"
        onClick={async () => {
          setSpinner(true);
          const test = await apiCall(API.getChatResponse, {
            message: messageInput,
          });
          setResponse(test.content);
          setSpinner(false);
        }}
      >
        Test Chat GPT
      </Button>
      {response && <p>{response}</p>}
    </>
  );
}
