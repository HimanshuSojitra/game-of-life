import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import * as utils from './utils';

test('renders game of life heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/game of life/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders random grid', () => {
  jest.spyOn(utils, "randomTiles");
  render(<App />);
  const buttonElement = screen.getByText(/reset/i);
  fireEvent.click(buttonElement);
  
  expect(utils.randomTiles).toHaveBeenCalled();
});
