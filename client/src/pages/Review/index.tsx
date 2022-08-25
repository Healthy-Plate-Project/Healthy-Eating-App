import React from "react";
import goldStar from "./../../assets/images/gold-star.png";
import whiteStar from "./../../assets/images/white-star.png"

const Review = () => {
// if input id star-2 is checked 
let star2 = document.getElementById("2-star")

if (star2) {
    console.log("star 2 is checked")
}else {
    console.log("star2 is not checked")
}

// then apply gold styles to star-1


// if input id star 3 is checked

// then apply gold styles to star-2 and star-1

return(
    <div>
        <h1>Review for Business Name</h1>
        <form className="stars">
            <label>
            <input type="radio" name="star-rating" aria-label="One Star" id="1-star" value="1"/>
            <img src={whiteStar} alt="One Star Rating" />
            </label>

             <label>
            <input type="radio"  name="star-rating" aria-label="Two Star" id="2-star" value="2"/>
            <img src={whiteStar} alt="Two Star Rating" />
            </label>
            
            <label>
            <input type="radio"  name="star-rating" aria-label="Three Star" id="3-star" value="3"/>
            <img src={whiteStar} alt="Three Star Rating" />
            </label>

            <label>
            <input type="radio"  name="star-rating" aria-label="Four Star" id="4-star" value="4"/>
            <img src={whiteStar} alt="Four Star Rating" />
            </label>

            <label>
            <input type="radio"  name="star-rating" aria-label="Five Star" id="5-star" value="5"/>
            <img src={whiteStar} alt="Five Star Rating" />
            </label>

        </form>

        <form className="rmg">
            <input type="radio" id="test1" name="test"/>
            <label htmlFor="test1">Test 1</label>

            <input type="radio" id="test2" name="test"/>
            <label htmlFor="test2">Test 2</label>

        </form>
        
    </div>
)
};

export default Review;