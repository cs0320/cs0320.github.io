import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cs0320 in the navbar', () => {
  render(<App />);
  const navbarLink = screen.getByRole('link', { name: 'cs0320' });
  expect(navbarLink).toBeInTheDocument();
});
