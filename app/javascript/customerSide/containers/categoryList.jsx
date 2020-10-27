import React, { Component } from 'react';

import image from '../components/jupiter.png'
import Category from '../components/category';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
  }

  changeActive = (idx) => {
    this.setState({ activeIndex: idx });
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.menu !== this.props.menu || nextState.activeIndex !== this.state.activeIndex;
  }

  render() {
    const { menu, changeCategory }  = this.props;
    const { activeIndex } = this.state;
    return (
      <>
        <div className="restaurant-header pt-2">
          <h2 className="mb-0">Jupiters</h2>
          <img className="avatar ml-3" src={image}></img>
        </div>
        <div className="category-list-container">
          { menu.map( (category, idx) => <Category category={Object.keys(category)} changeActive={this.changeActive} activeIndex={activeIndex} id={idx} changeCategory={changeCategory} key={idx} />) }
        </div>
      </>
    );
  }
}
