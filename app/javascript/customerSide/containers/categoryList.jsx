import React, { Component } from 'react';

import Category from '../components/category';

export default class CategoryList extends Component {

  render() {
    const { menu, changeCategory }  = this.props
    return (
      <>
        <div className="restaurant-header pt-2">
          <h2 className="mb-0">Jupiters</h2>
          <img className="avatar ml-3" src="../../assets/jupiter.png"></img>
        </div>
        <div className="category-list-container">
          { menu.map( (category, idx) => <Category category={Object.keys(category)} id={idx} changeCategory={changeCategory} key={idx} />) }
        </div>
      </>
    );
  }
}
