import React, { FormEvent, useEffect, useState } from "react";
import { ExperienceTextarea, ReviewTextarea, Wrapper } from "./ReviewStyles";
import {
  SingleGoogleResultData,
  UserData,
  StarRating,
  QuestionStarRating,
} from "../../../utils/globalInterfaces";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";
import { useNavigate, useParams } from "react-router-dom";
import { API, apiCall } from "../../../utils/serverCalls";
import { GooglePhoto } from "../../../components/Photo/Photo";
import { REVIEW_TONES, STAR_RATING_NAMES } from "../../../utils/helpers";
import { FullPageSpinner } from "../../../components/Spinner/Spinner";
import { Button } from "../../../components/Button/ButtonStyles";

type CreateReviewProps = {
  currentUser: UserData;
};

export function CreateReview({ currentUser }: CreateReviewProps) {
  const { place_id } = useParams();
  const [restaurantData, setRestaurantData] = useState(
    {} as SingleGoogleResultData
  );
  const [selectedStarRatings, setSelectedStarRatings] = useState(
    [] as StarRating[]
  );
  const [selectedQuestionStarRatings, setSelectedQuestionStarRatings] =
    useState([] as QuestionStarRating[]);
  const [questions, setQuestions] = useState([] as string[]);
  const [reviewText, setReviewText] = useState("");
  const [experience, setExperience] = useState("");
  const [tone, setTone] = useState("");
  const [customTone, setCustomTone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurantData(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  async function getQuestions(data: SingleGoogleResultData) {
    const prompt = `Give me a list of 5 funny questions to rate a restaurant located at ${data.vicinity} called ${data.name}`;
    const questionResponse = await apiCall(API.getChatResponse, {
      message: prompt,
    });
    setQuestions(extractQuestions(questionResponse.content));
    setSpinner(false);
  }

  async function getInitialReview() {
    setSpinner(true);
    const prompt = `Write me a review in about 200 words and in a ${tone} tone for a restaurant located at ${
      restaurantData.vicinity
    } called ${
      restaurantData.name
    } with the following 1-5 ratings in answer to the following questions without mentioning the questions or the ratings themselves:
    ${selectedQuestionStarRatings.map(
      (rating) => `${rating.question}: Star Rating - ${rating.star_rating}`
    )}.
    This review needs to also be based on the following experience: ${experience}`;
    const promptResponse = await apiCall(API.getChatResponse, {
      message: prompt,
    });
    setReviewText(promptResponse.content);
    setSpinner(false);
  }

  useEffect(() => {
    async function checkUserReview() {
      try {
        if (currentUser && currentUser.reviews) {
          const review = currentUser.reviews.find(
            (review) => review.place_id === restaurantData.place_id
          );
          if (
            review &&
            review.review_text &&
            review.star_ratings &&
            review.question_star_ratings
          ) {
            setReviewText(review.review_text);
            if (review.star_ratings.length > 0) {
              setSelectedStarRatings(review.star_ratings);
              setSpinner(false);
            }
            if (review.question_star_ratings.length > 0) {
              setSelectedQuestionStarRatings(review.question_star_ratings);
              setSpinner(false);
            } else {
              getQuestions(restaurantData);
            }
          } else {
            getQuestions(restaurantData);
          }
        } else if (currentUser) {
          getQuestions(restaurantData);
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    }
    checkUserReview();
  }, []);

  function starRatingHandler(diet: string, i: number) {
    let updatedRatings = [...selectedStarRatings];
    let ratingIndex = updatedRatings.findIndex(
      (rating) => rating.name === diet
    );
    if (ratingIndex === -1) {
      updatedRatings.push({ name: diet, star_rating: i });
    } else {
      updatedRatings[ratingIndex].star_rating = i;
    }
    setSelectedStarRatings(updatedRatings);
  }

  function renderStars(diet: string) {
    if (!currentUser.reviews) return null;
    let starRating = 0;
    const review = currentUser.reviews.find(
      (review) => review.place_id === place_id
    );
    const selectedStarRating = selectedStarRatings.find(
      (rating) => rating.name === diet
    );
    if (review && review.star_ratings) {
      const star_rating = review.star_ratings.find(
        (rating) => rating.name === diet
      );
      starRating = star_rating ? star_rating.star_rating : 0;
    }
    if (selectedStarRating) {
      starRating = selectedStarRating.star_rating;
    }
    return Array.from({ length: 5 }, (_, i) => {
      const id = `${i + 1}-${diet}-star-id`;
      const alt = `${i + 1}-${diet}-Star-Rating`;
      const src = i < starRating ? goldStar : whiteStar;
      return (
        <img
          className="stars"
          src={src}
          alt={alt}
          aria-label={alt}
          key={id}
          id={id}
          onClick={() => starRatingHandler(diet, i + 1)}
        />
      );
    });
  }

  function questionStarRatingHandler(question: string, i: number) {
    let updatedRatings = [...selectedQuestionStarRatings];
    let ratingIndex = updatedRatings.findIndex(
      (rating) => rating.question === question
    );
    if (ratingIndex === -1) {
      updatedRatings.push({ question: question, star_rating: i });
    } else {
      updatedRatings[ratingIndex].star_rating = i;
    }
    setSelectedQuestionStarRatings(updatedRatings);
  }

  function renderQuestionStars(question: string) {
    let starRating = 0;
    const selectedQuestionStarRating = selectedQuestionStarRatings.find(
      (rating) => rating.question === question
    );
    if (selectedQuestionStarRating) {
      starRating = selectedQuestionStarRating.star_rating;
    }
    return Array.from({ length: 5 }, (_, i) => {
      const id = `${i + 1}-${question}-star-id`;
      const alt = `${i + 1}-${question}-Star-Rating`;
      const src = i < starRating ? goldStar : whiteStar;
      return (
        <img
          className="stars"
          src={src}
          alt={alt}
          aria-label={alt}
          key={id}
          id={id}
          onClick={() => questionStarRatingHandler(question, i + 1)}
        />
      );
    });
  }

  async function saveReviewHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setSpinner(true);
      const body = {
        user_id: currentUser._id,
        restaurant: {
          lat: restaurantData.geometry.location.lat,
          lng: restaurantData.geometry.location.lng,
          name: restaurantData.name,
          photo_reference: restaurantData.photos[0].photo_reference,
          place_id: restaurantData.place_id,
          price_level: restaurantData.price_level,
          rating: restaurantData.rating,
          types: [...restaurantData.types],
          vicinity: restaurantData.vicinity,
        },
        star_ratings: selectedStarRatings,
        question_star_ratings: selectedQuestionStarRatings,
        tone: customTone ? customTone : tone,
        review_text: reviewText,
      };
      console.log(body);
      const data = await apiCall(API.postReview, body);
      if (data) {
        setSpinner(false);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function alreadyReviewed() {
    if (!currentUser.reviews) {
      return;
    }
    if (
      currentUser.reviews.find(
        (review) => review.place_id === restaurantData.place_id
      )
    ) {
      return <p>You have already reviewed this restaurant!</p>;
    }
  }

  function extractQuestions(str: string): string[] {
    const regex = /\d+\.\s(.+?)\?(\s|$)/g;
    const questions: string[] = [];

    let match;
    while ((match = regex.exec(str))) {
      const question = match[1].trim();
      questions.push(question);
    }

    return questions;
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }

  return (
    <>
      <GooglePhoto
        photo_reference={restaurantData.photos[0].photo_reference}
        max_height="200"
        max_width="200"
        alt={restaurantData.name}
      ></GooglePhoto>
      <Wrapper>
        <div>
          <h1>{restaurantData.name}</h1>
          <form onSubmit={(e) => saveReviewHandler(e)}>
            <div>
              <h4>Google Rating</h4>
              {restaurantData.rating}
            </div>
            <h3>Rate this restaurant based on the special diet:</h3>
            {alreadyReviewed()}
            {STAR_RATING_NAMES.map((diet) => {
              return (
                <>
                  <label key={`${diet}-label`}>{diet}</label>
                  {renderStars(diet)}
                  <br></br>
                </>
              );
            })}
            <br></br>
            {questions.map((question) => {
              return (
                <>
                  <label key={`${question}-label`}>{question}</label>
                  <br></br>
                  {renderQuestionStars(question)}
                  <br></br>
                </>
              );
            })}
            <br></br>
            <select onChange={(e) => setTone(e.target.value)}>
              {REVIEW_TONES.map((tone) => {
                return (
                  <option key={tone} value={tone}>
                    {tone}
                  </option>
                );
              })}
              <option key="Custom" value="Custom">
                Custom
              </option>
            </select>
            <br></br>
            {tone === "Custom" && (
              <>
                <label>Custom Tone</label>
                <br></br>
                <input
                  type="text"
                  onChange={(e) => setCustomTone(e.target.value)}
                />
              </>
            )}
            <br></br>
            Write about your experience:
            <ExperienceTextarea
              name="experience"
              id="experience"
              aria-label="experience"
              key="experience-textarea"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            ></ExperienceTextarea>
            <br></br>
            <Button
              type="button"
              onClick={() => {
                getInitialReview();
              }}
            >
              Generate Review
            </Button>
            <ReviewTextarea
              name="review"
              id="review"
              aria-label="review"
              key="review-textarea"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></ReviewTextarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
