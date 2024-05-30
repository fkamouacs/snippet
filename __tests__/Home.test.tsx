import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../frontend/src/app/page';
import React from 'react';

it('should have main element', () => {
  render(<Home />);

  const myElem = screen.getByRole('main');

  expect(myElem).toBeInTheDocument();
});
