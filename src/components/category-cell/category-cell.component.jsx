import React from 'react';

import './category-cell.styles.css';


class CategoryCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  render() {
    const { clue: { answer, question, value } } = this.props;
    return (
      <div className='category-cell'>
        <h1>
          ${value}
        </h1>
      </div>
    );
  }
}


export default CategoryCell;
