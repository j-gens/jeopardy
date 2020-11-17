import React from 'react';

import CategoryTitle from '../category-title/category-title.component.jsx';
import CategoryCell from '../category-cell/category-cell.component.jsx';
import './category.styles.css';


const Category = ({ category, ...otherProps }) => (
  <div className='category'>
    <CategoryTitle clue={category[0]} />
    {
      category.map((clue, index) =>
        <CategoryCell
          clue={clue}
          clueIndex={index}
          {...otherProps}
          key={clue.id}
        />
      )
    }
  </div>
);


export default Category;
