import React from "react";
import { ReviewWrapper } from "./ReviewsStyled";
import {S} from "./ReviewsStyled"
import { reviewsObj } from "./reviewSeed"
   
interface ListProps {
        user?: string;
        listImage?: string;
        alt?: string;
        listTitle?: string;
        listText?: string,
        value?: number;
        rating?: number;
        date?: String;
        children?: React.ReactNode;
      }


const Review = () => {

    {reviewsObj.map((list, index) => {
    return (
        
        <ul key={index}>
          <S.List>  
          <S.ListImage src={list.listImage} alt={list.alt} />
          <div>Matt</div>  
          <h3>{list.date}</h3>
          <hr/>

          <S.ListTitle>
          <h1>{list.listTitle}</h1>
          </S.ListTitle>
          
          <S.ListBody>  
          <p>         
          {list.listText}
          </p>
          </S.ListBody>
          <hr/>
          
          <S.ListLink>
          <h3>value</h3><h2>{list.value}</h2>
          <h3>rating</h3><h2>{list.rating}</h2>
          </S.ListLink>
          </S.List>
        </ul>
          );
        })}
};

export default Review