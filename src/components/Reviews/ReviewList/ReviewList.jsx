

const ReviewList = props => {
  return ( 
    <div>
      <p> Hey! the reviews of a specific game go here! </p>
      {props.reviews.map(review => 
        <p key={review._id}>{review}</p>
        )}
    </div>
  );
}

export default ReviewList; 

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map

