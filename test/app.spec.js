import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';

import App from '../src/app.component.jsx';


afterEach(cleanup);


it('renders the welcome screen', () => {
  const { getByText } = render(<App />);

  expect(getByText(/Welcome/i).textContent).toBe('Welcome to Jeopardy!  Are you ready to have some fun?')
})

