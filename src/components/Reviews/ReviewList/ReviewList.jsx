import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewList.css";

function ReviewList({
  reviews,
  handleDeleteReview,
  handleEditReview,
  handleAddComment,
}) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
          handleEditReview={handleEditReview}
          handleDeleteReview={handleDeleteReview}
          handleAddComment={handleAddComment}
        />
      ))}
    </div>
  );
}



export default ReviewList;
