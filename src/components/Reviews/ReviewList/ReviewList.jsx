
import styles from '../ReviewList/ReviewList.module.css'

function ReviewList({ reviews, handleDeleteReview }) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
      <div key={index} className={styles.reviewCard}>
        <div key={review._id}> {review.text} </div>
          <p>posted by: {review.author?.name}</p> 
        <button
        onClick={() => handleDeleteReview(review._id)}>
        Delete</button>
        <button>Update</button>

      </div>
      ))}
    </div>
  )
}


export default ReviewList;

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map
