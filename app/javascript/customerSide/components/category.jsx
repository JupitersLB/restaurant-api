import React from 'react';

const Category = (props) => {
  const { category, id, changeCategory } = props;

  const handleClick = () => {
    changeCategory(id);
  }

  return (
    <div className="category-card shadow" id={id} onClick={handleClick}>
      <p>{category}</p>
    </div>
  );
}

export default Category;
