import React from 'react';
import swal from 'sweetalert';

import { cancelOrder } from '../actions/index';

const OrderItem = (props) => {


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
    <div className="order-item-card shadow" id={`order-item-${item.id}`}>
      <p><b>{item.name}</b></p>
      <p>¥{item.price}</p>
    </div>
  );
}

export default OrderItem;
