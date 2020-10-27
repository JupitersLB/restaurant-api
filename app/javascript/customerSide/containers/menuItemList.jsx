import React, { Component } from 'react';

import MenuItem from '../components/menuItem';

export default class MenuItemList extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.category !== this.props.category
  }

  render() {
    const { isLoaded, category, email, token, updateOrder }  = this.props
    let array = [];
    if (isLoaded) {
      array = Object.values(category)[0];
    }
    return (
      <div className="menu-item-list-container pt-4">
        { array.map( (item, idx) => <MenuItem item={item} itemRating={item.rating} email={email} token={token} key={idx} updateOrder={updateOrder} />)}
      </div>
    );
  }
}
