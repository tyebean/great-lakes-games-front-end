

const ReviewList = props => {
  console.log("props . reviews are", props.reviews);
  return ( 
    <div>
      <p> Hey! the reviews of a specific game go here! </p>
      {props.reviews.map(review => 
        <p key={review._id}>{review.text}</p>
        )}
    </div>
  );
}

export default ReviewList; 

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map

