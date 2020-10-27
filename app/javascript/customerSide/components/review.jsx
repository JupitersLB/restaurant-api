import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { addReview, updateReview } from '../actions/index';

const Review = (props) => {

  const {item, itemRating, email, token} = props;
  const [rating, setRating] = useState(itemRating);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    if (isNaN(rating)) {
      addReview(item.id, email, token, newRating);
    } else {
      updateReview(item.id, email, token, newRating);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-10">
          <ReactStars count={5} value={rating} onChange={ratingChanged} size={20} activeColor='#ffd700' />
        </div>
      </div>
    </>
  );
}

export default Review;
