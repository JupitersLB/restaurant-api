import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const OrderItem = (props) => {

  const handleClick = () => {
    const itemCard = document.querySelector(`#order-item-${item.id}`);
    updateOrder(item.id, email, token, 'cancel');
  }

  const { item, email, token, updateOrder } = props;

  return (
    <div className="order-item-card" id={`order-item-${item.id}`}>
      <div className="row">
        <div className="col-10">
          <div className="row justify-content-between">
            <div className="col-9">
              <p>{item.name}</p>
            </div>
            <div className="col-3">
              <p>¥{item.price}</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <FontAwesomeIcon icon={faTimesCircle} onClick={handleClick} />
        </div>
      </div>

    </div>
  );
}

export default OrderItem;
