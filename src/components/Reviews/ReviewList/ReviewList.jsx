
import styles from '../ReviewList/ReviewList.module.css'

function ReviewList({ reviews, handleDeleteReview }) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
      <div 
      className={styles.reviewCard}>
        <div 
        key={index}
        >{review.text}</div>

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
