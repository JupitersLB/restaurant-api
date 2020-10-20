import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { cancelOrder } from '../actions/index';

const OrderItem = (props) => {

  const handleClick = () => {
    const itemCard = document.querySelector(`#order-item-${item.id}`);
    cancelOrder(item.id, email, token);
  }

  const { item, email, token } = props;
  return (
    <div className="order-item-card shadow" id={`order-item-${item.id}`}>
      <div className="row">
        <div className="col-10">
          <p><b>{item.name}</b></p>
          <p>¥{item.price}</p>
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faTimesCircle} onClick={handleClick} />
        </div>
      </div>

    </div>
  );
}

export default OrderItem;
