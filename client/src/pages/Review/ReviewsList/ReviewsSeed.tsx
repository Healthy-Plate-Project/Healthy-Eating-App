interface RSeed {
  id: number;
  rating: string;
  accuracy: string;
  value: string;
  reviewText: string;
}

export const ReviewsSeed: RSeed[] = [
  {
    id: 1,
    rating: "5/5",
    accuracy: "Great",
    value: "3/5",
    reviewText:
      "here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 2,
    rating: "1/5",
    accuracy: "Poor",
    value: "1/5",
    reviewText:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    id: 3,
    rating: "3/5",
    accuracy: "OK",
    value: "5/5",
    reviewText:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
];
