import React from 'react';

const Category = (props) => {
  const { category } = props;
  return (
    <div className="category-card">
      <p>{category}</p>
    </div>
  );
}

export default Category;
