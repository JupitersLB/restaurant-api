import React from 'react';

const MenuItem = (props) => {

  const handleClick = (e) => {
    const menuCard = document.querySelector(`#menu-item-${item.id} .btn`);
    menuCard.classList.remove('d-none');
  }

  const { item } = props;
  return (
    <div className="menu-item-card shadow" id={`menu-item-${item.id}`} onClick={handleClick}>
      <p><b>{item.name}</b></p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <div className="btn btn-primary d-none">
        <p>Order!</p>
      </div>
    </div>
  );
}

export default MenuItem;
