import React from 'react';

import './category-cell.styles.css';


class CategoryCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  handleClick = () => {
    const { clicked } = this.state;
    const { displayClue, clue: { question, answer, value } } = this.props;
    // If previously clicked on, do nothing
    if (clicked) return;
    // Else pass clue details back up to Board component
    this.setState({ clicked: true });
    displayClue(question, answer, value);
  }

  render() {
    const { clicked } = this.state;
    const { clue: { value } } = this.props;
    return (
      <div className='category-cell' onClick={this.handleClick}>
          {
            clicked ?
            ' ' :
            (<h1>${value}</h1>)
          }
      </div>
    );
  }
}


export default CategoryCell;
