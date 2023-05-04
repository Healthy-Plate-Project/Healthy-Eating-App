import React, { FormEvent, useEffect, useRef, useState } from "react";
import {
  ExperienceTextarea,
  ReviewTextarea,
  Star,
  Wrapper,
} from "./ReviewStyles";
import {
  UserData,
  StarRating,
  QuestionStarRating,
  Restaurant,
  ReviewData,
} from "../../../utils/globalInterfaces";
import goldStar from "../../../assets/images/gold-star.png";
import whiteStar from "../../../assets/images/white-star.png";
import { useNavigate, useParams } from "react-router-dom";
import { API, apiCall } from "../../../utils/serverCalls";
import { GooglePhoto } from "../../../components/Photo/Photo";
import {
  BuildRestaurantObject,
  REVIEW_TONES,
  STAR_RATING_NAMES,
} from "../../../utils/helpers";
import { FullPageSpinner } from "../../../components/Spinner/Spinner";
import { Button } from "../../../components/Button/ButtonStyles";
import { FavoriteIcon } from "../../../components/Icon/FavoriteIcon";
import { Header } from "../../../components/Header/Header";
import { Modal } from "../../../components/Modal/Modal";
import { useModal } from "../../../hooks/useModal";

type CreateReviewProps = {
  currentUser: UserData;
  currentUserTrigger: boolean;
  setCurrentUserTrigger: any;
};

export function CreateReview({
  currentUser,
  currentUserTrigger,
  setCurrentUserTrigger,
}: CreateReviewProps) {
  const { place_id } = useParams();
  const [restaurant, setRestaurant] = useState({} as Restaurant);
  const [selectedStarRatings, setSelectedStarRatings] = useState(
    [] as StarRating[]
  );
  const [selectedQuestionStarRatings, setSelectedQuestionStarRatings] =
    useState([] as QuestionStarRating[]);
  const [reviewText, setReviewText] = useState("");
  const [experience, setExperience] = useState("");
  const [tone, setTone] = useState("");
  const [customTone, setCustomTone] = useState("");
  const navigate = useNavigate();
  const hasFetchedQuestions = useRef(false);
  const {
    isOpen,
    title,
    content,
    closeButtonText,
    openModal,
    closeModal,
  } = useModal();

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        const data = await apiCall(API.getRestaurant, { place_id });
        setRestaurant(data);
        if (Object.keys(currentUser).length > 0 && currentUser.reviews) {
          const review = currentUser.reviews.find(
            (review) => review.place_id === data.place_id
          );
          if (review) {
            review.tone && setTone(review.tone);
            review.review_text && setReviewText(review.review_text);
            review.star_ratings && setSelectedStarRatings(review.star_ratings);
            if (review.question_star_ratings) {
              let questionStarRatings = [] as QuestionStarRating[];
              review.question_star_ratings.map((question) => {
                questionStarRatings.push({
                  question: question.question,
                  star_rating: question.star_rating,
                });
              });
              setSelectedQuestionStarRatings(
                questionStarRatings as QuestionStarRating[]
              );
            } else {
              if (!hasFetchedQuestions.current) {
                getQuestions(data);
                hasFetchedQuestions.current = true;
              }
            }
            setSpinner(false);
          } else {
            if (!hasFetchedQuestions.current) {
              getQuestions(data);
              hasFetchedQuestions.current = true;
            }
          }
        } else if (
          Object.keys(currentUser).length > 0 &&
          !currentUser.reviews
        ) {
          if (!hasFetchedQuestions.current) {
            getQuestions(data);
            hasFetchedQuestions.current = true;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (isMounted) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [currentUser]);

  async function getQuestions(data: Restaurant) {
    const prompt = `Give me a list of 5 funny questions to rate a restaurant located at ${data.vicinity} called ${data.name}`;
    const questionResponse = await apiCall(API.getChatResponse, {
      message: prompt,
    });
    setSelectedQuestionStarRatings(extractQuestions(questionResponse.content));
    setSpinner(false);
  }

  async function getInitialReview() {
    setSpinner(true);
    const prompt = `Write me a review in about 100 words and in a ${tone} tone for a restaurant located at ${
      restaurant.vicinity
    } called ${
      restaurant.name
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
        <Star
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
        <Star
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
      const restaurantData = BuildRestaurantObject(restaurant);
      const body = {
        restaurant: restaurantData,
        review: {
          user_id: currentUser._id,
          place_id: restaurant.place_id,
          star_ratings: selectedStarRatings,
          question_star_ratings: selectedQuestionStarRatings,
          tone: customTone ? customTone : tone,
          review_text: reviewText,
        } as ReviewData,
      };
      const data = await apiCall(API.postReview, body);
      if (data) {
        setSpinner(false);
        openModal("Submitted", "Thank you for your review!", "", "Continue");
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
        (review) => review.place_id === restaurant.place_id
      )
    ) {
      return (
        <>
          <p>You have already reviewed this restaurant!</p>
          <br></br>
        </>
      );
    }
  }

  function extractQuestions(str: string): QuestionStarRating[] {
    const regex = /\d+\.\s(.+?)\?(\s|$)/g;
    const questions: QuestionStarRating[] = [];
    let match;
    while ((match = regex.exec(str))) {
      const question = match[1].trim();
      questions.push({
        question: question,
        star_rating: 0,
      });
    }
    return questions;
  }

  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return <FullPageSpinner />;
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        title={title}
        content={content}
        closeButtonText={closeButtonText}
        onClose={() => {
          closeModal();
          setCurrentUserTrigger(!currentUserTrigger);
          navigate("/");
        }}
      />
      {Header()}
      {restaurant.photos && restaurant.photos[0] && (
        <GooglePhoto
          photo_reference={restaurant.photos[0].photo_reference}
          max_height="200"
          max_width="200"
          alt={restaurant.name}
          place_id={restaurant.place_id}
          name={restaurant.name}
        />
      )}
      <Wrapper>
        <div>
          <h1>{restaurant.name}</h1>
          <FavoriteIcon
            restaurant={restaurant}
            currentUser={currentUser}
            currentUserTrigger={currentUserTrigger}
            setCurrentUserTrigger={setCurrentUserTrigger}
          ></FavoriteIcon>
          <form onSubmit={(e) => saveReviewHandler(e)}>
            <div>
              <h4>Google Rating</h4>
              {restaurant.rating}
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
            {selectedQuestionStarRatings.map((question) => {
              return (
                <>
                  <label key={`${question}-label`}>{question.question}</label>
                  <br></br>
                  {renderQuestionStars(question.question)}
                  <br></br>
                </>
              );
            })}
            <br></br>
            <Button
              type="button"
              onClick={() => {
                setSpinner(true);
                getQuestions(restaurant);
              }}
            >
              Regenerate Questions
            </Button>
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
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
