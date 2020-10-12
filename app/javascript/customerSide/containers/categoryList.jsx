import React, { Component } from 'react';

import Category from '../components/category';

export default class CategoryList extends Component {

  render() {
    const { menu }  = this.props
    return (
      <div className="category-list-container">
        <h1>Categories</h1>
        { menu.map( (category, idx) => <Category category={Object.keys(category)} key={idx} />) }
      </div>
    );
  }
}
