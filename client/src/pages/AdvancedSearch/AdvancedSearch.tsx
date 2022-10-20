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
import { SearchButton } from "../../components";

const AdvancedSearch = () => {
  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(advancedSearchCallback);
  // a submit function that will execute upon form submission
  async function advancedSearchCallback() {
    console.log(values);
  }

  return (
    <AdvancedSearchWrapper>
      <Form onSubmit={onSubmit}>
        <fieldset>
          <legend>
            <h3>Advanced Search</h3>
          </legend>
          <Keyword>
            <h2>Keyword</h2>
            <input
              name="keyword"
              className="keyword-input"
              onChange={onChange}
              placeholder="vegan, gluten-free, etc."
            />
          </Keyword>

          <Location>
            <h2>Location</h2>
            <input
              name="location"
              className="location-input"
              onChange={onChange}
              placeholder="city, state, zip"
            />
            <SearchButton>Use Current Location</SearchButton>
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
            <input type="radio" onChange={onChange} name="open" value="true" />
            <label htmlFor="open" />
          </Open>
          <SearchButton type="submit">Search</SearchButton>
        </fieldset>
      </Form>
    </AdvancedSearchWrapper>
  );
};

export default AdvancedSearch;
