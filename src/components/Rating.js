import { useState } from "react";
import Submitted from "./Submitted";
import "./SubmittedStyles.css";

import "./RatingStyles.css";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleRatingClicked(rating) {
    setSelectedRating(rating);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return isSubmitted ? (
    <Submitted selectedRating={selectedRating} />
  ) : (
    <form className="cont" onSubmit={handleSubmit}>
      <img className="star" src="star.svg" alt="star" />
      <h1 className="head">How Did We Do?</h1>
      <p className="text">
        Please let us know how did we do with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>
      <div className="buttonscont">
        {[1, 2, 3, 4, 5].map((r) => (
          <button
            type="button"
            onClick={() => handleRatingClicked(r)}
            className="buttons"
          >
            {r}
          </button>
        ))}
      </div>
      <button
        type="submit"
        disabled={selectedRating === undefined}
        className="submit"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Rating;
