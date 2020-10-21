import React from 'react';
import swal from 'sweetalert';

import { updateOrder } from '../actions/index';

const MenuItem = (props) => {

  const handleClick = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    menuCard.classList.toggle('d-none');
  }

  const handleOrder = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    updateOrder(menuCard.id, email, token);
    swal({
      text: `Ordered ${item.name}`,
      icon: "success"
    });
  }

  const { item, email, token } = props;
  return (
    <div className="menu-item-card shadow" id={`menu-item-${item.id}`} onClick={handleClick}>
      <img className="menu-item-image" src={item.image_url} alt=""></img>
      <div className="menu-item-info">
        <div className="menu-item-info-details col-9">
          <p><b>{item.name}</b></p>
          <p>{item.description}</p>
        </div>
        <div className="menu-item-info-price d-flex align-items-center justify-content-end col-3">
          <p>¥{item.price}</p>
        </div>
      </div>
      <div className="btn btn-primary d-none" id={item.id} onClick={handleOrder}>
        <p>Order!</p>
      </div>
    </div>
  );
}

export default MenuItem;
