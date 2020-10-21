import React, { Component } from 'react';

import MenuItem from '../components/menuItem';

export default class MenuItemList extends Component {
  render() {
    const { isLoaded, category, email, token }  = this.props
    let array = [];
    if (isLoaded) {
      array = Object.values(category)[0];
    }
    return (
      <div className="menu-item-list-container pt-4">
        { array.map( (item, idx) => <MenuItem item={item} email={email} token={token} key={idx} />)}
      </div>
    );
  }
}
