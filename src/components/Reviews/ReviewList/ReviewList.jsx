const ReviewList = props => {
  console.log(props.reviews);
  return (
    <div>
      Hello am i working?
      {props.reviews.map((review, index) => (
        <div key={index}>{review.text}</div>
      ))}
    </div>
  );
};

export default ReviewList;

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map
