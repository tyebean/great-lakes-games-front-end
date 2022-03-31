const ReviewCard = (props) => {
  console.log('this is from my review card', props)
  return(
    <>
      {props.review.text}
    </>
  );
}


export default ReviewCard;