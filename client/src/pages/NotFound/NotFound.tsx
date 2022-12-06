import React from "react";
import empty from "./../../assets/images/empty-plate-pexels-daniela-constantini-5720778.jpg";
import { Wrapper } from "../Review/LeaveReview/ReviewStyles";
import { Image } from "./NotFoundStyles";

export function NotFound() {
  return (
    <Wrapper>
      <h1>404 not found. </h1>
      <h3>Oops! This plate is empty. </h3>
      <h3> Start your search back at home.</h3>

      <Image src={empty} />
    </Wrapper>
  );
};
