import React from 'react';
import swal from 'sweetalert';
import ReactStars from "react-rating-stars-component";

import MenuItemRating from './menuItemRating'


const MenuItem = (props) => {

  const { item, itemRating, email, token, updateOrder } = props;

  const handleClick = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id}`);
    menuCard.classList.toggle('active');
  }

  const handleOrder = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    updateOrder(menuCard.id, email, token, 'add');
    swal({
      text: `Ordered ${item.name}`,
      icon: "success"
    });
  }

  return (
    <div className="menu-item-card shadow" id={`menu-item-${item.id}`} onClick={handleClick}>
      <img className="menu-item-image" src={item.image_url} alt=""></img>
      <MenuItemRating key={item.id} itemRating={itemRating} item={item} />
      <div className="menu-item-info row">
        <div className="menu-item-info-details col-9">
          <p className="header"><b>{item.name}</b></p>
          <p className="description">{item.description}</p>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="menu-item-info-price d-flex align-items-center justify-content-end col">
              <p>¥{item.price}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="btn btn-primary btn-sm order-button" id={item.id} onClick={handleOrder}>
                <p>Order!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
