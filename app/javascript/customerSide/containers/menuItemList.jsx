import React, { Component } from 'react';

import MenuItem from '../components/menuItem';

export default class MenuItemList extends Component {
  render() {
    const { menu, isLoaded, category }  = this.props
    let array = [];
    if (isLoaded) {
      array = Object.values(category)[0];
    }

    return (
      <div className="menu-item-list-container">
        <h1>Menu Items</h1>
        { array.map( (item, idx) => <MenuItem item={item} key={idx} />)}
      </div>
    );
  }
}
