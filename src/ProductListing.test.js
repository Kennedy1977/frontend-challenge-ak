import React from 'react';
import { render } from '@testing-library/react';
import ProductListing from './ProductListing';

test('renders some text', () => {
  const { getByText } = render(<ProductListing />);
  const linkElement = getByText(/the technical challenge/i);
  expect(linkElement).toBeInTheDocument();
});
