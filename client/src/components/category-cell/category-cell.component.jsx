import React from 'react';

import './category-cell.styles.css';


const CategoryCell = ({ clue: { answer, question, value } }) => (
  <div className='category-cell'>
    <h1>
      $ {value}
    </h1>
  </div>
);


export default CategoryCell;
