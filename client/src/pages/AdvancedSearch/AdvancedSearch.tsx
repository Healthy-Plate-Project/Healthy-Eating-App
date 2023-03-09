import React from "react";
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

export function AdvancedSearch() {
  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(advancedSearchCallback);
  // a submit function that will execute upon form submission
  async function advancedSearchCallback() {
    console.log(values);
  }

  const [response, setResponse] = React.useState(null);
  console.log(response);

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

      <Button
        type="button"
        onClick={async () => {
          const test = await apiCall(API.getChatResponse, {
            message: "What is the meaning of life?",
          });
          setResponse(test.content);
        }}
      >
        Test Chat GPT
      </Button>
      {response && <p>{response}</p>}
    </>
  );
}
