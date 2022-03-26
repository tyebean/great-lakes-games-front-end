import { useState } from "react";
// import * as authService from '../../services/authService'

const ReviewForm = () => {
  const [value, setValue] = useState({
    text: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleTxtChange = ( event ) => {
    setValue({...value, text: event.target.value})
  }
  /// '...value' is a spread operator
  const handleSubmit = ( event ) => {
    event.preventDefault();
    if (value.text) {
      setValid(true)
    }
    setSubmitted(true)
  }

  return ( 
    <>
    <div className="form-container">
      <form className="review-form" onSubmit={handleSubmit}>
        {submitted && valid ?  <div className="success-msg">Review Submit Successful 🎉</div> : null }
      
        {submitted && !value.text ? <span>Add a review first. It's not that hard.</span> : null }
        <input 
        onChange={handleTxtChange}
        value={value.text}
        type="text"
        className="form-field"
        placeholder="What are your thoughts?"
        name="text" />
        <button className="review-form-btn" type="submit">Post</button> 
      </form>
    </div>
    
    </>
  );
}

export default ReviewForm; 