import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const MenuItemRating = (props) => {

  const {itemRating, item} = props;
  const [rating, setRating] = useState(itemRating);

  const starDetails = {
    classNames: item.name,
    count: 5,
    value: rating,
    edit: false,
    size: 28,
    activeColor: '#BA56D3',
  }

  return (
    <>
      <div className="menu-item-rating">
        <ReactStars {...starDetails} />
      </div>
    </>
  );
}

export default MenuItemRating;
