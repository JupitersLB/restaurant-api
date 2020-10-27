import React from 'react';
import swal from 'sweetalert';


const MenuItem = (props) => {

  const handleClick = () => {
    const menuCard = document.querySelector(`#menu-item-${item.id}`);
    // const menuButton = document.querySelector(`#menu-item-${item.id} .btn`);
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
  console.log('render from menu-item');

  const { item, email, token, updateOrder } = props;
  return (
    <div className="menu-item-card shadow" id={`menu-item-${item.id}`} onClick={handleClick}>
      <img className="menu-item-image" src={item.image_url} alt=""></img>
      <div className="menu-item-info row">
        <div className="menu-item-info-details col-9">
          <p><b>{item.name}</b></p>
          <p>{item.description}</p>
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
