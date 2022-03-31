import { useState } from "react";

const ReviewCard = (props) => {
  const [toggle, setToggle] = useState(true)
  const [form, setForm] = useState(props.review.text)
  console.log('this is from my review card', props)
  function handleEdit(){
    setToggle(!toggle)
    props.handleEditReview(props.review._id, form)
    setForm(props.review.text)
  }
  console.log(form)
  return (
    <div className="review-card">
      <section className="ui">
        {/* <h5>{props.review.author?.name}</h5> */}
        <h5>Dan Richardson</h5>
        <button onClick={() => setToggle(!toggle)}>Edit</button>
        <button onClick={() => props.handleDeleteReview(props.review._id)}>Delete</button>
      </section>
      {toggle ?
        <section className="review-text">
          {props.review.text}

        </section>
        :
        <section>
          <h4>Edit Review</h4>
          <input name="text" type="text" value={form} onChange={(e)=> setForm(e.target.value)}/>
          <button onClick={handleEdit}>Submit</button>
        </section>
      }

    </div>
  );
}


export default ReviewCard;