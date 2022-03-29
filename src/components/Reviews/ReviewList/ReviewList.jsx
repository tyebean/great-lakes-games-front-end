import { useState } from "react";
import { useEffect } from "react/cjs/react.development";



const ReviewList = props => {
  console.log("props.reviews are", props.reviews);
  // const [value, setValue] = useState({
  //   text: "",
  //   date: new Date(),
  //   apiId: props.gameDetails.id,
  // });

  // const handleReview = event => {
  //   setValue({ ...value, text: event.target.value });
  // };

  return ( 
    <div>
      <p> Hey! the reviews of a specific game go here! </p>
      
      {/* {props.reviews.map (reviews => 
        <p key={props.reviews._id}>
          {props.reviews.text}
          </p>
        )} */} 
    </div>
  );
}

export default ReviewList; 

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map

