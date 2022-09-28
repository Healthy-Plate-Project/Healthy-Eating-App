import React, { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewList, ReviewsWrapper } from "./ReviewsListStyles";
import { getRestaurant } from "../../../utils/serverCalls";

interface Reviews {
  name: string;
  children: ReactNode;
}

interface Restaurant {
  author_name: string;
  language: string;
  rating: number;
  text: string;
  time: number;
  reviews: Reviews[];
}

function ReviewListParent() {
  const { place_id } = useParams();

  const [restaurantData, setRestaurantData] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getRestaurant(place_id);
        setRestaurantData(data.result.reviews);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [place_id]);

  console.log(restaurantData);

  return (
    <>
      <ReviewsWrapper>
        {restaurantData.map((review, index) => {
          return (
            <ReviewList key={index}>
              <header className="rating">
                <div className="rating-number">{review.rating}</div>
              </header>
              <div className="text">{review.text}</div>
              <div className="profile">
                <h2> {review.author_name}</h2>
              </div>
              <footer className="footer">{review.time}</footer>
            </ReviewList>
          );
        })}
      </ReviewsWrapper>
    </>
  );
}

export default ReviewListParent;
