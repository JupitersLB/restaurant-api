import React from 'react';

const MenuItem = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className="menu-item-card shadow">
      <p><b>{item.name}</b></p>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
}

export default MenuItem;
