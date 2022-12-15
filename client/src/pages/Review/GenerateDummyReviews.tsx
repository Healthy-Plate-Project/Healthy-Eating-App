import { createReview } from "../../utils/serverCalls";

export function GenerateDummyReviews() {
  // import and run GenerateDummyReviews() from anywhere in the app to
  // generate 500 reviews for the restaurants listed in the testSeeds.js file
  // NOTE - it will take about a minute for it to run and finish!!!!!
  const place_ids = [
    "ChIJKTBP7wT1UocRwf-mwBQv_Y4",
    "ChIJMYQS48WIUocRRYN8A3jBJbQ",
    "ChIJW1BXUmz1UocRteQbXV52Wj0",
    "ChIJGerkOBb1UocR1RGFEDOFMsI",
    "ChIJQ7yYd2CJUocR-9TzxihTedY",
    "ChIJpcPC3qCKUocRYkeDQB3kSMM",
    "ChIJBRSU-0P1UocRFzBCTwfh-3g",
    "ChIJf7T5BVOXTYcRI_s9NYj6OSU",
    "ChIJobPDsdiHUocRbMhqxy-2vbw",
    "ChIJZfua7nVsUocR8oJ9W0V1DQU",
    "ChIJaz7hKRD1UocR8BzuTkKd65A",
    "ChIJD-TefVf0UocRKQ3T4I4HQQ8",
    "ChIJNb2XaLaJUocRZcFuwOvlFJM",
    "ChIJn58N1B9gUocRpAXOXPbFcOo",
    "ChIJqxh2hSuHUocRddCc0DTradY",
    "ChIJD2V31_1jUocRgNDLiUxsGv4",
    "ChIJJbvRDqpjUocRxTf5zYtwZ18",
    "ChIJLTtRrLthUocRar0r0AtY3Aw",
    "ChIJm4dN4aCKUocRNWBs3OhLJ3Y",
    "ChIJ6X-53oqKUocRbZEn_aIYjHk",
  ];

  function getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  async function mapAPIs() {
    let count = 1;
    for (let i = 0; i < place_ids.length; i++) {
      for (let j = 1; j < 26; j++) {
        const createRestaurantReview = await createReview({
          place_id: place_ids[i],
          user_id: "testUser-" + getRandomIntInclusive(1, 5),
          review_text: "This is a test review - " + count,
          overall_rating: getRandomIntInclusive(1, 5),
          dairy_free_rating: getRandomIntInclusive(1, 5),
          gluten_free_rating: getRandomIntInclusive(1, 5),
          nut_free_rating: getRandomIntInclusive(1, 5),
          pescatarian_rating: getRandomIntInclusive(1, 5),
          vegan_rating: getRandomIntInclusive(1, 5),
          vegatarian_rating: getRandomIntInclusive(1, 5),
        });
        console.log(createRestaurantReview);
        count++;
      }
    }
  }
  return mapAPIs();
}
