import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

it('should have main element', () => {
  render(<Home />);

  const myElem = screen.getByRole('main');

  expect(myElem).toBeInTheDocument();
});
