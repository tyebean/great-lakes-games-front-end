import { useState } from "react";

// import * as authService from '../../services/authService'
// todo: we want user to be logged in to do this. use above code.
// todo: disable button if the form is invalid. look at CRUD PUPPIES frontend lecture. search for:
// "const formElement = useRef()"


const ReviewForm = () => {
  // const formElement = useRef()
  // console.log(formElement)
  const [value, setValue] = useState({
    text: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false)

  const handleTxtChange = ( event ) => {
    setValue({...value, text: event.target.value})
  }
  /// '...value' is a spread operator
  // try [evt.target.text] ? if issues occurs

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
        <form
        className="review-form" 
        onSubmit={handleSubmit}
        // ref={formElement}
        >
        {submitted && valid ?  <div className="success-msg">Review Submit Successful 🎉</div> : null }
        {submitted && !value.text ? <span>Add a review first. It's not that hard.</span> : null }

        <input 
        onChange={handleTxtChange}
        value={value.text}
        type="text"
        className="form-field"
        placeholder="What are your thoughts?"
        name="text"
        />
        <button 
        className="review-form-btn" 
        type="submit"
        disabled={!valid}>Post</button> 
        </form>
      </div>
    </>
  );
}

export default ReviewForm; 