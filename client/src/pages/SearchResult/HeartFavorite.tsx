import React, { useEffect, useState } from "react";
// import { H1, HeartEmpty, HeartCheck } from "./RobynStyles";
// import heartEmpty from "../../assets/images/heart-empty.png";
// import heartFull from "../../assets/images/heart-filled.png";

// const HeartFavorite = (props: any) => {
//   function heartHandler(event: any) {
//     event.preventDefault();
//     props.setSelectedHeart(parseInt(event.target.id[0]));
//   }

// function renderFavoriteHeart() {
// const array = [];
// const [checked, setChecked] = useState(false);
// return (
//   <span>
//     <HeartCheck
//       type="checkbox"
//       aria-hidden="false"
// checked={checked}
// onChange={(e) => {
//   setChecked(e.target.checked);
// }}
//       />
//     </span>
//   );
// }
// if checked show heart full
// default is heart empty

// const array = [];
// for (let i = 1; i <= 1; i++) {
//   const id = `${i.toString()}-vegan-star-id`;
//   const alt = `${i.toString()}-Vegan-Star-Rating`;
//   if (i <= props.selectedHeart) {
//     array.push(
//       <img
//         className="stars"
//         src={heartFull}
//         alt={alt}
//         aria-label={alt}
//         key={id}
//         id={id}
//         onClick={starRatingHandler}
//       />
//     );
//   } else {
//     array.push(
//       <img
//         className="stars"
//         src={heartEmpty}
//         alt={alt}
//         aria-label={alt}
//         key={id}
//         id={id}
//         onClick={starRatingHandler}
//       />
//     );
//   }
// }
// return array;
// }

// return <span> {rednerFavoriteHeart()}</span>;
// };

// export default renderFavoriteHeart;
