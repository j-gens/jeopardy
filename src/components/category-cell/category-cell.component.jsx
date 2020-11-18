import React from 'react';

import './category-cell.styles';


class CategoryCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  componentDidMount() {
    const { clue: { display } } = this.props;
    this.setState({ clicked: !display });
  }

  handleClick = () => {
    const { clicked } = this.state;
    const { displayClue, clueIndex, categoryIndex, updateClueDisplay, clue } = this.props;
    const { question, answer, value } = clue;
    // If previously clicked on, do nothing
    if (clicked) return;
    // Else pass clue details back up to Board component
    updateClueDisplay(categoryIndex, clueIndex);
    displayClue(question, answer, value);
  }

  render() {
    const { clue: { value, display } } = this.props;
    return (
      <div className='category-cell' onClick={this.handleClick}>
          {
            display ?
            (<h1>${value}</h1>) :
            ' '
          }
      </div>
    );
  }
}


export default CategoryCell;
