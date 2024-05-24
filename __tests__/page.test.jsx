import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page';

describe('Page', () => {
  it('renders a quote', () => {
    render(<Page />);

    const quote = screen.getByRole('Quote');

    expect(quote).toBeInTheDocument();
  });
});
