import React from 'react';

import './category-title.styles.css';


const CategoryTitle = ({ clue: { category } }) => (
  <div className='category-title'>
    <h2>
      {category.title.toUpperCase()}
    </h2>
  </div>
);


export default CategoryTitle;
