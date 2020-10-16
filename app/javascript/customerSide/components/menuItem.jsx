import React from 'react';

import { updateOrder } from '../actions/index';

const MenuItem = (props) => {

  const handleClick = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    menuCard.classList.toggle('d-none');
  }

  const handleOrder = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    updateOrder(menuCard.id, email, token);
  }

  const { item, email, token } = props;
  return (
    <div className="menu-item-card shadow" id={`menu-item-${item.id}`} onClick={handleClick}>
      <p><b>{item.name}</b></p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <div className="btn btn-primary d-none" id={item.id} onClick={handleOrder}>
        <p>Order!</p>
      </div>
    </div>
  );
}

export default MenuItem;
