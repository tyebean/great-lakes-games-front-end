import { useState } from "react";

const ReviewCard = (props) => {
  const [toggle, setToggle] = useState(true)
  console.log('this is from my review card', props)
  return(
    <div className="review-card">
      <section> 
        <button onClick={() => setToggle(!toggle)}>Edit</button>
      </section>
      {toggle ? 
      <section>    
        {props.review.text}

      </section>
      :
      <section>Edit</section>
      }

    </div>
  );
}


export default ReviewCard;