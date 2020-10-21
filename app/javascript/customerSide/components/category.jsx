import React from 'react';

const Category = (props) => {
  const { category, id, changeCategory } = props;

  const handleClick = () => {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
      card.classList.remove('active')
    })
    const card = document.querySelector(`#category-${id}`);
    card.classList.add('active');
    changeCategory(id);

  }

  return (
    <div className="category-card" id={`category-${id}`} onClick={handleClick}>
      <h4>{category}</h4>
    </div>
  );
}

export default Category;
