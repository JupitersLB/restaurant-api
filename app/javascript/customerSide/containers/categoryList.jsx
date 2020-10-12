import React, { Component } from 'react';

import Category from '../components/category';

export default class CategoryList extends Component {

  render() {
    const { menu }  = this.props
    return (
      <div className="category-list-container">
        { menu.map( (category, idx) => <Category category={Object.keys(category)} key={idx} />) }
      </div>
    );
  }
}
