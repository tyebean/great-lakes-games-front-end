import { useState } from "react";
import * as authService from '../../services/authService'

// ref puppies auth front end


// todo: make an 'updateMessage' prop in app.js
// props.updateMessage 


// const SubmitReview = (props) => {
//   const [value, setValue] = useState({
//     text: '',
//   })

//   const handleChange = e => {
//     props.updateMessage('')
//     setValue({
//       ...reviewInput,
//       [e.target.name]: e.target.value,
//     })
//   }

//   // const handleSubmit = async e => {
//   //   e.preventDefault()
//   //   try {
//   //     await authService.signup(reviewInput)
//   //     props.handle
//   //   }
//   // } 
//   // ! tf is this

//   const { text } = reviewInput

//   const isFormInvalid = () => {
//     return !(text)
//   }

//   return ( 
//     <div>

//     </div>
//   );
// }

// export default SubmitReview; 

const ReviewForm = () => {
  const [value, setValue] = useState({
    text: "",
  })






  return ( 
    <>
    <div className="form-container">
      <form className="review-form">
        <input 
        value={value.text}
        type="text"
        className="form-field"
        placeholder="What are your thoughts?"
        name="text" />
      </form>
    </div>
    
    </>
  );
}

export default ReviewForm; 