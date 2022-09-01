import React from "react";
import emptyStar from "./../../assets/images/white-background-star.png";

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
        <h1>Review for Business Name Placeholder</h1>
        <form className="stars">
            <label>
                <h3>Rate this restaurant overall:</h3>
            <input type="radio" name="star-rating" aria-label="One Star" id="1-star" value="1"/>
            <img src={emptyStar} alt="One Star Rating" />
            </label>

             <label>
            <input type="radio"  name="star-rating" aria-label="Two Star" id="2-star" value="2"/>
            <img src={emptyStar} alt="Two Star Rating" />
            </label>
            
            <label>
            <input type="radio"  name="star-rating" aria-label="Three Star" id="3-star" value="3"/>
            <img src={emptyStar} alt="Three Star Rating" />
            </label>

            <label>
            <input type="radio"  name="star-rating" aria-label="Four Star" id="4-star" value="4"/>
            <img src={emptyStar} alt="Four Star Rating" />
            </label>

            <label>
            <input type="radio"  name="star-rating" aria-label="Five Star" id="5-star" value="5"/>
            <img src={emptyStar} alt="Five Star Rating" />
            </label>

        <div className="good-for">
            <h3>What type of food is this restaurant good for? </h3>
            <p>Please only select if the restaurant offers more than 3 options of that type.</p>
            <p>Choose all that apply.</p>
            <label>
            <input type="checkbox"  name="vegan" aria-label="vegan" id="vegan" value="1"/>
            Vegan
            </label>

            <label>
            <input type="checkbox"  name="vegetarian" aria-label="vegetarian" id="vegetarian" value="1"/>
            Vegetarian
            </label>

            <label>
            <input type="checkbox"  name="pescatarian" aria-label="pescatarian" id="pescatarian" value="1"/>
            Pescatarian
            </label>

            <label>
            <input type="checkbox"  name="gluten-free" aria-label="gluten-free" id="gluten-free" value="1"/>
            Gluten Free
            </label>

            <label>
            <input type="checkbox"  name="dairy-free" aria-label="dairy-free" id="dairy-free" value="1"/>
            Dairy Free
            </label>

            <label>
            <input type="checkbox"  name="nut-free" aria-label="nut-free" id="nut-free" value="1"/>
            Nut Free
            </label>
            
        </div>


        <label>
            <h3>How was your experience?</h3>
            <textarea className="paragraph"  name="review" aria-label="review" id="review"/>

            </label>

        <br />
        <br />

<button type="submit">Submit</button>
        </form>

        {/* <form className="rmg">
            <input type="radio" id="test1" name="test"/>
            <label htmlFor="test1">Test 1</label>

            <input type="radio" id="test2" name="test"/>
            <label htmlFor="test2">Test 2</label>

        </form> */}
        
    </div>
)
};

export default Review;