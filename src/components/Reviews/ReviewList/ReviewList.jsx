import EditReview from '../EditReview/EditReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import styles from '../ReviewList/ReviewList.module.css'

function ReviewList({ reviews, handleDeleteReview, handleEditReview }) {
  console.log(reviews);
  return (
    <div>
      {reviews.map((review, index) => (
        
        // console.log(review.text)
        // <div>{review.text}
        // {review.date}
        // </div>
        <ReviewCard 
        review={review}
        />


        
      ))}
    </div>
  )
}


export default ReviewList;

// gameId from the review model in the back end
// if gameid(review mod) === apiId(game mod)
// then map

// <div key={index} className={styles.reviewCard}>
//           <div key={review._id}> {review.text} </div>


//           <button
//             onClick={() => handleDeleteReview(review._id)}>
//             Delete</button>

//           {/* <button 
//           onClick={() => handleEditReview(reviews._id)}
//           state={{review}}>
//           Edit Review</button> */}
//           <EditReview
//             handleEditReview={handleEditReview}
//             reviews={reviews}
//           />
//         </div>