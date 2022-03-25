import { useState } from "react";
import * as authService from '../../services/authService'

// ref puppies auth front end
// todo: make an 'updateMessage' prop in app.js
// props.updateMessage

const SubmitReview = (props) => {
  const [reviewInput, setReviewInput] = useState({
    text: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setReviewInput({
      ...reviewInput,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = async e => {
  //   e.preventDefault()
  //   try {
  //     await authService.signup(reviewInput)
  //     props.handle
  //   }
  // } 
  // ! tf is this

  const { text } = reviewInput

  const isFormInvalid = () => {
    return !(text)
  }

  return ( 
    <div>

    </div>
  );
}

export default SubmitReview;