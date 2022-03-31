import Comments from "../../Comments/Comments";

const ReviewList = props => {
  console.log(props.reviews);
  return (
    <div>
      Hello am i working?
      {props.reviews.map((review, index) => (
        <div key={index}>
          {review.text}
          <Comments
            handleAddComment={props.handleAddComment}
            reviewId={review._id}
          />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map
