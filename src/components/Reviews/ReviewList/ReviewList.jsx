import ReviewCard from "../ReviewCard/ReviewCard";
import "./ReviewList.css";

function ReviewList({ reviews, handleDeleteReview, handleEditReview }) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review}
          handleEditReview={handleEditReview}
          handleDeleteReview={handleDeleteReview}
        />
      ))}
    </div>
  );
}



export default ReviewList;

