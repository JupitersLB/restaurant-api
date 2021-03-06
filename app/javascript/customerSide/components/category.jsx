import React from 'react';

const Category = (props) => {
  const { category, id, changeCategory, activeIndex, changeActive } = props;

  const handleClick = () => {
    changeActive(id);
    changeCategory(id);
  }

  const className = activeIndex === id ? 'category-card active' : 'category-card';
  return (
    <div className={className} id={`category-${id}`} onClick={handleClick}>
      <h5>{category}</h5>
    </div>
  );
}

export default Category;
