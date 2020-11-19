import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

import App from '../src/app.component.jsx';


afterEach(cleanup);


it('Upon initial load, it renders the Welcome component with the \'Start New Game\' button', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Start/i).textContent).toBe('Start New Game');
})

it('Displays the Board component when the \'Start New Game\' button is clicked on', async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      data:  [
        {id: 1, answer: 'France', question: 'Napolean III', category: {title: 'the last emperor'}},
        {id: 2, answer: 'France', question: 'Napolean III', category: {title: 'the last emperor'}},
        {id: 3, answer: 'France', question: 'Napolean III', category: {title: 'the last emperor'}},
        {id: 4, answer: 'France', question: 'Napolean III', category: {title: 'the last emperor'}},
        {id: 5, answer: 'France', question: 'Napolean III', category: {title: 'the last emperor'}},
      ],
      }), 100
    )
  })

  axios.get = jest.fn(() => promise);

  render(<App />);

  fireEvent.click(screen.getByTestId('welcome--button'));

  await screen.findByTestId('board');

  expect(screen.getByTestId('board')).toBeInTheDocument();
  screen.debug();
})

