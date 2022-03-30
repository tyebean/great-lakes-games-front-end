import { useState } from "react";

const Comments = props => {
  const [value, setValue] = useState({
    text: "",
  });

  const handleTxtChange = event => {
    setValue({ ...value, text: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.handleAddReview(value);
  };

  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Reply
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <form
          class="px-4 py-3"
          aria-labelledby="dropdownMenuButton1"
          className="review-form"
          onSubmit={handleSubmit}
        >
          <div class="mb-3">
            <input
              class="form-control"
              onChange={handleTxtChange}
              value={value.text}
              type="text"
              className="form-field"
              placeholder="What are your thoughts?"
              name="text"
            />
          </div>
          <button
            class="btn btn-primary"
            className="review-form-btn"
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
